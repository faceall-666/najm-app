/*
 * Najm's offline service worker (WP-10b; docs/QA.md §I). Owner: najm-qa. The page side: src/platform/serviceWorker.ts.
 *
 * Najm must open and draw the whole sky with no network — in the desert, camping season from mid-November. The build
 * writes its offline set into this file (src/platform/buildPlugin.ts): every file of the built site (app shell, the
 * hashed JS/CSS/fonts incl. the lazy chunks — cities, detail page, panels —, textures, constellation figures, images)
 * but this worker, source maps and the .woff copies of fonts that also come as .woff2 — installed with the worker —
 * and the music, which is kept only once the app has played it (`lazy`: no 2 MB download for a phone that never
 * plays it). Each new build changes this file, which is how the browser notices a new build.
 *
 * Caches (one origin, two apps — "/" and "/beta/": every cache name starts with the scope, and a worker only ever
 * opens, prunes or deletes caches with its own prefix):
 *   najm:<scope>:build:<id>~<key> the app shell and the hashed assets of one build (index.html, manifest, icons,
 *                                  version.json, assets/*). A build's shell is never mixed with another build's.
 *   najm:<scope>:static            textures, figures, images, music: shared by builds, one entry per file and content
 *                                  revision (`<url>?v=<rev>`), so a new build downloads only what changed.
 * Install: the whole offline set is fetched (4 at a time, revalidated against the server, never taken from a stale
 * HTTP cache) and each file is checked against the build's SHA-256 before it is kept; files already cached with the
 * same revision are reused. The install fails if anything is missing or different, and is tried again at the next
 * launch, resuming where it stopped. A build becomes active only when its whole offline set is cached.
 * Update: the new worker waits until every window of the app is closed, so a new build is used from the next launch,
 * never in the middle of a session (no skipWaiting, except when the page asks for it on an explicit tap).
 * Activate: drop this scope's older build caches (the previous complete one is kept for a window still open on it)
 * and the static files the build no longer lists (music already kept stays, if unchanged); take control of open windows
 * on the very first install.
 * Fetch (GET, same origin, inside this scope only; other scopes, other origins and range requests pass untouched):
 *   navigation to the app (./, ./index.html, any query) → this build's cached index.html — the shell is served stale
 *                                    and revalidated as a whole build (sw.js), not file by file;
 *   version.json                   → the network first (what is deployed), the cached copy offline;
 *   files of the offline set, assets/*, tex|art|media|brand|audio/* → cache first, then the network (and a copy is
 *                                    kept); anything else → the network, untouched.
 */
"use strict";

