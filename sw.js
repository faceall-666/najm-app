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
const NAJM = {"build":"2026.10.11-188b916","channel":"main","key":"5544639a","budget":33554432,"files":[["art/LICENSE.txt",916,"3e3f9ea5039c946a"],["art/andromeda.webp",41686,"e8eef731237fd599"],["art/antlia.webp",49092,"ff1bf0f4466c039d"],["art/apus.webp",44134,"833b5833485bf77d"],["art/aquarius.webp",55900,"8edc0ca10c4d0ca0"],["art/aquila.webp",62454,"4b11f1f1aa6cd763"],["art/ara.webp",45712,"b5e15a9bf35c87da"],["art/argonavis.webp",69182,"ea3dee6119e375f8"],["art/aries.webp",67768,"6f682408b1b1959d"],["art/atlas.webp",606946,"bcd8279f13a13597"],["art/auriga.webp",68972,"496645c8a7ef1946"],["art/bootes.webp",48748,"2989f4b17e2e545b"],["art/caelum.webp",28554,"130efce82aca4c18"],["art/camelopardalis.webp",38450,"3b1749a77cbecb74"],["art/cancer.webp",55978,"726074e2967e9981"],["art/canes-venatici.webp",55494,"d4f2270b2afa022e"],["art/canis-major.webp",52234,"275159c84428e232"],["art/canis-minor.webp",58284,"9232840a3fb203b8"],["art/capricornus.webp",67696,"0c4cdb4f40ce3105"],["art/cassiopeia.webp",57268,"2302b5dc07d35acc"],["art/centaurus.webp",46304,"adbfefd14d245f89"],["art/cepheus.webp",56718,"c52948eb195d5e59"],["art/cetus.webp",64754,"c7caffde35fc97f8"],["art/chamaeleon.webp",48224,"5022dafbe80d3f52"],["art/circinus.webp",21336,"71f963f609059d7e"],["art/columba.webp",59326,"d28048a6ff6a0b32"],["art/coma-berenices.webp",46470,"fd0cab9e71ad0ff4"],["art/corona-australis.webp",52858,"585cd8002a7ebcb7"],["art/corona-borealis.webp",71924,"f211ca9f442217fc"],["art/corvus.webp",64722,"91970da3e68f2518"],["art/crater.webp",71990,"6393d34ebd47a5a0"],["art/crux.webp",64020,"91493d912d4424c6"],["art/cygnus.webp",39426,"fd665e91cd5d6243"],["art/delphinus.webp",49048,"de46d045ada37029"],["art/dorado.webp",44042,"44ea4a6578aedc16"],["art/draco.webp",65116,"063fda56fe5cb0a5"],["art/equuleus.webp",67738,"29b1db2544da7268"],["art/eridanus.webp",31220,"ecd533fcc52789c7"],["art/fornax.webp",57986,"70fee63ff440a156"],["art/gemini.webp",71170,"a6ccea575c646bcf"],["art/grus.webp",49966,"c0337e3f58501332"],["art/hatch/andromeda.webp",108154,"46f0470aca2ef437"],["art/hatch/antlia.webp",97012,"df11b6456648c14e"],["art/hatch/apus.webp",89208,"18e0374e8f644b93"],["art/hatch/aquarius.webp",109270,"315e419991711ca8"],["art/hatch/aquila.webp",111474,"9e961dece167495d"],["art/hatch/ara.webp",81316,"c3c86d96ade810ee"],["art/hatch/argonavis.webp",135192,"1c5a57cf061b3c59"],["art/hatch/aries.webp",135116,"602af162638e44bf"],["art/hatch/auriga.webp",134548,"29bc4f3f66c38316"],["art/hatch/bootes.webp",92290,"202707b617af0682"],["art/hatch/caelum.webp",59670,"6e12693c2d8fe642"],["art/hatch/camelopardalis.webp",75940,"3807943d6aa9caba"],["art/hatch/cancer.webp",118428,"235f77aca3be013d"],["art/hatch/canes-venatici.webp",105184,"247d1c2fa3acc1bb"],["art/hatch/canis-major.webp",109476,"2a0faeef5d048db6"],["art/hatch/canis-minor.webp",127478,"924407425c29a6c7"],["art/hatch/capricornus.webp",141538,"b67add378d27120a"],["art/hatch/cassiopeia.webp",114236,"9b6d86353bb41544"],["art/hatch/centaurus.webp",90496,"89ed012a7edfca90"],["art/hatch/cepheus.webp",109790,"29ac5e950d1143ea"],["art/hatch/cetus.webp",126502,"f75db3f5a614dd2c"],["art/hatch/chamaeleon.webp",85736,"b118738cec60c2fe"],["art/hatch/circinus.webp",38812,"8bb823221fe7a737"],["art/hatch/columba.webp",118724,"26afdbb3ee635972"],["art/hatch/coma-berenices.webp",92838,"eddb80dbfbe109d1"],["art/hatch/corona-australis.webp",96008,"0d54b00fd26757b4"],["art/hatch/corona-borealis.webp",149652,"e5425a37b4287e08"],["art/hatch/corvus.webp",117004,"e0fed672e0274b07"],["art/hatch/crater.webp",171266,"76a883ed34d7a80c"],["art/hatch/crux.webp",128134,"78d4cf18c42b3829"],["art/hatch/cygnus.webp",76052,"a47d61db2101602e"],["art/hatch/delphinus.webp",110388,"bb26d8dd34d1fe5f"],["art/hatch/dorado.webp",86226,"23af362e64843683"],["art/hatch/draco.webp",127626,"5b0fb04cf089e598"],["art/hatch/equuleus.webp",147192,"a7b45571ac6323b6"],["art/hatch/eridanus.webp",54400,"ef07be492201ba83"],["art/hatch/fornax.webp",116050,"0245265fe7faedb2"],["art/hatch/gemini.webp",139406,"32e8c61563e4c63a"],["art/hatch/grus.webp",93418,"250577512022d6f5"],["art/hatch/hercules.webp",127208,"6fc7de0602d7980a"],["art/hatch/horlogium.webp",74902,"81f2c99d447f499a"],["art/hatch/hydra.webp",45836,"e3f0eb001e30ce84"],["art/hatch/hydrus.webp",52784,"5c3e9ef1388e6251"],["art/hatch/indus.webp",95388,"810c257eaeb11b3e"],["art/hatch/lacerta.webp",86576,"55dadce7c9d4421f"],["art/hatch/leo-minor.webp",138088,"145221b6c300f9db"],["art/hatch/leo.webp",91722,"a20d53fafd3d765d"],["art/hatch/lepus.webp",181722,"9c3c89ffbfe5983c"],["art/hatch/libra.webp",70640,"d460861211411b38"],["art/hatch/lupus.webp",123758,"39d0ca1d088d762a"],["art/hatch/lynx.webp",108966,"88f44a9af50a169a"],["art/hatch/lyra.webp",94924,"da6ccfdacb4e7e3d"],["art/hatch/mensa.webp",122742,"8d7bfe659d6c99f2"],["art/hatch/microscopium.webp",68774,"72b3d9ea67ee0779"],["art/hatch/monoceros.webp",93858,"3fdde46b687d819b"],["art/hatch/musca.webp",132144,"2490adced530a30e"],["art/hatch/norma.webp",61290,"538fe0825ee4736f"],["art/hatch/octans.webp",115386,"6d8b558508cd4312"],["art/hatch/ophiuchus.webp",101322,"60482f7d46c6e3ce"],["art/hatch/orion.webp",112124,"bb9f37de7cdb1d9b"],["art/hatch/pavo.webp",166700,"eaea8b330e098156"],["art/hatch/pegasus.webp",94302,"ab8090d3cdbd05c5"],["art/hatch/perseus.webp",132896,"2f670dfebcc3909e"],["art/hatch/phoenix.webp",142640,"183547ea3d7432c5"],["art/hatch/pictor.webp",98086,"3ad524013a6cf223"],["art/hatch/pisces.webp",55480,"7a040660d2ffe4cf"],["art/hatch/piscis-austrinus.webp",113674,"6cbed9fb52425553"],["art/hatch/pyxis.webp",187916,"8a0e0d2dcd8208a4"],["art/hatch/reticulum.webp",115360,"94e7cc1a6dabee27"],["art/hatch/sagitta.webp",24432,"8cda6e8465c98dc8"],["art/hatch/sagittarius.webp",108388,"2ef5389cc649b351"],["art/hatch/scorpius.webp",97728,"94eb6b4e1cfe7b3b"],["art/hatch/sculptor.webp",98128,"7e4cabc3b1a5c27d"],["art/hatch/scutum.webp",201542,"77817a6907ba282b"],["art/hatch/sextans.webp",119324,"533c0f5df720536c"],["art/hatch/taurus.webp",108918,"a03190634e707c40"],["art/hatch/telescopium.webp",85522,"01a071a32adf3ab1"],["art/hatch/triangulum-australe.webp",117488,"d3c82d30823ef069"],["art/hatch/triangulum.webp",62470,"f73a95876763c039"],["art/hatch/tucana.webp",51326,"c2737ce8c1baa9e9"],["art/hatch/ursa-major.webp",129330,"11d2270622b93de3"],["art/hatch/ursa-minor.webp",100600,"0dea2d821529eedf"],["art/hatch/virgo.webp",89160,"9f88efca1dcacf68"],["art/hatch/volans.webp",41770,"40f5cd09a0e4eade"],["art/hatch/vulpecula.webp",129162,"7c464097cb5d41cd"],["art/hercules.webp",63864,"708bc3c1d6da94c8"],["art/horlogium.webp",40614,"780b437a50d159d6"],["art/hydra.webp",24114,"e6efb0032935bc68"],["art/hydrus.webp",28286,"485b537c4d362f78"],["art/indus.webp",54414,"86807e93176d0926"],["art/lacerta.webp",44322,"8a499e411353904b"],["art/leo-minor.webp",58696,"1a354439f0acd5b5"],["art/leo.webp",46036,"1d364ff7c892aebc"],["art/lepus.webp",77574,"617b82530a0a537c"],["art/libra.webp",38122,"28aa927e8f3f2539"],["art/lupus.webp",56758,"00e382888c304c39"],["art/lynx.webp",56992,"a63fa9bb011f01c0"],["art/lyra.webp",43852,"11bf3d1ac20fc683"],["art/mensa.webp",67514,"874fcbf82c6b42a6"],["art/microscopium.webp",35004,"2b9b164e921125ee"],["art/monoceros.webp",47740,"bc96f8451988022f"],["art/musca.webp",66372,"59e37a55b695a5b7"],["art/norma.webp",36588,"5c62bcb329c68a96"],["art/octans.webp",55244,"230b482b017244e5"],["art/ophiuchus.webp",51548,"e863e1ead4b66dda"],["art/orion.webp",56470,"bcfc3b3265db0b25"],["art/pavo.webp",87242,"62982187da56ab9b"],["art/pegasus.webp",47732,"1ca9442ff4489394"],["art/perseus.webp",67158,"06200c701bc744da"],["art/phoenix.webp",72156,"e04b426257d6d57b"],["art/pictor.webp",45850,"c24da153ebbe4e42"],["art/pisces.webp",28436,"63e0728358322d37"],["art/piscis-austrinus.webp",53882,"23c30cc14a54dd00"],["art/pyxis.webp",83078,"d2819a4525ed83f4"],["art/reticulum.webp",53098,"240ce217a08b872a"],["art/sagitta.webp",13238,"4307cedbd32b0e85"],["art/sagittarius.webp",55666,"0e4db0d37d58e362"],["art/scorpius.webp",51358,"3fe3f35f88144067"],["art/sculptor.webp",49834,"34869865b8f7851d"],["art/scutum.webp",100918,"b5f41e93c13ed529"],["art/sextans.webp",67612,"3dd28f2f11d21470"],["art/sheets/andromeda.webp",49430,"f50ccfa90a565d32"],["art/sheets/antlia.webp",50254,"79e6efb7e580203c"],["art/sheets/apus.webp",59102,"ed7bac5ad31bee9a"],["art/sheets/aquarius.webp",55454,"0c4d0aae8da0b57f"],["art/sheets/aquila.webp",66028,"07aa3060d65b4df5"],["art/sheets/ara.webp",68288,"7680a1ae0a72d391"],["art/sheets/argonavis.webp",73214,"082e899a7afd0893"],["art/sheets/aries.webp",66924,"2f7359e8a93b3ef6"],["art/sheets/auriga.webp",72808,"0b39bcefade1c3d1"],["art/sheets/bootes.webp",58270,"cfe9c108f0605736"],["art/sheets/caelum.webp",38484,"02f1beef08a663e0"],["art/sheets/camelopardalis.webp",36402,"8b4a03e37d957007"],["art/sheets/cancer.webp",61084,"b8d978a5a31cea7d"],["art/sheets/canes-venatici.webp",52666,"46c1974acf0a31fd"],["art/sheets/canis-major.webp",41008,"e9990f51d1022986"],["art/sheets/canis-minor.webp",49164,"dd591f7a0f4ad1a5"],["art/sheets/capricornus.webp",58048,"28872c20d6eab29a"],["art/sheets/cassiopeia.webp",64690,"499dfea9ff33258a"],["art/sheets/centaurus.webp",45994,"5babfa334ea070c1"],["art/sheets/cepheus.webp",58858,"66369d4f7474267c"],["art/sheets/cetus.webp",61102,"6feebdeed29feea6"],["art/sheets/chamaeleon.webp",44878,"e315f96d3313f07c"],["art/sheets/circinus.webp",39040,"15e393d8ef5b60f8"],["art/sheets/columba.webp",59118,"88bc15b6b3854ffc"],["art/sheets/coma-berenices.webp",71602,"8aaeca2b3b02aca7"],["art/sheets/corona-australis.webp",75204,"c386b7302f35352e"],["art/sheets/corona-borealis.webp",64278,"975a637ceda15982"],["art/sheets/corvus.webp",67956,"76d1c57708f974e2"],["art/sheets/crater.webp",56918,"fb3e9893f3a63b37"],["art/sheets/crux.webp",74548,"b0cf142d67b8c8f4"],["art/sheets/cygnus.webp",41850,"f0b746f3ecb7a608"],["art/sheets/delphinus.webp",43232,"2b00aff220266eda"],["art/sheets/dorado.webp",38696,"52d6cf6258e01cc3"],["art/sheets/draco.webp",57498,"ce7c046eb00b7941"],["art/sheets/equuleus.webp",51108,"f37f6d2e4457acfe"],["art/sheets/eridanus.webp",39134,"6bf5b6ed9b39696f"],["art/sheets/fornax.webp",45880,"474d056fa673c677"],["art/sheets/gemini.webp",73824,"e97023e56c8b0e70"],["art/sheets/grus.webp",58610,"8611df2c9de51190"],["art/sheets/hercules.webp",58524,"daceef8591bd4604"],["art/sheets/horlogium.webp",59138,"838b235378980e6a"],["art/sheets/hydra.webp",34810,"4ba3821ec0e4d793"],["art/sheets/hydrus.webp",46472,"4fd237a2f1118da8"],["art/sheets/indus.webp",65834,"c4f71ad4ac104701"],["art/sheets/lacerta.webp",55812,"1d84707d95062a8f"],["art/sheets/leo-minor.webp",38908,"7a692a33285ad49d"],["art/sheets/leo.webp",52896,"04cb013400aad38e"],["art/sheets/lepus.webp",63462,"3a8becad46b4a159"],["art/sheets/libra.webp",57320,"1d04fdb8acce9cd4"],["art/sheets/lupus.webp",39916,"92a492cf58d84bb6"],["art/sheets/lynx.webp",32430,"e3fe6617f02e50f4"],["art/sheets/lyra.webp",40348,"128c7a56aaef26b1"],["art/sheets/mensa.webp",64718,"a84c95d9ca899c6e"],["art/sheets/microscopium.webp",43746,"a30a768d296f117d"],["art/sheets/monoceros.webp",39912,"807072a7685f7a19"],["art/sheets/musca.webp",83556,"42504cf76c73ca6d"],["art/sheets/norma.webp",42452,"f90974f8ee388598"],["art/sheets/octans.webp",56476,"6596d6c59e568b84"],["art/sheets/ophiuchus.webp",53874,"be2a27c16d4d0aea"],["art/sheets/orion.webp",58610,"baf69b33650f0084"],["art/sheets/pavo.webp",72940,"9005adc3aa756203"],["art/sheets/pegasus.webp",46906,"45352ff43a732d21"],["art/sheets/perseus.webp",76128,"7bd0890be95fbcc9"],["art/sheets/phoenix.webp",88602,"7ce954ef53c57119"],["art/sheets/pictor.webp",44992,"b9b37fc2d260de0b"],["art/sheets/pisces.webp",35966,"56c3589a9d05958d"],["art/sheets/piscis-austrinus.webp",49072,"a0ebd9cff5363a53"],["art/sheets/pyxis.webp",62106,"644ed9aa04ee6e42"],["art/sheets/reticulum.webp",72616,"c28069688e9f3b12"],["art/sheets/sagitta.webp",25086,"d57fcd4367138b54"],["art/sheets/sagittarius.webp",56950,"ac9cd07c1fe0c87d"],["art/sheets/scorpius.webp",59056,"2b01dd99728a3c06"],["art/sheets/sculptor.webp",58082,"e8989ab728d592f1"],["art/sheets/scutum.webp",92600,"33823c8fd05eb322"],["art/sheets/sextans.webp",80062,"ed54ff042a76eed6"],["art/sheets/taurus.webp",43458,"49809e95437bc94c"],["art/sheets/telescopium.webp",46210,"dedcdb26267b7cab"],["art/sheets/triangulum-australe.webp",36758,"ba2242e8d6f812ff"],["art/sheets/triangulum.webp",31744,"ddf5f13788a1df1e"],["art/sheets/tucana.webp",31318,"49c9a1981d86dedd"],["art/sheets/ursa-major.webp",40162,"a2b48fef810888d6"],["art/sheets/ursa-minor.webp",35832,"abfe0cf23ab45f58"],["art/sheets/virgo.webp",60558,"2a9efb0d45fde09b"],["art/sheets/volans.webp",34482,"a5a2b55f23d86d6f"],["art/sheets/vulpecula.webp",42098,"04555b053b01cadf"],["art/taurus.webp",56466,"8df29dc6a7d2e2a3"],["art/telescopium.webp",42062,"31b0f5afe38d9575"],["art/triangulum-australe.webp",50574,"d5505371eb575c86"],["art/triangulum.webp",32280,"44cf619ff856a40d"],["art/tucana.webp",27618,"26503a49bf24ff62"],["art/ursa-major.webp",58180,"86a3096578f67b52"],["art/ursa-minor.webp",50536,"501cfe7f5cd170fe"],["art/virgo.webp",48024,"f2f39af8c7d99c40"],["art/volans.webp",16200,"632a1b1766e9970d"],["art/vulpecula.webp",59966,"fa43544daccbb315"],["assets/Calibrate-DQijmgXP.js",7423,"88c974dc683088cd"],["assets/CityPicker-AoLWf0V9.js",4399,"f18c3d6414a57d7f"],["assets/Detail-q7IsKoLw.js",26449,"60b5d4622f12c780"],["assets/Diagnostics-ChFcOect.js",12354,"dc6a73077a54dca0"],["assets/DisplayPanel-DFUtsD7q.js",9241,"9e2f83a6db139987"],["assets/Explore-BhZL6h_w.js",21465,"1600f593c2668644"],["assets/Sheets-BYvzRh17.js",3955,"12c5f270bc860fa6"],["assets/align-DgG2bnWU.css",3334,"c6aa6d1b7bc31860"],["assets/cities-DkWLQuXU.js",70939,"c691ae280dc03082"],["assets/explore-CBrzhp3-.js",21991,"0ded734d47b3354d"],["assets/explore-CkjM0hLF.css",5068,"c2b829507af20a73"],["assets/ibm-plex-sans-arabic-arabic-400-normal-BM00HIL5.woff2",42880,"bddd926d02ede39b"],["assets/ibm-plex-sans-arabic-arabic-500-normal-CVSLUoBh.woff2",45488,"e6a6ef2b0ea29fdd"],["assets/ibm-plex-sans-arabic-arabic-700-normal-CW2fYlQC.woff2",44092,"172453d45ea51a5e"],["assets/ibm-plex-sans-arabic-latin-400-normal-B5r_Re2g.woff2",19200,"769a7f798f34c5b4"],["assets/ibm-plex-sans-arabic-latin-500-normal-Bg_w3V9S.woff2",20116,"812d46ed38b32ef2"],["assets/ibm-plex-sans-arabic-latin-700-normal-B1l2chsb.woff2",19544,"d0c903368f403e09"],["assets/iconsMore-DoKerHH-.js",38766,"7a411aca582efa56"],["assets/index-Bdg_G47Y.js",1495581,"45352eeefa28934c"],["assets/index-Djygx8-T.css",34177,"1d5f06145d0af5b3"],["assets/index-cCQpSYcG.js",16601,"bd85d5437b8a07e3"],["assets/noto-kufi-arabic-arabic-600-normal-DpQOABqh.woff2",47416,"2273ed03fcd74389"],["assets/noto-kufi-arabic-arabic-700-normal-CGKuvZQr.woff2",43872,"c964525ff0ef5e10"],["assets/noto-kufi-arabic-latin-600-normal-BU20Dfqv.woff2",10468,"c347879a7bf417d4"],["assets/noto-kufi-arabic-latin-700-normal-CeymQha4.woff2",10384,"d096450fc5f521ae"],["assets/skyExtras-Dkb_ogmb.js",64761,"084f0683f52d71bf"],["assets/snapshot-Bj4Tt0FQ.js",4125,"d1f35b8f6665744e"],["assets/version-yd5nKr-o.js",45,"65ccd167e351de0c"],["audio/LICENSE.txt",1223,"b3b100cb1a08c319"],["brand/intro.webp",98496,"c425019b35f4145e"],["favicon-64.png",3838,"5498779bd573aa36"],["icon-180.png",21138,"3cc5b663eac4d452"],["icon-192.png",23789,"93638475980c0ac4"],["icon-512.png",137478,"b20f6ed8c48ad776"],["icon.svg",6159,"78c3ecc7e84e79e8"],["index.html",1142,"c0eb3af86f538dde"],["manifest.webmanifest",520,"7803a761fc7c68b9"],["media/jupiter-icon.png",27948,"b1372d2a3d84f9fd"],["media/jupiter.jpg",10514,"de51dbafef083d3b"],["media/mars-icon.png",27840,"b9edd8012d606652"],["media/mars.jpg",9749,"68fac7c577e98076"],["media/mercury-icon.png",17110,"3b41d4d8d8142bee"],["media/mercury.jpg",9087,"1be4ea8b070c00f2"],["media/saturn-icon.png",14085,"8135074c00e36c00"],["media/saturn.jpg",6250,"c5f66957d16b1772"],["media/venus-icon.png",22444,"0da4b2a33bf02a30"],["media/venus.jpg",6514,"6a4b163c0bb5fab1"],["tex/hd/jupiter.jpg",488445,"95f82bafae3d2b9c"],["tex/hd/mars.jpg",374775,"b18f280ceebc54f2"],["tex/hd/mercury.jpg",512088,"893f3b1682d6ad9a"],["tex/hd/moon.jpg",1486204,"490715f4c16f2f1d"],["tex/hd/moon_normal.jpg",521232,"176ace9341542c47"],["tex/hd/saturn.jpg",119609,"b6311f5f16c0454d"],["tex/hd/sun.jpg",362513,"b98f89125a586384"],["tex/hd/venus.jpg",135084,"7786eddf98b4dc38"],["tex/jupiter.jpg",227274,"28c0cc658a8bee4f"],["tex/mars.jpg",100725,"f3b1c3a50331802e"],["tex/mercury.jpg",121218,"1f1d67411879ad61"],["tex/milkyway_c.webp",6128,"b845a920ef3fc437"],["tex/milkyway_l.webp",150138,"e330df45c873ba92"],["tex/moon.jpg",413535,"d38a7754e07260e6"],["tex/moon_normal.jpg",114101,"900801c2dbc7b976"],["tex/neptune.jpg",6843,"dfe9c23eeb535d56"],["tex/saturn.jpg",34006,"1766e7304be7c4f8"],["tex/saturn_ring.png",5661,"e1fde949b8cd03d5"],["tex/sun.jpg",120075,"82b5a4f1607a8ccc"],["tex/uranus.jpg",3194,"ffa97b684727fb66"],["tex/venus.jpg",38888,"d255d05e2fd1c66d"],["version.json",149,"1d8977b96dac7d4e"]],"lazy":[["audio/najm-night.m4a",2092085,"941cc5b4b96e6f05"]]};

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