// The offline set, written in at build time: { build, channel, key, budget, files: [[path, bytes, rev], …], lazy: […] } —
// paths relative to this file's folder, rev = the first 16 hex digits of the file's SHA-256, key = the same of the list;
// `files` are installed, `lazy` ones kept after their first use. null in public/sw.js itself (the dev server's copy):
// then this worker keeps and answers nothing.
const NAJM = {"build":"2026.10.14-688577a","channel":"main","key":"91d3982d","budget":34603008,"files":[["art/LICENSE.txt",916,"3e3f9ea5039c946a"],["art/andromeda.webp",41686,"e8eef731237fd599"],["art/antlia.webp",49092,"ff1bf0f4466c039d"],["art/apus.webp",44134,"833b5833485bf77d"],["art/aquarius.webp",55900,"8edc0ca10c4d0ca0"],["art/aquila.webp",62454,"4b11f1f1aa6cd763"],["art/ara.webp",45712,"b5e15a9bf35c87da"],["art/argonavis.webp",69182,"ea3dee6119e375f8"],["art/aries.webp",67768,"6f682408b1b1959d"],["art/atlas.webp",606946,"bcd8279f13a13597"],["art/auriga.webp",68972,"496645c8a7ef1946"],["art/bootes.webp",48748,"2989f4b17e2e545b"],["art/caelum.webp",28554,"130efce82aca4c18"],["art/camelopardalis.webp",38450,"3b1749a77cbecb74"],["art/cancer.webp",55978,"726074e2967e9981"],["art/canes-venatici.webp",55494,"d4f2270b2afa022e"],["art/canis-major.webp",52234,"275159c84428e232"],["art/canis-minor.webp",58284,"9232840a3fb203b8"],["art/capricornus.webp",67696,"0c4cdb4f40ce3105"],["art/cassiopeia.webp",57268,"2302b5dc07d35acc"],["art/centaurus.webp",46304,"adbfefd14d245f89"],["art/cepheus.webp",56718,"c52948eb195d5e59"],["art/cetus.webp",64754,"c7caffde35fc97f8"],["art/chamaeleon.webp",48224,"5022dafbe80d3f52"],["art/circinus.webp",21336,"71f963f609059d7e"],["art/columba.webp",59326,"d28048a6ff6a0b32"],["art/coma-berenices.webp",46470,"fd0cab9e71ad0ff4"],["art/corona-australis.webp",52858,"585cd8002a7ebcb7"],["art/corona-borealis.webp",71924,"f211ca9f442217fc"],["art/corvus.webp",64722,"91970da3e68f2518"],["art/crater.webp",71990,"6393d34ebd47a5a0"],["art/crux.webp",64020,"91493d912d4424c6"],["art/cygnus.webp",39426,"fd665e91cd5d6243"],["art/delphinus.webp",49048,"de46d045ada37029"],["art/dorado.webp",44042,"44ea4a6578aedc16"],["art/draco.webp",65116,"063fda56fe5cb0a5"],["art/equuleus.webp",67738,"29b1db2544da7268"],["art/eridanus.webp",31220,"ecd533fcc52789c7"],["art/fornax.webp",57986,"70fee63ff440a156"],["art/gemini.webp",71170,"a6ccea575c646bcf"],["art/grus.webp",49966,"c0337e3f58501332"],["art/hatch/andromeda.webp",108154,"46f0470aca2ef437"],["art/hatch/antlia.webp",97012,"df11b6456648c14e"],["art/hatch/apus.webp",89208,"18e0374e8f644b93"],["art/hatch/aquarius.webp",109270,"315e419991711ca8"],["art/hatch/aquila.webp",111474,"9e961dece167495d"],["art/hatch/ara.webp",81316,"c3c86d96ade810ee"],["art/hatch/argonavis.webp",135192,"1c5a57cf061b3c59"],["art/hatch/aries.webp",135116,"602af162638e44bf"],["art/hatch/auriga.webp",134548,"29bc4f3f66c38316"],["art/hatch/bootes.webp",92290,"202707b617af0682"],["art/hatch/caelum.webp",59670,"6e12693c2d8fe642"],["art/hatch/camelopardalis.webp",75940,"3807943d6aa9caba"],["art/hatch/cancer.webp",118428,"235f77aca3be013d"],["art/hatch/canes-venatici.webp",105184,"247d1c2fa3acc1bb"],["art/hatch/canis-major.webp",109476,"2a0faeef5d048db6"],["art/hatch/canis-minor.webp",127478,"924407425c29a6c7"],["art/hatch/capricornus.webp",141538,"b67add378d27120a"],["art/hatch/cassiopeia.webp",114236,"9b6d86353bb41544"],["art/hatch/centaurus.webp",90496,"89ed012a7edfca90"],["art/hatch/cepheus.webp",109790,"29ac5e950d1143ea"],["art/hatch/cetus.webp",126502,"f75db3f5a614dd2c"],["art/hatch/chamaeleon.webp",85736,"b118738cec60c2fe"],["art/hatch/circinus.webp",38812,"8bb823221fe7a737"],["art/hatch/columba.webp",118724,"26afdbb3ee635972"],["art/hatch/coma-berenices.webp",92838,"eddb80dbfbe109d1"],["art/hatch/corona-australis.webp",96008,"0d54b00fd26757b4"],["art/hatch/corona-borealis.webp",149652,"e5425a37b4287e08"],["art/hatch/corvus.webp",117004,"e0fed672e0274b07"],["art/hatch/crater.webp",171266,"76a883ed34d7a80c"],["art/hatch/crux.webp",128134,"78d4cf18c42b3829"],["art/hatch/cygnus.webp",76052,"a47d61db2101602e"],["art/hatch/delphinus.webp",110388,"bb26d8dd34d1fe5f"],["art/hatch/dorado.webp",86226,"23af362e64843683"],["art/hatch/draco.webp",127626,"5b0fb04cf089e598"],["art/hatch/equuleus.webp",147192,"a7b45571ac6323b6"],["art/hatch/eridanus.webp",54400,"ef07be492201ba83"],["art/hatch/fornax.webp",116050,"0245265fe7faedb2"],["art/hatch/gemini.webp",139406,"32e8c61563e4c63a"],["art/hatch/grus.webp",93418,"250577512022d6f5"],["art/hatch/hercules.webp",127208,"6fc7de0602d7980a"],["art/hatch/horlogium.webp",74902,"81f2c99d447f499a"],["art/hatch/hydra.webp",45836,"e3f0eb001e30ce84"],["art/hatch/hydrus.webp",52784,"5c3e9ef1388e6251"],["art/hatch/indus.webp",95388,"810c257eaeb11b3e"],["art/hatch/lacerta.webp",86576,"55dadce7c9d4421f"],["art/hatch/leo-minor.webp",138088,"145221b6c300f9db"],["art/hatch/leo.webp",91722,"a20d53fafd3d765d"],["art/hatch/lepus.webp",181722,"9c3c89ffbfe5983c"],["art/hatch/libra.webp",70640,"d460861211411b38"],["art/hatch/lupus.webp",123758,"39d0ca1d088d762a"],["art/hatch/lynx.webp",108966,"88f44a9af50a169a"],["art/hatch/lyra.webp",94924,"da6ccfdacb4e7e3d"],["art/hatch/mensa.webp",122742,"8d7bfe659d6c99f2"],["art/hatch/microscopium.webp",68774,"72b3d9ea67ee0779"],["art/hatch/monoceros.webp",93858,"3fdde46b687d819b"],["art/hatch/musca.webp",132144,"2490adced530a30e"],["art/hatch/norma.webp",61290,"538fe0825ee4736f"],["art/hatch/octans.webp",115386,"6d8b558508cd4312"],["art/hatch/ophiuchus.webp",101322,"60482f7d46c6e3ce"],["art/hatch/orion.webp",112124,"bb9f37de7cdb1d9b"],["art/hatch/pavo.webp",166700,"eaea8b330e098156"],["art/hatch/pegasus.webp",94302,"ab8090d3cdbd05c5"],["art/hatch/perseus.webp",132896,"2f670dfebcc3909e"],["art/hatch/phoenix.webp",142640,"183547ea3d7432c5"],["art/hatch/pictor.webp",98086,"3ad524013a6cf223"],["art/hatch/pisces.webp",55480,"7a040660d2ffe4cf"],["art/hatch/piscis-austrinus.webp",113674,"6cbed9fb52425553"],["art/hatch/pyxis.webp",187916,"8a0e0d2dcd8208a4"],["art/hatch/reticulum.webp",115360,"94e7cc1a6dabee27"],["art/hatch/sagitta.webp",24432,"8cda6e8465c98dc8"],["art/hatch/sagittarius.webp",108388,"2ef5389cc649b351"],["art/hatch/scorpius.webp",97728,"94eb6b4e1cfe7b3b"],["art/hatch/sculptor.webp",98128,"7e4cabc3b1a5c27d"],["art/hatch/scutum.webp",201542,"77817a6907ba282b"],["art/hatch/sextans.webp",119324,"533c0f5df720536c"],["art/hatch/taurus.webp",108918,"a03190634e707c40"],["art/hatch/telescopium.webp",85522,"01a071a32adf3ab1"],["art/hatch/triangulum-australe.webp",117488,"d3c82d30823ef069"],["art/hatch/triangulum.webp",62470,"f73a95876763c039"],["art/hatch/tucana.webp",51326,"c2737ce8c1baa9e9"],["art/hatch/ursa-major.webp",129330,"11d2270622b93de3"],["art/hatch/ursa-minor.webp",100600,"0dea2d821529eedf"],["art/hatch/virgo.webp",89160,"9f88efca1dcacf68"],["art/hatch/volans.webp",41770,"40f5cd09a0e4eade"],["art/hatch/vulpecula.webp",129162,"7c464097cb5d41cd"],["art/hercules.webp",63864,"708bc3c1d6da94c8"],["art/horlogium.webp",40614,"780b437a50d159d6"],["art/hydra.webp",24114,"e6efb0032935bc68"],["art/hydrus.webp",28286,"485b537c4d362f78"],["art/indus.webp",54414,"86807e93176d0926"],["art/lacerta.webp",44322,"8a499e411353904b"],["art/leo-minor.webp",58696,"1a354439f0acd5b5"],["art/leo.webp",46036,"1d364ff7c892aebc"],["art/lepus.webp",77574,"617b82530a0a537c"],["art/libra.webp",38122,"28aa927e8f3f2539"],["art/lupus.webp",56758,"00e382888c304c39"],["art/lynx.webp",56992,"a63fa9bb011f01c0"],["art/lyra.webp",43852,"11bf3d1ac20fc683"],["art/mensa.webp",67514,"874fcbf82c6b42a6"],["art/microscopium.webp",35004,"2b9b164e921125ee"],["art/monoceros.webp",47740,"bc96f8451988022f"],["art/musca.webp",66372,"59e37a55b695a5b7"],["art/norma.webp",36588,"5c62bcb329c68a96"],["art/octans.webp",55244,"230b482b017244e5"],["art/ophiuchus.webp",51548,"e863e1ead4b66dda"],["art/orion.webp",56470,"bcfc3b3265db0b25"],["art/pavo.webp",87242,"62982187da56ab9b"],["art/pegasus.webp",47732,"1ca9442ff4489394"],["art/perseus.webp",67158,"06200c701bc744da"],["art/phoenix.webp",72156,"e04b426257d6d57b"],["art/pictor.webp",45850,"c24da153ebbe4e42"],["art/pisces.webp",28436,"63e0728358322d37"],["art/piscis-austrinus.webp",53882,"23c30cc14a54dd00"],["art/pyxis.webp",83078,"d2819a4525ed83f4"],["art/reticulum.webp",53098,"240ce217a08b872a"],["art/sagitta.webp",13238,"4307cedbd32b0e85"],["art/sagittarius.webp",55666,"0e4db0d37d58e362"],["art/scorpius.webp",51358,"3fe3f35f88144067"],["art/sculptor.webp",49834,"34869865b8f7851d"],["art/scutum.webp",100918,"b5f41e93c13ed529"],["art/sextans.webp",67612,"3dd28f2f11d21470"],["art/sheets/andromeda.webp",49430,"f50ccfa90a565d32"],["art/sheets/antlia.webp",50254,"79e6efb7e580203c"],["art/sheets/apus.webp",59102,"ed7bac5ad31bee9a"],["art/sheets/aquarius.webp",55454,"0c4d0aae8da0b57f"],["art/sheets/aquila.webp",66028,"07aa3060d65b4df5"],["art/sheets/ara.webp",68288,"7680a1ae0a72d391"],["art/sheets/argonavis.webp",73214,"082e899a7afd0893"],["art/sheets/aries.webp",66924,"2f7359e8a93b3ef6"],["art/sheets/auriga.webp",72808,"0b39bcefade1c3d1"],["art/sheets/bootes.webp",58270,"cfe9c108f0605736"],["art/sheets/caelum.webp",38484,"02f1beef08a663e0"],["art/sheets/camelopardalis.webp",36402,"8b4a03e37d957007"],["art/sheets/cancer.webp",61084,"b8d978a5a31cea7d"],["art/sheets/canes-venatici.webp",52666,"46c1974acf0a31fd"],["art/sheets/canis-major.webp",41008,"e9990f51d1022986"],["art/sheets/canis-minor.webp",49164,"dd591f7a0f4ad1a5"],["art/sheets/capricornus.webp",58048,"28872c20d6eab29a"],["art/sheets/cassiopeia.webp",64690,"499dfea9ff33258a"],["art/sheets/centaurus.webp",45994,"5babfa334ea070c1"],["art/sheets/cepheus.webp",58858,"66369d4f7474267c"],["art/sheets/cetus.webp",61102,"6feebdeed29feea6"],["art/sheets/chamaeleon.webp",44878,"e315f96d3313f07c"],["art/sheets/circinus.webp",39040,"15e393d8ef5b60f8"],["art/sheets/columba.webp",59118,"88bc15b6b3854ffc"],["art/sheets/coma-berenices.webp",71602,"8aaeca2b3b02aca7"],["art/sheets/corona-australis.webp",75204,"c386b7302f35352e"],["art/sheets/corona-borealis.webp",64278,"975a637ceda15982"],["art/sheets/corvus.webp",67956,"76d1c57708f974e2"],["art/sheets/crater.webp",56918,"fb3e9893f3a63b37"],["art/sheets/crux.webp",74548,"b0cf142d67b8c8f4"],["art/sheets/cygnus.webp",41850,"f0b746f3ecb7a608"],["art/sheets/delphinus.webp",43232,"2b00aff220266eda"],["art/sheets/dorado.webp",38696,"52d6cf6258e01cc3"],["art/sheets/draco.webp",57498,"ce7c046eb00b7941"],["art/sheets/equuleus.webp",51108,"f37f6d2e4457acfe"],["art/sheets/eridanus.webp",39134,"6bf5b6ed9b39696f"],["art/sheets/fornax.webp",45880,"474d056fa673c677"],["art/sheets/gemini.webp",73824,"e97023e56c8b0e70"],["art/sheets/grus.webp",58610,"8611df2c9de51190"],["art/sheets/hercules.webp",58524,"daceef8591bd4604"],["art/sheets/horlogium.webp",59138,"838b235378980e6a"],["art/sheets/hydra.webp",34810,"4ba3821ec0e4d793"],["art/sheets/hydrus.webp",46472,"4fd237a2f1118da8"],["art/sheets/indus.webp",65834,"c4f71ad4ac104701"],["art/sheets/lacerta.webp",55812,"1d84707d95062a8f"],["art/sheets/leo-minor.webp",38908,"7a692a33285ad49d"],["art/sheets/leo.webp",52896,"04cb013400aad38e"],["art/sheets/lepus.webp",63462,"3a8becad46b4a159"],["art/sheets/libra.webp",57320,"1d04fdb8acce9cd4"],["art/sheets/lupus.webp",39916,"92a492cf58d84bb6"],["art/sheets/lynx.webp",32430,"e3fe6617f02e50f4"],["art/sheets/lyra.webp",40348,"128c7a56aaef26b1"],["art/sheets/mensa.webp",64718,"a84c95d9ca899c6e"],["art/sheets/microscopium.webp",43746,"a30a768d296f117d"],["art/sheets/monoceros.webp",39912,"807072a7685f7a19"],["art/sheets/musca.webp",83556,"42504cf76c73ca6d"],["art/sheets/norma.webp",42452,"f90974f8ee388598"],["art/sheets/octans.webp",56476,"6596d6c59e568b84"],["art/sheets/ophiuchus.webp",53874,"be2a27c16d4d0aea"],["art/sheets/orion.webp",58610,"baf69b33650f0084"],["art/sheets/pavo.webp",72940,"9005adc3aa756203"],["art/sheets/pegasus.webp",46906,"45352ff43a732d21"],["art/sheets/perseus.webp",76128,"7bd0890be95fbcc9"],["art/sheets/phoenix.webp",88602,"7ce954ef53c57119"],["art/sheets/pictor.webp",44992,"b9b37fc2d260de0b"],["art/sheets/pisces.webp",35966,"56c3589a9d05958d"],["art/sheets/piscis-austrinus.webp",49072,"a0ebd9cff5363a53"],["art/sheets/pyxis.webp",62106,"644ed9aa04ee6e42"],["art/sheets/reticulum.webp",72616,"c28069688e9f3b12"],["art/sheets/sagitta.webp",25086,"d57fcd4367138b54"],["art/sheets/sagittarius.webp",56950,"ac9cd07c1fe0c87d"],["art/sheets/scorpius.webp",59056,"2b01dd99728a3c06"],["art/sheets/sculptor.webp",58082,"e8989ab728d592f1"],["art/sheets/scutum.webp",92600,"33823c8fd05eb322"],["art/sheets/sextans.webp",80062,"ed54ff042a76eed6"],["art/sheets/taurus.webp",43458,"49809e95437bc94c"],["art/sheets/telescopium.webp",46210,"dedcdb26267b7cab"],["art/sheets/triangulum-australe.webp",36758,"ba2242e8d6f812ff"],["art/sheets/triangulum.webp",31744,"ddf5f13788a1df1e"],["art/sheets/tucana.webp",31318,"49c9a1981d86dedd"],["art/sheets/ursa-major.webp",40162,"a2b48fef810888d6"],["art/sheets/ursa-minor.webp",35832,"abfe0cf23ab45f58"],["art/sheets/virgo.webp",60558,"2a9efb0d45fde09b"],["art/sheets/volans.webp",34482,"a5a2b55f23d86d6f"],["art/sheets/vulpecula.webp",42098,"04555b053b01cadf"],["art/taurus.webp",56466,"8df29dc6a7d2e2a3"],["art/telescopium.webp",42062,"31b0f5afe38d9575"],["art/thumbs/andromeda.webp",4310,"f5ac6f127dbcc052"],["art/thumbs/antlia.webp",4160,"1566d9857bd3ca8f"],["art/thumbs/apus.webp",4508,"05af504b7f571c86"],["art/thumbs/aquarius.webp",5340,"edf4ca989782f21b"],["art/thumbs/aquila.webp",5512,"ad2cf6c3f7baef0c"],["art/thumbs/ara.webp",5028,"091bb11e82a0424e"],["art/thumbs/argonavis.webp",6230,"57e87992132f8884"],["art/thumbs/aries.webp",6000,"2328485dd825cc00"],["art/thumbs/auriga.webp",6304,"b43def12837a0181"],["art/thumbs/bootes.webp",4776,"f3262169ddcc4d19"],["art/thumbs/caelum.webp",2874,"e4b9f4dd57973b2a"],["art/thumbs/camelopardalis.webp",3272,"e24d13c8803bfa07"],["art/thumbs/cancer.webp",5122,"a75385bfa81d4029"],["art/thumbs/canes-venatici.webp",4734,"13e870ac7a750e05"],["art/thumbs/canis-major.webp",4020,"f4606966dd23fbef"],["art/thumbs/canis-minor.webp",4242,"172b01203e367b8a"],["art/thumbs/capricornus.webp",4864,"c7b4e6a3b1c59e5e"],["art/thumbs/cassiopeia.webp",5704,"6351534b9623aa06"],["art/thumbs/centaurus.webp",4374,"bc42284983f10f42"],["art/thumbs/cepheus.webp",5128,"05668311dc0e1ebf"],["art/thumbs/cetus.webp",5158,"62a071c5ad0ad61f"],["art/thumbs/chamaeleon.webp",4030,"bde0273b9ee503b3"],["art/thumbs/circinus.webp",2734,"5e3490025cbbbb1c"],["art/thumbs/columba.webp",5286,"a1bb5ff98bddf24a"],["art/thumbs/coma-berenices.webp",5722,"e58b8682e9714a78"],["art/thumbs/corona-australis.webp",6006,"2a1bc3648b113a9f"],["art/thumbs/corona-borealis.webp",5456,"118582bad1580fca"],["art/thumbs/corvus.webp",5886,"37b5145fe35b5f56"],["art/thumbs/crater.webp",5226,"5706e17a11ed6cb5"],["art/thumbs/crux.webp",5646,"1d285db8533016bd"],["art/thumbs/cygnus.webp",3584,"f9f8cc322609701a"],["art/thumbs/delphinus.webp",3814,"fe2ac6782d751add"],["art/thumbs/dorado.webp",3384,"4c0b7ba75e1c7d0c"],["art/thumbs/draco.webp",5288,"013822fd5909b43e"],["art/thumbs/equuleus.webp",4496,"6a60ee64b67ebd74"],["art/thumbs/eridanus.webp",3532,"4a4105d3884b2367"],["art/thumbs/fornax.webp",4698,"9ac359fb1d14c8bb"],["art/thumbs/gemini.webp",6558,"7ad26295f32b712e"],["art/thumbs/grus.webp",4846,"9922b9744fca232c"],["art/thumbs/hercules.webp",5810,"c1ba5df52396d67f"],["art/thumbs/horlogium.webp",4528,"898bac3e81e0d899"],["art/thumbs/hydra.webp",2756,"29d3dea0cd31f306"],["art/thumbs/hydrus.webp",3458,"de6f20b3f09b2493"],["art/thumbs/indus.webp",5288,"70c7c5ead5ed4ef7"],["art/thumbs/lacerta.webp",4274,"d01867137518dd1a"],["art/thumbs/leo-minor.webp",3864,"9230d1a026121841"],["art/thumbs/leo.webp",4406,"9eaea93746fc257b"],["art/thumbs/lepus.webp",5622,"b696ecf2b22ee5c3"],["art/thumbs/libra.webp",4864,"7031d25df4e79cf1"],["art/thumbs/lupus.webp",3892,"ebb148976d3e4d91"],["art/thumbs/lynx.webp",3420,"57668a2579a15880"],["art/thumbs/lyra.webp",4396,"77ae382ce2a82d04"],["art/thumbs/mensa.webp",5788,"2228eaeafb2adb53"],["art/thumbs/microscopium.webp",3794,"502aaa3583b1d028"],["art/thumbs/monoceros.webp",3810,"87de02c2bc6012ca"],["art/thumbs/musca.webp",6452,"b3d253be4f7f36a4"],["art/thumbs/norma.webp",2910,"4a911b3a89cc8217"],["art/thumbs/octans.webp",5092,"6cffe99e1d133520"],["art/thumbs/ophiuchus.webp",4852,"af409ad509e52934"],["art/thumbs/orion.webp",5416,"ecec12d4426d1cd4"],["art/thumbs/pavo.webp",6614,"1e483d42c800c2b0"],["art/thumbs/pegasus.webp",4116,"5253803d3407e4dc"],["art/thumbs/perseus.webp",6494,"f4acb267345469bf"],["art/thumbs/phoenix.webp",6860,"2abef22f7c5c48c7"],["art/thumbs/pictor.webp",4086,"aaf9d2cc34af2c3c"],["art/thumbs/pisces.webp",3088,"9f0cec72a740aafc"],["art/thumbs/piscis-austrinus.webp",3830,"5665ecef29f3b33c"],["art/thumbs/pyxis.webp",5144,"4108050424ccbecb"],["art/thumbs/reticulum.webp",4948,"05361239228e5756"],["art/thumbs/sagitta.webp",1616,"bf034685b4509333"],["art/thumbs/sagittarius.webp",5396,"84816177f0ae0dcc"],["art/thumbs/scorpius.webp",5344,"962e135fff83d678"],["art/thumbs/sculptor.webp",4664,"d00c00e0b82fde3a"],["art/thumbs/scutum.webp",8114,"c7d8452de4fe90ff"],["art/thumbs/sextans.webp",6510,"aa9c279939e2d135"],["art/thumbs/taurus.webp",4370,"7a427af04b980a86"],["art/thumbs/telescopium.webp",4062,"b19468bdcd1b1ed1"],["art/thumbs/triangulum-australe.webp",3234,"33db77da9d4200e4"],["art/thumbs/triangulum.webp",2734,"7b277ff106affcad"],["art/thumbs/tucana.webp",2638,"26086ae9668d6ac1"],["art/thumbs/ursa-major.webp",3954,"e7550f55572ac495"],["art/thumbs/ursa-minor.webp",3594,"ed011c52b83cce0e"],["art/thumbs/virgo.webp",5000,"6cf28ccdaf451e5c"],["art/thumbs/volans.webp",2480,"4abe851bfb1b9158"],["art/thumbs/vulpecula.webp",4102,"f0b4be1e2e352ae7"],["art/triangulum-australe.webp",50574,"d5505371eb575c86"],["art/triangulum.webp",32280,"44cf619ff856a40d"],["art/tucana.webp",27618,"26503a49bf24ff62"],["art/ursa-major.webp",58180,"86a3096578f67b52"],["art/ursa-minor.webp",50536,"501cfe7f5cd170fe"],["art/virgo.webp",48024,"f2f39af8c7d99c40"],["art/volans.webp",16200,"632a1b1766e9970d"],["art/vulpecula.webp",59966,"fa43544daccbb315"],["assets/AmiriQuran-6TfY6zeW.ttf",136920,"e2a47644762d16bd"],["assets/Calibrate-3XTEH34p.js",12214,"d23a854811deec90"],["assets/CityPicker-JoQJmRzW.js",5082,"8f0d9022e1dbdd2d"],["assets/CultureOnboarding-DGXZGmBm.js",4195,"843c67da0060f0ca"],["assets/Detail-aln1X_xi.js",41730,"5266b54f5b1bcf88"],["assets/Diagnostics-XxgscHYD.js",12548,"b1c9de5b945a8131"],["assets/DisplayPanel-Ckg0eWXg.js",17293,"c250afade717cace"],["assets/Entry-DZQwkJru.js",7488,"2a16497de8906519"],["assets/EventsPage-DZdTvUsu.js",32117,"6573a98d7318db97"],["assets/EventsPage-vPUdanLB.css",2457,"27129356be1c6245"],["assets/Explore-COJGub41.js",28474,"d6358d7ef5718456"],["assets/Explore-Jdu4oNyV.css",3414,"2d104b77f95d23a2"],["assets/HilalWatch-Dcr6AF2L.js",6254,"0854328c8646266c"],["assets/JourneysList-ChKKftXP.css",1402,"bbbf432a324ad0fb"],["assets/JourneysList-E_6yDU_o.js",2083,"8ff19cd4ccef0df3"],["assets/LoadError-Dq95H1yE.js",459,"8767ed8d94c8d88b"],["assets/OFL-CP3mpQPw.txt",4389,"72de68e5954f4fdd"],["assets/Peek--yRIDGon.js",2064,"238c42f880dfeb94"],["assets/Player-C7a1Majy.js",132356,"f79a42d8ee685e4d"],["assets/Player-D7emdTun.css",6486,"7ae46e94b4fdcc3a"],["assets/PlusOverview-CirRbHtU.js",3351,"f14a8c58ae065e49"],["assets/QuranReader-1JTAaMFE.css",4365,"7ab80ad6cf00da6b"],["assets/QuranReader-DjqiixF8.js",9503,"64b8409ecaac948a"],["assets/Sections-NERq6GZL.js",325946,"e58405f6f3349a93"],["assets/Sheets-DnTiYhvu.js",4203,"923ade9c25e063e5"],["assets/SnapshotView-CmZib80T.js",1580,"af9b80edb914e17f"],["assets/Stories-DQHKLwO_.js",1936,"a22dd969e8ed34e9"],["assets/align-DgG2bnWU.css",3334,"c6aa6d1b7bc31860"],["assets/babylon-BzJfYkU2.js",52566,"3aa166e271783ce4"],["assets/captions.ar-BY39YkEh.js",29432,"c5aa34bcf3b6dba7"],["assets/captions.en-D_84AY-t.js",22509,"11b169b2eabe3cda"],["assets/catalog-pZv17oAP.js",5792,"74a52e0b8a22e9f2"],["assets/cities-DkWLQuXU.js",70939,"c691ae280dc03082"],["assets/clockRules2026e-B0mOCvRM.js",4110,"d9ef4a356785e7d0"],["assets/config-6hlP5wp3.js",40,"decffc7e398effa2"],["assets/culture-CJrNsraf.js",1524,"5fb1f25e630acf5f"],["assets/culture-DbVyfkfa.css",2454,"09add4ab8da83d7f"],["assets/culture-Ddcmh09A.js",1969,"371aeca97006b4bf"],["assets/details-Bdz3I-qG.css",14270,"d264ec790a1a4e5a"],["assets/details-D8Lk_aS7.js",254,"6d845542c6c9b04e"],["assets/details-DYl-wHrE.js",25973,"f03940f139280c6b"],["assets/dwarfs-DoSrtDfv.js",12475,"2120a44f0bd5a2fb"],["assets/egypt-MjfpOcJb.js",47389,"2df2fb573d1de241"],["assets/explore-Bzl_9Vkt.css",6151,"98ea5af3d046c44b"],["assets/explore-Cn1nlaQ8.js",11236,"fa091e5f1c90e780"],["assets/facts-c9DlgsV8.js",10347,"0ea8668001330b39"],["assets/fullQaBindings-BGMvq0VZ.js",66138,"34ee35d17b22d927"],["assets/heritageSky-B1OblrZ6.js",5568,"744b95fd3b4867c4"],["assets/heritageStars-Do23LjeK.js",5932,"37830ea5790f2eb9"],["assets/hilal-BfKCxuMt.css",4385,"7f7f3e8f31fc70bb"],["assets/hilal-CPuRr6bg.js",4768,"69d2f14f0704d867"],["assets/iana-2026e.json-8nhve5Or.gz",33497,"7d746774258b391f"],["assets/ibm-plex-sans-arabic-arabic-400-normal-BM00HIL5.woff2",42880,"bddd926d02ede39b"],["assets/ibm-plex-sans-arabic-arabic-500-normal-CVSLUoBh.woff2",45488,"e6a6ef2b0ea29fdd"],["assets/ibm-plex-sans-arabic-arabic-700-normal-CW2fYlQC.woff2",44092,"172453d45ea51a5e"],["assets/ibm-plex-sans-arabic-latin-400-normal-B5r_Re2g.woff2",19200,"769a7f798f34c5b4"],["assets/ibm-plex-sans-arabic-latin-500-normal-Bg_w3V9S.woff2",20116,"812d46ed38b32ef2"],["assets/ibm-plex-sans-arabic-latin-700-normal-B1l2chsb.woff2",19544,"d0c903368f403e09"],["assets/icons-B5bS3Wti.js",10898,"66ddbd4381feea6b"],["assets/icons-B6s3qr4q.js",8253,"6160d8fb81a4c2c6"],["assets/iconsMore-CtE-TjX8.js",38841,"9fcdf034f72def4f"],["assets/ics-xgNeuaNJ.js",1733,"f7c5ef9e55e19da2"],["assets/index-BG2hnLSX.js",13619,"4fb75214144ac21b"],["assets/index-BRz51Aqe.css",1435,"a4b1c2a8dcbd7657"],["assets/index-Bd502_yP.js",3195,"df6b0696bb6294da"],["assets/index-BrKHYn-Q.css",41536,"c638585df24707a1"],["assets/index-CBBYo93c.js",10934,"e131776003098720"],["assets/index-DmLsfO5N.js",1537738,"42a8cb4d1cd7503b"],["assets/index-cCQpSYcG.js",16601,"bd85d5437b8a07e3"],["assets/iss-DTwcqlHE.js",3175,"dba7a7cb1d669028"],["assets/journey-CIIf3t5K.css",16017,"20d6977f9d30f40c"],["assets/journey-DiEAXKo6.js",62008,"105a41b653591031"],["assets/journeyGalaxyScene-BNXR9a2_.js",6049,"f566e8c147825f7f"],["assets/journeyOrbitCamera-BRdMX0vz.js",4703,"6064bf3caa95da31"],["assets/journeySpaceDraw-BajxOPmu.js",8633,"48b8ad50e9d09493"],["assets/journeySpaceScene-C8LuRFPj.js",8733,"eca9510c4ad83ebd"],["assets/lenses-BGyXYzv9.js",1827,"5a84d4ad06e47c89"],["assets/model-D4iuuNg3.js",18269,"a320022618d9806c"],["assets/moonPhase-Dqmdv67I.js",300,"4ea65e874a703ec9"],["assets/narration-DdTcW1Bg.js",2897,"80a9e24c3c7426fc"],["assets/nativeEnglishQaBindings-xxTZqJ97.js",38180,"1500919435ea0e23"],["assets/noto-kufi-arabic-arabic-600-normal-DpQOABqh.woff2",47416,"2273ed03fcd74389"],["assets/noto-kufi-arabic-arabic-700-normal-CGKuvZQr.woff2",43872,"c964525ff0ef5e10"],["assets/noto-kufi-arabic-latin-600-normal-BU20Dfqv.woff2",10468,"c347879a7bf417d4"],["assets/noto-kufi-arabic-latin-700-normal-CeymQha4.woff2",10384,"d096450fc5f521ae"],["assets/player-C5PFuvgN.js",7632,"de34d5adaad5c569"],["assets/probeFrame-Cv3v9G0a.js",1551,"4ebf7d3687e8a03f"],["assets/quran-BPgvfvP4.js",93576,"227bcbfec2a208a9"],["assets/quranController-DYXOvJvy.js",166904,"ca12d3f177ebf87d"],["assets/quranController-DsooEClB.css",14361,"d91cdb25486bcca0"],["assets/quranJourneyStars-fw2H-q9K.js",11972,"6398dcf91884eeae"],["assets/registration-BtEfBspW.js",190539,"f1ab7bc78f6a3b56"],["assets/registration-BtS87siz.css",9398,"4192d91c0274a9f8"],["assets/resolveGpsPlace-BY6_jRRK.js",11027,"edf0c8d9bb1357ef"],["assets/skyExtras-lE6KgJBW.js",51173,"bce2095b4957e45e"],["assets/snapshot-3y8-bPV3.js",4043,"331bc6d7ce605351"],["assets/sources-DpCF3bCE.js",167310,"572c964d1622d479"],["assets/stars-CLJbCriZ.js",30056,"a14ea7f445f05139"],["assets/version-BvxTzdcU.js",45,"89e2462bea4943e6"],["assets/words-Bf8npX2C.js",7614,"2e758fd502dc4ed0"],["assets/words-DCsZe_Lw.js",16014,"29443778a5e89f00"],["assets/words-coHFnK0P.js",2338,"56de4fcf9cbf0c64"],["audio/LICENSE.txt",1223,"b3b100cb1a08c319"],["brand/intro.webp",98496,"c425019b35f4145e"],["clock-rules-LICENSE.txt",1664,"fb3ba1a0258883e1"],["data/PROVENANCE.md",2027,"d7cf695d3aa9b0b3"],["data/derive-no-fuzzy.mjs",3275,"19bada4a7d7482bd"],["data/licenses/TIMEZONE-DATA-ODBL.txt",26030,"064dbcd9fdd0ffdf"],["data/licenses/TZF-MIT.txt",1067,"f15704ba42fd38aa"],["data/licenses/TZF-RS-MIT.txt",1067,"f15704ba42fd38aa"],["data/tz-lite-2026e-no-fuzzy.tzb.gz",2449531,"31193fc5fe2c6110"],["favicon-64.png",3838,"5498779bd573aa36"],["icon-180.png",21138,"3cc5b663eac4d452"],["icon-192.png",23789,"93638475980c0ac4"],["icon-512.png",137478,"b20f6ed8c48ad776"],["icon.svg",6159,"78c3ecc7e84e79e8"],["index.html",1142,"9701266be676e130"],["manifest.webmanifest",520,"7803a761fc7c68b9"],["media/jupiter-icon.png",27948,"b1372d2a3d84f9fd"],["media/jupiter.jpg",10514,"de51dbafef083d3b"],["media/mars-icon.png",27840,"b9edd8012d606652"],["media/mars.jpg",9749,"68fac7c577e98076"],["media/mercury-icon.png",17110,"3b41d4d8d8142bee"],["media/mercury.jpg",9087,"1be4ea8b070c00f2"],["media/saturn-icon.png",14085,"8135074c00e36c00"],["media/saturn.jpg",6250,"c5f66957d16b1772"],["media/spacecraft/LICENSE.txt",3208,"b495047bd93a9b06"],["media/spacecraft/hubble-20090519.png",446079,"bfcd79c44bcd0600"],["media/spacecraft/iss-20181004.jpg",122586,"a8add4a855c790df"],["media/venus-icon.png",22444,"0da4b2a33bf02a30"],["media/venus.jpg",6514,"6a4b163c0bb5fab1"],["tex/bluenoise.png",4228,"ee800e74196f51b2"],["tex/hd/jupiter.jpg",488445,"95f82bafae3d2b9c"],["tex/hd/mars.jpg",374775,"b18f280ceebc54f2"],["tex/hd/mercury.jpg",512088,"893f3b1682d6ad9a"],["tex/hd/moon.jpg",1486204,"490715f4c16f2f1d"],["tex/hd/moon_normal.jpg",521232,"176ace9341542c47"],["tex/hd/saturn.jpg",119609,"b6311f5f16c0454d"],["tex/hd/sun.jpg",362513,"b98f89125a586384"],["tex/hd/venus.jpg",135084,"7786eddf98b4dc38"],["tex/journey-earth.jpg",266599,"d4dc80a6ef571939"],["tex/jupiter.jpg",227274,"28c0cc658a8bee4f"],["tex/mars.jpg",100725,"f3b1c3a50331802e"],["tex/mercury.jpg",121218,"1f1d67411879ad61"],["tex/milkyway_c.webp",6128,"b845a920ef3fc437"],["tex/milkyway_l.webp",150138,"e330df45c873ba92"],["tex/moon.jpg",413535,"d38a7754e07260e6"],["tex/moon_normal.jpg",114101,"900801c2dbc7b976"],["tex/neptune.jpg",6843,"dfe9c23eeb535d56"],["tex/saturn.jpg",34006,"1766e7304be7c4f8"],["tex/saturn_ring.png",5661,"e1fde949b8cd03d5"],["tex/sun.jpg",120075,"82b5a4f1607a8ccc"],["tex/uranus.jpg",3194,"ffa97b684727fb66"],["tex/venus.jpg",38888,"d255d05e2fd1c66d"],["version.json",149,"901b4b4037174ee4"]],"lazy":[["audio/najm-night.m4a",2092085,"941cc5b4b96e6f05"]]};

const SCOPE = new URL(self.registration.scope);
const PREFIX = `najm:${SCOPE.pathname}:`;
const BUILD_PREFIX = `${PREFIX}build:`;
// the build ID plus a hash of the file list: two different builds never share a cache, even two "-dirty" ones
const BUILD_CACHE = `${BUILD_PREFIX}${NAJM ? `${NAJM.build}~${NAJM.key}` : "dev"}`;
const STATIC_CACHE = `${PREFIX}static`;
const REV_HEADER = "x-najm-rev";
const HASHED_DIR = /^assets\//;
const STATIC_DIR = /^(?:tex|art|media|brand|audio)\//;
const PARALLEL = 4;

/** Files in a folder other than assets/ go to the shared static cache; root files and assets/ are per build. */
function isStatic(path) { return path.includes("/") && !HASHED_DIR.test(path); }
const entryOf = (lazy) => ([path, size, rev]) => [path, { path, size, rev, isStatic: isStatic(path), lazy }];
const FILES = new Map([...(NAJM ? NAJM.files : []).map(entryOf(false)), ...(NAJM && NAJM.lazy ? NAJM.lazy : []).map(entryOf(true))]);

/** The request's path relative to this worker's scope, or null outside it (another origin, the other channel's scope). */
function relPath(url) {
  const u = new URL(url);
  if (u.origin !== SCOPE.origin || !u.pathname.startsWith(SCOPE.pathname)) return null;
  try { return decodeURIComponent(u.pathname.slice(SCOPE.pathname.length)); } catch { return null; }
}
function urlOf(path) { return new URL(path, SCOPE).href; }
/** Cache key of a file of the offline set: per-build caches by URL, the static cache by URL + revision. */
function keyOf(entry) { return entry.isStatic ? `${urlOf(entry.path)}?v=${entry.rev}` : urlOf(entry.path); }
const COMPLETE_KEY = urlOf("__najm-complete__");   // marker in a build cache: the whole shell is there

async function revOf(buf) {
  const h = new Uint8Array(await crypto.subtle.digest("SHA-256", buf));
  let s = "";
  for (let i = 0; i < 8; i++) s += h[i].toString(16).padStart(2, "0");
  return s;
}

/** A stored copy: the body and content type only, with the revision (never a "redirected" response). */
function stored(buf, contentType, rev) {
  const headers = { "content-type": contentType || "application/octet-stream" };
  if (rev) headers[REV_HEADER] = rev;
  return new Response(buf, { status: 200, statusText: "OK", headers });
}

async function buildCaches() {
  return (await caches.keys()).filter((n) => n.startsWith(BUILD_PREFIX));
}

/** The same file with the same revision in another build cache of this scope (an unchanged asset), or null. */
async function fromOtherBuild(url, rev) {
  for (const name of (await buildCaches()).reverse()) {
    if (name === BUILD_CACHE) continue;
    const hit = await caches.match(url, { cacheName: name });
    if (hit && (!rev || hit.headers.get(REV_HEADER) === rev)) return hit;
  }
  return null;
}

// ---- install: the whole offline set, checked ------------------------------------------------------------------------

async function ensure(entry, buildCache, staticCache) {
  const cache = entry.isStatic ? staticCache : buildCache;
  const key = keyOf(entry);
  const have = await cache.match(key);
  if (have && have.headers.get(REV_HEADER) === entry.rev) return;
  if (!entry.isStatic) {
    const other = await fromOtherBuild(key, entry.rev);
    if (other) { await cache.put(key, other); return; }
  }
  // "no-cache": revalidate with the server (GitHub Pages answers 304 from its ETag) — a file the page loaded a moment
  // ago costs nothing, and a stale HTTP-cache copy can never become part of the offline set
  const res = await fetch(urlOf(entry.path), { cache: "no-cache", credentials: "same-origin" });
  if (!res.ok) throw new Error(`offline set: ${entry.path} answered HTTP ${res.status}`);
  const buf = await res.arrayBuffer();
  const rev = await revOf(buf);
  if (buf.byteLength !== entry.size || rev !== entry.rev) {
    throw new Error(`offline set: ${entry.path} is not the file of build ${NAJM.build} (${buf.byteLength} bytes, rev ${rev})`);
  }
  await cache.put(key, stored(buf, res.headers.get("content-type"), entry.rev));
}

async function precache() {
  const [buildCache, staticCache] = await Promise.all([caches.open(BUILD_CACHE), caches.open(STATIC_CACHE)]);
  const queue = [...FILES.values()].filter((e) => !e.lazy);   // the music waits for its first use
  let next = 0, failed = false;
  // after the first failure the others stop too: the install fails anyway, and resumes from the cache next time
  const worker = async () => {
    while (!failed && next < queue.length) {
      try { await ensure(queue[next++], buildCache, staticCache); } catch (e) { failed = true; throw e; }
    }
  };
  await Promise.all(Array.from({ length: PARALLEL }, worker));
  await buildCache.put(COMPLETE_KEY, new Response(NAJM.build, { headers: { "content-type": "text/plain" } }));
}

self.addEventListener("install", (event) => {
  if (NAJM) event.waitUntil(precache());
});

// ---- activate: prune this scope's caches only -----------------------------------------------------------------------

async function activate() {
  const builds = (await buildCaches()).filter((n) => n !== BUILD_CACHE).reverse();   // newest first
  let keep = null;                                    // the previous complete build: a window may still be open on it
  for (const name of builds) if (await caches.match(COMPLETE_KEY, { cacheName: name })) { keep = name; break; }
  await Promise.all(builds.filter((n) => n !== keep).map((n) => caches.delete(n)));
  const staticCache = await caches.open(STATIC_CACHE);
  const wanted = new Set([...FILES.values()].filter((e) => e.isStatic).map(keyOf));
  await Promise.all((await staticCache.keys()).filter((req) => !wanted.has(req.url)).map((req) => staticCache.delete(req)));
  await self.clients.claim();
}

self.addEventListener("activate", (event) => {
  if (NAJM) event.waitUntil(activate());
});

// ---- fetch -----------------------------------------------------------------------------------------------------------

async function appShell(event) {
  const hit = await caches.match(urlOf("index.html"), { cacheName: BUILD_CACHE });
  return hit ?? fetch(event.request);
}

async function cacheFirst(event, path) {
  const entry = FILES.get(path);
  const isStaticFile = entry ? entry.isStatic : STATIC_DIR.test(path);
  const cacheName = isStaticFile ? STATIC_CACHE : BUILD_CACHE;
  const key = entry ? keyOf(entry) : urlOf(path);
  let hit = await caches.match(key, { cacheName });
  // a window still on the previous build asks for one of its own files (a lazy chunk); another revision of a static
  // file is better than nothing offline
  if (!hit) hit = isStaticFile ? await caches.match(urlOf(path), { cacheName, ignoreSearch: true }) : await fromOtherBuild(key, null);
  if (hit) return hit;
  const res = await fetch(event.request);
  if (res.ok && (res.type === "basic" || res.type === "default")) {   // same-origin bytes, never an opaque response
    const copy = res.clone();
    event.waitUntil((async () => {
      const buf = await copy.arrayBuffer();
      const rev = entry ? await revOf(buf) : null;
      // a file of the offline set is kept under its revision only if it is that revision
      if (entry && rev !== entry.rev) return;
      await (await caches.open(cacheName)).put(key, stored(buf, copy.headers.get("content-type"), rev));
    })().catch(() => {}));
  }
  return res;
}

async function networkFirst(event, path) {
  try {
    return await fetch(event.request, { cache: "no-store" });
  } catch (e) {
    const hit = await caches.match(urlOf(path), { cacheName: BUILD_CACHE });
    if (hit) return hit;
    throw e;
  }
}

self.addEventListener("fetch", (event) => {
  if (!NAJM) return;
  const req = event.request;
  if (req.method !== "GET" || req.headers.has("range")) return;
  const path = relPath(req.url);
  if (path === null) return;
  if (req.mode === "navigate") {
    if (path === "" || path === "index.html") event.respondWith(appShell(event));
    return;
  }
  if (path === "version.json") { event.respondWith(networkFirst(event, path)); return; }
  if (FILES.has(path) || HASHED_DIR.test(path) || STATIC_DIR.test(path)) event.respondWith(cacheFirst(event, path));
});

// ---- messages from the page (src/platform/serviceWorker.ts) ---------------------------------------------------------

async function status() {
  const n = { files: 0, cached: 0, bytes: 0, cachedBytes: 0 }, later = { files: 0, cached: 0, bytes: 0 };
  for (const entry of FILES.values()) {
    const hit = await caches.match(keyOf(entry), { cacheName: entry.isStatic ? STATIC_CACHE : BUILD_CACHE });
    const ok = !!hit && hit.headers.get(REV_HEADER) === entry.rev;
    if (entry.lazy) { later.files++; later.bytes += entry.size; if (ok) later.cached++; continue; }
    n.files++; n.bytes += entry.size;
    if (ok) { n.cached++; n.cachedBytes += entry.size; }
  }
  const sw = self.serviceWorker;
  // files/cached/bytes: the installed set; onFirstUse: the music (kept once played)
  return {
    build: NAJM ? NAJM.build : "dev", channel: NAJM ? NAJM.channel : "dev", ...n, onFirstUse: later,
    budget: NAJM ? NAJM.budget : 0, state: sw ? sw.state : "unknown",
  };
}

self.addEventListener("message", (event) => {
  const type = event.data && event.data.type;
  if (type === "najm:skip-waiting") self.skipWaiting();   // only after an explicit tap ("use the new build now")
  else if (type === "najm:status" && event.ports[0]) event.waitUntil(status().then((s) => event.ports[0].postMessage(s)));
});
