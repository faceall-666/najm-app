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
const NAJM = {"build":"2026.10.18-f4ed343","channel":"main","key":"2eceef7b","budget":34603008,"files":[["art/LICENSE.txt",1624,"334e51d688b6e221"],["art/andromeda.webp",41686,"e8eef731237fd599"],["art/antlia.webp",49092,"ff1bf0f4466c039d"],["art/apus.webp",44134,"833b5833485bf77d"],["art/aquarius.webp",55900,"8edc0ca10c4d0ca0"],["art/aquila.webp",62454,"4b11f1f1aa6cd763"],["art/ara.webp",45712,"b5e15a9bf35c87da"],["art/argonavis.webp",69182,"ea3dee6119e375f8"],["art/aries.webp",67768,"6f682408b1b1959d"],["art/atlas.webp",606946,"bcd8279f13a13597"],["art/auriga.webp",68972,"496645c8a7ef1946"],["art/bootes.webp",48748,"2989f4b17e2e545b"],["art/caelum.webp",28554,"130efce82aca4c18"],["art/camelopardalis.webp",38450,"3b1749a77cbecb74"],["art/cancer.webp",55978,"726074e2967e9981"],["art/canes-venatici.webp",55494,"d4f2270b2afa022e"],["art/canis-major.webp",52234,"275159c84428e232"],["art/canis-minor.webp",58284,"9232840a3fb203b8"],["art/capricornus.webp",67696,"0c4cdb4f40ce3105"],["art/cassiopeia.webp",57268,"2302b5dc07d35acc"],["art/centaurus.webp",46304,"adbfefd14d245f89"],["art/cepheus.webp",56718,"c52948eb195d5e59"],["art/cetus.webp",64754,"c7caffde35fc97f8"],["art/chamaeleon.webp",48224,"5022dafbe80d3f52"],["art/circinus.webp",21336,"71f963f609059d7e"],["art/columba.webp",59326,"d28048a6ff6a0b32"],["art/coma-berenices.webp",46470,"fd0cab9e71ad0ff4"],["art/corona-australis.webp",52858,"585cd8002a7ebcb7"],["art/corona-borealis.webp",71924,"f211ca9f442217fc"],["art/corvus.webp",64722,"91970da3e68f2518"],["art/crater.webp",71990,"6393d34ebd47a5a0"],["art/crux.webp",64020,"91493d912d4424c6"],["art/cygnus.webp",39426,"fd665e91cd5d6243"],["art/delphinus.webp",49048,"de46d045ada37029"],["art/dorado.webp",44042,"44ea4a6578aedc16"],["art/draco.webp",65116,"063fda56fe5cb0a5"],["art/equuleus.webp",67738,"29b1db2544da7268"],["art/eridanus.webp",31220,"ecd533fcc52789c7"],["art/fornax.webp",57986,"70fee63ff440a156"],["art/gemini.webp",71170,"a6ccea575c646bcf"],["art/grus.webp",49966,"c0337e3f58501332"],["art/hercules.webp",63864,"708bc3c1d6da94c8"],["art/horlogium.webp",40614,"780b437a50d159d6"],["art/hydra.webp",24114,"e6efb0032935bc68"],["art/hydrus.webp",28286,"485b537c4d362f78"],["art/indus.webp",54414,"86807e93176d0926"],["art/lacerta.webp",44322,"8a499e411353904b"],["art/leo-minor.webp",58696,"1a354439f0acd5b5"],["art/leo.webp",46036,"1d364ff7c892aebc"],["art/lepus.webp",77574,"617b82530a0a537c"],["art/libra.webp",38122,"28aa927e8f3f2539"],["art/lupus.webp",56758,"00e382888c304c39"],["art/lynx.webp",56992,"a63fa9bb011f01c0"],["art/lyra.webp",43852,"11bf3d1ac20fc683"],["art/mensa.webp",67514,"874fcbf82c6b42a6"],["art/microscopium.webp",35004,"2b9b164e921125ee"],["art/monoceros.webp",47740,"bc96f8451988022f"],["art/musca.webp",66372,"59e37a55b695a5b7"],["art/norma.webp",36588,"5c62bcb329c68a96"],["art/octans.webp",55244,"230b482b017244e5"],["art/ophiuchus.webp",51548,"e863e1ead4b66dda"],["art/orion.webp",56470,"bcfc3b3265db0b25"],["art/pavo.webp",87242,"62982187da56ab9b"],["art/pegasus.webp",47732,"1ca9442ff4489394"],["art/perseus.webp",67158,"06200c701bc744da"],["art/phoenix.webp",72156,"e04b426257d6d57b"],["art/pictor.webp",45850,"c24da153ebbe4e42"],["art/pisces.webp",28436,"63e0728358322d37"],["art/piscis-austrinus.webp",53882,"23c30cc14a54dd00"],["art/pyxis.webp",83078,"d2819a4525ed83f4"],["art/reticulum.webp",53098,"240ce217a08b872a"],["art/sagitta.webp",13238,"4307cedbd32b0e85"],["art/sagittarius.webp",55666,"0e4db0d37d58e362"],["art/scorpius.webp",51358,"3fe3f35f88144067"],["art/sculptor.webp",49834,"34869865b8f7851d"],["art/scutum.webp",100918,"b5f41e93c13ed529"],["art/sextans.webp",67612,"3dd28f2f11d21470"],["art/shaded/antlia.png",9334,"54d70b95614ef0f3"],["art/shaded/apus.png",10839,"521a9258b2e067b7"],["art/shaded/aquarius.png",43176,"775c2a9b2758e6b2"],["art/shaded/aquila.png",35935,"c627aca0719e0e77"],["art/shaded/ara.png",13745,"47abcf063c4e35e4"],["art/shaded/argonavis.png",52573,"6445e77a9e878e1f"],["art/shaded/aries.png",30182,"70158bca8ab737c5"],["art/shaded/auriga.png",57787,"059dfbbce1388bab"],["art/shaded/bootes.png",36561,"dc958bf2f6e47793"],["art/shaded/caelum.png",7211,"e5a7dc7a01770e98"],["art/shaded/camelopardalis.png",8194,"18490202bf130ba4"],["art/shaded/cancer.png",12396,"4d8b1123815f81fa"],["art/shaded/canes-venatici.png",11587,"4cefc086d9500502"],["art/shaded/canis-major.png",27199,"802bd40c4e93c540"],["art/shaded/canis-minor.png",24562,"198114abce3010a7"],["art/shaded/capricornus.png",41969,"7135358cd50bbc27"],["art/shaded/cassiopeia.png",44222,"e0cf5e4d328b0105"],["art/shaded/centaurus.png",33573,"76c4e6b98f224ad7"],["art/shaded/cepheus.png",40144,"3efd152711397e34"],["art/shaded/cetus.png",41780,"794eef84ea066378"],["art/shaded/chamaeleon.png",10777,"07d3f1dc0b38a295"],["art/shaded/circinus.png",7254,"40aa1396ce2cbc2b"],["art/shaded/columba.png",27363,"6cc00cc6477dc198"],["art/shaded/coma-berenices.png",29048,"0a9c1b6e7b3e2041"],["art/shaded/corona-australis.png",30110,"2c91843c5326cf5a"],["art/shaded/corona-borealis.png",16900,"090649da2d64f53e"],["art/shaded/corvus.png",13062,"c0e7f48acaa272c4"],["art/shaded/crater.png",14822,"78521af72845d29e"],["art/shaded/crux.png",11048,"228b444d397b904c"],["art/shaded/cygnus.png",29252,"d9ad9d2ffea6fb50"],["art/shaded/delphinus.png",19622,"109625afb21447ae"],["art/shaded/dorado.png",10536,"465d2e1d9b171aa2"],["art/shaded/draco.png",43164,"624e24404ad31398"],["art/shaded/equuleus.png",13578,"0a44f2bb4e0b0bb2"],["art/shaded/eridanus.png",22399,"21d5ecce9bd6b998"],["art/shaded/fornax.png",26003,"8911514ed7bb414e"],["art/shaded/gemini.png",18325,"fb481f6bb73c44a7"],["art/shaded/grus.png",11640,"f2c137013291ddc8"],["art/shaded/hercules.png",43187,"b67337cc651db0bc"],["art/shaded/horlogium.png",25588,"be97b257a0af2995"],["art/shaded/hydra.png",35348,"10b18b023fe61877"],["art/shaded/hydrus.png",7321,"168c2062f5f2d824"],["art/shaded/lacerta.png",23311,"90b6b685d82a494f"],["art/shaded/leo-minor.png",11860,"c78cf7d582b7e54a"],["art/shaded/leo.png",32902,"1e12035d808d63f4"],["art/shaded/lepus.png",14328,"4b8f15f5485c0114"],["art/shaded/libra.png",10659,"b62452cb1273f425"],["art/shaded/lupus.png",26820,"849acf9d6fe5c614"],["art/shaded/lynx.png",25636,"1be70d1645d9d936"],["art/shaded/lyra.png",11604,"53604076248c70ef"],["art/shaded/mensa.png",32720,"3ee8230728c0ce50"],["art/shaded/microscopium.png",22241,"29b51be3623aaf12"],["art/shaded/monoceros.png",31882,"b17d0febbba11ee0"],["art/shaded/musca.png",33231,"88ac34def2953582"],["art/shaded/norma.png",7537,"c3fbac8305a0d3f8"],["art/shaded/octans.png",28312,"a3bb68ac580dc35b"],["art/shaded/ophiuchus.png",35799,"09967fbed6f14e76"],["art/shaded/orion.png",41095,"3edea0a3275ce25e"],["art/shaded/pavo.png",24119,"b6dfec3495d64692"],["art/shaded/pegasus.png",33947,"ad4a6926b939cd11"],["art/shaded/perseus.png",51300,"fe9278ddf3dd52f1"],["art/shaded/phoenix.png",17236,"a2b7e18c1f854f33"],["art/shaded/pictor.png",11097,"355e4e3e3f2c0e65"],["art/shaded/pisces.png",52817,"82a011c9d022af1d"],["art/shaded/piscis-austrinus.png",12235,"32697eddefcdada4"],["art/shaded/pyxis.png",18557,"c73023861e4c310f"],["art/shaded/reticulum.png",9635,"1f5c49e4ecb09046"],["art/shaded/sagitta.png",4501,"5dd90e4c916e947f"],["art/shaded/sagittarius.png",33662,"0ee208629e5edf87"],["art/shaded/scorpius.png",38820,"e681573f0d51cc93"],["art/shaded/sculptor.png",13799,"4ed0ffcb6e88868b"],["art/shaded/scutum.png",22049,"252312723d04a799"],["art/shaded/sextans.png",12176,"095c0747d7988485"],["art/shaded/taurus.png",30557,"019f267b9fee7fe3"],["art/shaded/telescopium.png",3637,"0a5410aebe16156f"],["art/shaded/triangulum-australe.png",3201,"c283ccbe27b730d6"],["art/shaded/triangulum.png",4278,"ae9ccd84362146b5"],["art/shaded/tucana.png",6617,"a5beec5ec85b19a5"],["art/shaded/ursa-major.png",28437,"da2a2a5c5024bd85"],["art/shaded/ursa-minor.png",9042,"e95cd699568b7b88"],["art/shaded/virgo.png",42158,"7f59ab17b11794e7"],["art/shaded/volans.png",5273,"86971bc380c10c44"],["art/shaded/vulpecula.png",11241,"16980e83243f003d"],["art/sheets/andromeda.webp",49430,"f50ccfa90a565d32"],["art/sheets/antlia.webp",50254,"79e6efb7e580203c"],["art/sheets/apus.webp",59102,"ed7bac5ad31bee9a"],["art/sheets/aquarius.webp",55454,"0c4d0aae8da0b57f"],["art/sheets/aquila.webp",66028,"07aa3060d65b4df5"],["art/sheets/ara.webp",68288,"7680a1ae0a72d391"],["art/sheets/argonavis.webp",73214,"082e899a7afd0893"],["art/sheets/aries.webp",66924,"2f7359e8a93b3ef6"],["art/sheets/auriga.webp",72808,"0b39bcefade1c3d1"],["art/sheets/bootes.webp",58270,"cfe9c108f0605736"],["art/sheets/caelum.webp",38484,"02f1beef08a663e0"],["art/sheets/camelopardalis.webp",36402,"8b4a03e37d957007"],["art/sheets/cancer.webp",61084,"b8d978a5a31cea7d"],["art/sheets/canes-venatici.webp",52666,"46c1974acf0a31fd"],["art/sheets/canis-major.webp",41008,"e9990f51d1022986"],["art/sheets/canis-minor.webp",49164,"dd591f7a0f4ad1a5"],["art/sheets/capricornus.webp",58048,"28872c20d6eab29a"],["art/sheets/cassiopeia.webp",64690,"499dfea9ff33258a"],["art/sheets/centaurus.webp",45994,"5babfa334ea070c1"],["art/sheets/cepheus.webp",58858,"66369d4f7474267c"],["art/sheets/cetus.webp",61102,"6feebdeed29feea6"],["art/sheets/chamaeleon.webp",44878,"e315f96d3313f07c"],["art/sheets/circinus.webp",39040,"15e393d8ef5b60f8"],["art/sheets/columba.webp",59118,"88bc15b6b3854ffc"],["art/sheets/coma-berenices.webp",71602,"8aaeca2b3b02aca7"],["art/sheets/corona-australis.webp",75204,"c386b7302f35352e"],["art/sheets/corona-borealis.webp",64278,"975a637ceda15982"],["art/sheets/corvus.webp",67956,"76d1c57708f974e2"],["art/sheets/crater.webp",56918,"fb3e9893f3a63b37"],["art/sheets/crux.webp",74548,"b0cf142d67b8c8f4"],["art/sheets/cygnus.webp",41850,"f0b746f3ecb7a608"],["art/sheets/delphinus.webp",43232,"2b00aff220266eda"],["art/sheets/dorado.webp",38696,"52d6cf6258e01cc3"],["art/sheets/draco.webp",57498,"ce7c046eb00b7941"],["art/sheets/equuleus.webp",51108,"f37f6d2e4457acfe"],["art/sheets/eridanus.webp",39134,"6bf5b6ed9b39696f"],["art/sheets/fornax.webp",45880,"474d056fa673c677"],["art/sheets/gemini.webp",73824,"e97023e56c8b0e70"],["art/sheets/grus.webp",58610,"8611df2c9de51190"],["art/sheets/hercules.webp",58524,"daceef8591bd4604"],["art/sheets/horlogium.webp",59138,"838b235378980e6a"],["art/sheets/hydra.webp",34810,"4ba3821ec0e4d793"],["art/sheets/hydrus.webp",46472,"4fd237a2f1118da8"],["art/sheets/indus.webp",65834,"c4f71ad4ac104701"],["art/sheets/lacerta.webp",55812,"1d84707d95062a8f"],["art/sheets/leo-minor.webp",38908,"7a692a33285ad49d"],["art/sheets/leo.webp",52896,"04cb013400aad38e"],["art/sheets/lepus.webp",63462,"3a8becad46b4a159"],["art/sheets/libra.webp",57320,"1d04fdb8acce9cd4"],["art/sheets/lupus.webp",39916,"92a492cf58d84bb6"],["art/sheets/lynx.webp",32430,"e3fe6617f02e50f4"],["art/sheets/lyra.webp",40348,"128c7a56aaef26b1"],["art/sheets/mensa.webp",64718,"a84c95d9ca899c6e"],["art/sheets/microscopium.webp",43746,"a30a768d296f117d"],["art/sheets/monoceros.webp",39912,"807072a7685f7a19"],["art/sheets/musca.webp",83556,"42504cf76c73ca6d"],["art/sheets/norma.webp",42452,"f90974f8ee388598"],["art/sheets/octans.webp",56476,"6596d6c59e568b84"],["art/sheets/ophiuchus.webp",53874,"be2a27c16d4d0aea"],["art/sheets/orion.webp",58610,"baf69b33650f0084"],["art/sheets/pavo.webp",72940,"9005adc3aa756203"],["art/sheets/pegasus.webp",46906,"45352ff43a732d21"],["art/sheets/perseus.webp",76128,"7bd0890be95fbcc9"],["art/sheets/phoenix.webp",88602,"7ce954ef53c57119"],["art/sheets/pictor.webp",44992,"b9b37fc2d260de0b"],["art/sheets/pisces.webp",35966,"56c3589a9d05958d"],["art/sheets/piscis-austrinus.webp",49072,"a0ebd9cff5363a53"],["art/sheets/pyxis.webp",62106,"644ed9aa04ee6e42"],["art/sheets/reticulum.webp",72616,"c28069688e9f3b12"],["art/sheets/sagitta.webp",25086,"d57fcd4367138b54"],["art/sheets/sagittarius.webp",56950,"ac9cd07c1fe0c87d"],["art/sheets/scorpius.webp",59056,"2b01dd99728a3c06"],["art/sheets/sculptor.webp",58082,"e8989ab728d592f1"],["art/sheets/scutum.webp",92600,"33823c8fd05eb322"],["art/sheets/sextans.webp",80062,"ed54ff042a76eed6"],["art/sheets/taurus.webp",43458,"49809e95437bc94c"],["art/sheets/telescopium.webp",46210,"dedcdb26267b7cab"],["art/sheets/triangulum-australe.webp",36758,"ba2242e8d6f812ff"],["art/sheets/triangulum.webp",31744,"ddf5f13788a1df1e"],["art/sheets/tucana.webp",31318,"49c9a1981d86dedd"],["art/sheets/ursa-major.webp",40162,"a2b48fef810888d6"],["art/sheets/ursa-minor.webp",35832,"abfe0cf23ab45f58"],["art/sheets/virgo.webp",60558,"2a9efb0d45fde09b"],["art/sheets/volans.webp",34482,"a5a2b55f23d86d6f"],["art/sheets/vulpecula.webp",42098,"04555b053b01cadf"],["art/taurus.webp",56466,"8df29dc6a7d2e2a3"],["art/telescopium.webp",42062,"31b0f5afe38d9575"],["art/thumbs/andromeda.webp",4310,"f5ac6f127dbcc052"],["art/thumbs/antlia.webp",4160,"1566d9857bd3ca8f"],["art/thumbs/apus.webp",4508,"05af504b7f571c86"],["art/thumbs/aquarius.webp",5340,"edf4ca989782f21b"],["art/thumbs/aquila.webp",5512,"ad2cf6c3f7baef0c"],["art/thumbs/ara.webp",5028,"091bb11e82a0424e"],["art/thumbs/argonavis.webp",6230,"57e87992132f8884"],["art/thumbs/aries.webp",6000,"2328485dd825cc00"],["art/thumbs/auriga.webp",6304,"b43def12837a0181"],["art/thumbs/bootes.webp",4776,"f3262169ddcc4d19"],["art/thumbs/caelum.webp",2874,"e4b9f4dd57973b2a"],["art/thumbs/camelopardalis.webp",3272,"e24d13c8803bfa07"],["art/thumbs/cancer.webp",5122,"a75385bfa81d4029"],["art/thumbs/canes-venatici.webp",4734,"13e870ac7a750e05"],["art/thumbs/canis-major.webp",4020,"f4606966dd23fbef"],["art/thumbs/canis-minor.webp",4242,"172b01203e367b8a"],["art/thumbs/capricornus.webp",4864,"c7b4e6a3b1c59e5e"],["art/thumbs/cassiopeia.webp",5704,"6351534b9623aa06"],["art/thumbs/centaurus.webp",4374,"bc42284983f10f42"],["art/thumbs/cepheus.webp",5128,"05668311dc0e1ebf"],["art/thumbs/cetus.webp",5158,"62a071c5ad0ad61f"],["art/thumbs/chamaeleon.webp",4030,"bde0273b9ee503b3"],["art/thumbs/circinus.webp",2734,"5e3490025cbbbb1c"],["art/thumbs/columba.webp",5286,"a1bb5ff98bddf24a"],["art/thumbs/coma-berenices.webp",5722,"e58b8682e9714a78"],["art/thumbs/corona-australis.webp",6006,"2a1bc3648b113a9f"],["art/thumbs/corona-borealis.webp",5456,"118582bad1580fca"],["art/thumbs/corvus.webp",5886,"37b5145fe35b5f56"],["art/thumbs/crater.webp",5226,"5706e17a11ed6cb5"],["art/thumbs/crux.webp",5646,"1d285db8533016bd"],["art/thumbs/cygnus.webp",3584,"f9f8cc322609701a"],["art/thumbs/delphinus.webp",3814,"fe2ac6782d751add"],["art/thumbs/dorado.webp",3384,"4c0b7ba75e1c7d0c"],["art/thumbs/draco.webp",5288,"013822fd5909b43e"],["art/thumbs/equuleus.webp",4496,"6a60ee64b67ebd74"],["art/thumbs/eridanus.webp",3532,"4a4105d3884b2367"],["art/thumbs/fornax.webp",4698,"9ac359fb1d14c8bb"],["art/thumbs/gemini.webp",6558,"7ad26295f32b712e"],["art/thumbs/grus.webp",4846,"9922b9744fca232c"],["art/thumbs/hercules.webp",5810,"c1ba5df52396d67f"],["art/thumbs/horlogium.webp",4528,"898bac3e81e0d899"],["art/thumbs/hydra.webp",2756,"29d3dea0cd31f306"],["art/thumbs/hydrus.webp",3458,"de6f20b3f09b2493"],["art/thumbs/indus.webp",5288,"70c7c5ead5ed4ef7"],["art/thumbs/lacerta.webp",4274,"d01867137518dd1a"],["art/thumbs/leo-minor.webp",3864,"9230d1a026121841"],["art/thumbs/leo.webp",4406,"9eaea93746fc257b"],["art/thumbs/lepus.webp",5622,"b696ecf2b22ee5c3"],["art/thumbs/libra.webp",4864,"7031d25df4e79cf1"],["art/thumbs/lupus.webp",3892,"ebb148976d3e4d91"],["art/thumbs/lynx.webp",3420,"57668a2579a15880"],["art/thumbs/lyra.webp",4396,"77ae382ce2a82d04"],["art/thumbs/mensa.webp",5788,"2228eaeafb2adb53"],["art/thumbs/microscopium.webp",3794,"502aaa3583b1d028"],["art/thumbs/monoceros.webp",3810,"87de02c2bc6012ca"],["art/thumbs/musca.webp",6452,"b3d253be4f7f36a4"],["art/thumbs/norma.webp",2910,"4a911b3a89cc8217"],["art/thumbs/octans.webp",5092,"6cffe99e1d133520"],["art/thumbs/ophiuchus.webp",4852,"af409ad509e52934"],["art/thumbs/orion.webp",5416,"ecec12d4426d1cd4"],["art/thumbs/pavo.webp",6614,"1e483d42c800c2b0"],["art/thumbs/pegasus.webp",4116,"5253803d3407e4dc"],["art/thumbs/perseus.webp",6494,"f4acb267345469bf"],["art/thumbs/phoenix.webp",6860,"2abef22f7c5c48c7"],["art/thumbs/pictor.webp",4086,"aaf9d2cc34af2c3c"],["art/thumbs/pisces.webp",3088,"9f0cec72a740aafc"],["art/thumbs/piscis-austrinus.webp",3830,"5665ecef29f3b33c"],["art/thumbs/pyxis.webp",5144,"4108050424ccbecb"],["art/thumbs/reticulum.webp",4948,"05361239228e5756"],["art/thumbs/sagitta.webp",1616,"bf034685b4509333"],["art/thumbs/sagittarius.webp",5396,"84816177f0ae0dcc"],["art/thumbs/scorpius.webp",5344,"962e135fff83d678"],["art/thumbs/sculptor.webp",4664,"d00c00e0b82fde3a"],["art/thumbs/scutum.webp",8114,"c7d8452de4fe90ff"],["art/thumbs/sextans.webp",6510,"aa9c279939e2d135"],["art/thumbs/taurus.webp",4370,"7a427af04b980a86"],["art/thumbs/telescopium.webp",4062,"b19468bdcd1b1ed1"],["art/thumbs/triangulum-australe.webp",3234,"33db77da9d4200e4"],["art/thumbs/triangulum.webp",2734,"7b277ff106affcad"],["art/thumbs/tucana.webp",2638,"26086ae9668d6ac1"],["art/thumbs/ursa-major.webp",3954,"e7550f55572ac495"],["art/thumbs/ursa-minor.webp",3594,"ed011c52b83cce0e"],["art/thumbs/virgo.webp",5000,"6cf28ccdaf451e5c"],["art/thumbs/volans.webp",2480,"4abe851bfb1b9158"],["art/thumbs/vulpecula.webp",4102,"f0b4be1e2e352ae7"],["art/triangulum-australe.webp",50574,"d5505371eb575c86"],["art/triangulum.webp",32280,"44cf619ff856a40d"],["art/tucana.webp",27618,"26503a49bf24ff62"],["art/ursa-major.webp",58180,"86a3096578f67b52"],["art/ursa-minor.webp",50536,"501cfe7f5cd170fe"],["art/virgo.webp",48024,"f2f39af8c7d99c40"],["art/volans.webp",16200,"632a1b1766e9970d"],["art/vulpecula.webp",59966,"fa43544daccbb315"],["assets/AmiriQuran-6TfY6zeW.ttf",136920,"e2a47644762d16bd"],["assets/Calibrate-DvJ5qXDK.js",12228,"b425fda77c6f08f9"],["assets/CityPicker-osXxv_lE.js",5166,"b9e71ba79a6892ab"],["assets/CivilFocusFrame-Ca74EeQw.css",1037,"28681f0c01809583"],["assets/CivilFocusFrame-D9hIaoOp.js",4527,"8b9e61992de290c4"],["assets/CultureOnboarding-CKtKD3RD.js",4195,"2f7292df1ec7b241"],["assets/Detail-C6NZV6zW.js",47149,"c7f2ab122eb995c9"],["assets/Diagnostics-dYepL9mc.js",12553,"0e5893d265a974d5"],["assets/DisplayPanel-BqoczPl9.css",3050,"4c785178f6d66e86"],["assets/DisplayPanel-CNpkK0ad.js",26316,"0ec8bf42810786b2"],["assets/Entry-D7fMIeQ7.js",8323,"c4de6dfd496aef95"],["assets/EventsPage-C_hOsgag.js",19852,"0e317a67d43cd8a4"],["assets/EventsPage-vPUdanLB.css",2457,"27129356be1c6245"],["assets/Explore-BDJuz_eO.js",20777,"5cc86772b2ceaf99"],["assets/Explore-Jdu4oNyV.css",3414,"2d104b77f95d23a2"],["assets/HilalWatch-Dwg7znHg.js",6350,"4a4c08633397b9e1"],["assets/JourneysList-BERbN8NE.js",2658,"df4e86e4727a8f33"],["assets/JourneysList-tEsk0-19.css",1554,"e9afa279306222d7"],["assets/LoadError-Jf1gNXNe.js",677,"0335b4b32994b21c"],["assets/Najma-0YaH7n21.js",17120,"3016a42a2c2faf23"],["assets/NajmaEntry-BldchFui.js",2129,"295ae39d56a34afd"],["assets/NajmaEntry-CbrUPMu9.css",4131,"07b472e1d088ae76"],["assets/OFL-CP3mpQPw.txt",4389,"72de68e5954f4fdd"],["assets/Peek-BEvt9lTU.js",2091,"78d60a2ddb64c353"],["assets/Player-DWX7zda0.js",233563,"dbb2d7be27a2f1a7"],["assets/Player-jmwDmtA2.css",15131,"8f60c5553e767e63"],["assets/PlusOverview-C--L86hU.css",10006,"bf22275166723002"],["assets/PlusOverview-C8XmOvl6.js",66691,"bbc46428deda4349"],["assets/QuranReader-Cx2E5fmJ.css",7221,"9967869a79a434bb"],["assets/QuranReader-z5F94PrQ.js",9166,"e3a039e7525bf066"],["assets/ScienceReader-yhrDlq10.js",3781,"c5687e03eb1c22e3"],["assets/Sections-COmPgXw5.js",325952,"be622349910659d3"],["assets/Sheets-CVZ6T4vp.js",4203,"17274107fcc7c12c"],["assets/SkyConcierge-N4e5kbHS.js",13040,"63c1121dcd88fe31"],["assets/SnapshotView-Dsa77c_v.js",2053,"4c6056b864dfc4df"],["assets/Stories-BzbOecoh.js",9483,"1ac35fa9cb667c28"],["assets/Stories-DZP5KTY1.css",3452,"add4bf1ce7aeb4da"],["assets/align-DgG2bnWU.css",3334,"c6aa6d1b7bc31860"],["assets/artShaded-Dd8fLczW.js",2090,"a063ca8b3bf66a03"],["assets/babylon-DoqhRkd2.js",52607,"2dd8de78186bec84"],["assets/bodySizes-DVkKWl7f.js",2859,"6df75791e179aa67"],["assets/boot-B_bEwIEQ.js",16799,"e36176b36b9c1029"],["assets/boot-Ck5HWe8g.css",3394,"8827afd1e5ff6e3c"],["assets/captions.ar-BY39YkEh.js",29432,"c5aa34bcf3b6dba7"],["assets/captions.en-D_84AY-t.js",22509,"11b169b2eabe3cda"],["assets/catalog-CXaei7xz.js",8592,"db4ab9af4f0fdd30"],["assets/cities-DkWLQuXU.js",70939,"c691ae280dc03082"],["assets/clockRules2026e-B0mOCvRM.js",4110,"d9ef4a356785e7d0"],["assets/common-Bv-MXoEq.js",14617,"926cb4d8171973ed"],["assets/compass-BPtw4JFG.js",273,"7d3696bd7a5b1074"],["assets/config-4V3H9Nfu.js",978,"31b1b807bfeab699"],["assets/content-B40bmKXg.js",7184,"f931b7d86bf5f10b"],["assets/culture-DbVyfkfa.css",2454,"09add4ab8da83d7f"],["assets/culture-Ddcmh09A.js",1969,"371aeca97006b4bf"],["assets/culture-Rcyu8s8P.js",1524,"9f3bf37eb81b112c"],["assets/details-BPv-VD06.js",254,"500b7de8666ccc6b"],["assets/details-BseH-Kaw.js",7507,"7f05ec83308a14d1"],["assets/details-DdcxGDeK.css",15004,"13b99b912f899d53"],["assets/developmentPreview-Cd24BBP5.js",97,"a0ca004985def6db"],["assets/dwarfs-nuj99eny.js",12244,"a96ecbb86bc68945"],["assets/earthGalaxy-DeaB8l1R.js",22995,"526f5bcfda960be0"],["assets/egypt-MjfpOcJb.js",47389,"2df2fb573d1de241"],["assets/egyptFullAdapters-C0NfbGM5.js",65775,"98f93d587ee131cc"],["assets/events-CkKj7H43.js",12500,"ff1ede011774e7e8"],["assets/events-Dxq47xbc.js",18646,"2dd85d37b20f31f6"],["assets/explore-eUzfzaJr.css",6324,"bb5489de58b2528a"],["assets/facts-BzpZrpH4.js",10383,"0fb32821a1108906"],["assets/favourites-Dn7tgpI5.js",1256,"b3dfac16547797ec"],["assets/fullQaBindings-9BX9aIQu.js",752,"3b82171a25fffa01"],["assets/glow-B_qCeglz.js",2245,"a16b6d94147c65dc"],["assets/heritageSky-CYgllTjI.js",5568,"29d8fd9c6267c983"],["assets/heritageStars-Do23LjeK.js",5932,"37830ea5790f2eb9"],["assets/hilal-BbYQoELl.js",4768,"c1b958f52b48b5f5"],["assets/hilal-BfKCxuMt.css",4385,"7f7f3e8f31fc70bb"],["assets/iana-2026e.json-8nhve5Or.gz",33497,"7d746774258b391f"],["assets/ibm-plex-sans-arabic-arabic-400-normal-BM00HIL5.woff2",42880,"bddd926d02ede39b"],["assets/ibm-plex-sans-arabic-arabic-500-normal-CVSLUoBh.woff2",45488,"e6a6ef2b0ea29fdd"],["assets/ibm-plex-sans-arabic-arabic-700-normal-CW2fYlQC.woff2",44092,"172453d45ea51a5e"],["assets/ibm-plex-sans-arabic-latin-400-normal-B5r_Re2g.woff2",19200,"769a7f798f34c5b4"],["assets/ibm-plex-sans-arabic-latin-500-normal-Bg_w3V9S.woff2",20116,"812d46ed38b32ef2"],["assets/ibm-plex-sans-arabic-latin-700-normal-B1l2chsb.woff2",19544,"d0c903368f403e09"],["assets/icons-B5bS3Wti.js",10898,"66ddbd4381feea6b"],["assets/icons-B6s3qr4q.js",8253,"6160d8fb81a4c2c6"],["assets/iconsMore-DOB_70xO.js",38857,"272be4c9beb981d1"],["assets/ics-DSK77Wi6.js",1733,"70e27b286ed1982d"],["assets/impostor-BartVTB9.js",342713,"25e13f88c2354f82"],["assets/index-BEJRGjlI.css",45943,"9a49758b3c72e179"],["assets/index-BG2hnLSX.js",13619,"4fb75214144ac21b"],["assets/index-BRz51Aqe.css",1435,"a4b1c2a8dcbd7657"],["assets/index-CH8jJpHc.js",3611,"a97cdc5eb8e5a77d"],["assets/index-CPkGgB55.js",11156,"18670dc5879ca497"],["assets/index-D1Ls8Xez.js",1157936,"0fdd27ac304f9694"],["assets/index-cCQpSYcG.js",16601,"bd85d5437b8a07e3"],["assets/iss-DTwcqlHE.js",3175,"dba7a7cb1d669028"],["assets/journey-BstGIIT0.js",74174,"ad68864763909237"],["assets/journey-D3kt_pg3.css",5145,"0d9dad2e362941ac"],["assets/journey-r_do7hd0.css",18189,"7973e662d5e2504c"],["assets/journeyFX-CHbCs1G6.js",9682,"691b3c47520778b0"],["assets/journeyGalaxyScene-j5EXrEWS.js",6169,"dedd3f267341a00e"],["assets/journeyOrbitCamera-Bh5xduZm.js",4703,"889119bce88e8b3f"],["assets/journeySpaceDraw-S5wk_zZU.js",8667,"211756afddcf572c"],["assets/journeySpaceScene-DtbqLJoB.js",8859,"110eebb9766c7b7f"],["assets/layers-1onDMVgd.js",513,"4f286566f8a643ae"],["assets/lenses-BGyXYzv9.js",1827,"5a84d4ad06e47c89"],["assets/loop-20Bug1um.js",59692,"6204df5940a4e073"],["assets/milkyway-DFP1bzVT.js",4165,"eed718fbe575ecb7"],["assets/model-BE3EaZ6z.js",18269,"916c851857206cad"],["assets/moonPhase-Dqmdv67I.js",300,"4ea65e874a703ec9"],["assets/narration-oMldx0tV.js",2897,"1dffa6732c2f5063"],["assets/nativeEnglishQaBindings-C59YnlF-.js",1550,"030f902880ecfee1"],["assets/nativeHaptics-CTlCwwOK.js",151,"12559a62d83ed375"],["assets/nativeSkyMotion-Bg-bcbR-.js",9213,"1c2411e492fce84b"],["assets/noto-kufi-arabic-arabic-600-normal-DpQOABqh.woff2",47416,"2273ed03fcd74389"],["assets/noto-kufi-arabic-arabic-700-normal-CGKuvZQr.woff2",43872,"c964525ff0ef5e10"],["assets/noto-kufi-arabic-latin-600-normal-BU20Dfqv.woff2",10468,"c347879a7bf417d4"],["assets/noto-kufi-arabic-latin-700-normal-CeymQha4.woff2",10384,"d096450fc5f521ae"],["assets/observingJournal-DaPXDZGW.js",5305,"0ab859a2c1fd85a5"],["assets/phase-BqDDXW_6.js",554,"ca4901e02a6449b3"],["assets/player-BrCt1aLo.js",9589,"92710d2e280a60e4"],["assets/probeFrame-1BtWtz8f.js",1551,"1fe85e3be5c79a8e"],["assets/quran-Cjb_w39K.js",93576,"74c47b2916c382ba"],["assets/quranController-Bz2iMpVI.js",168269,"3a162e65ecb96634"],["assets/quranController-sa4ut-Jb.css",15094,"a5213d363532b18c"],["assets/quranJourneyStars-o8ift0CT.js",11972,"bdd379784b7bdb6a"],["assets/registration-DDh0QfW6.css",18038,"b186688dcb45555b"],["assets/registration-DzbdepmN.js",333569,"d2f9b508acc8fb34"],["assets/resolveGpsPlace-Dk9JW-YV.js",11104,"940284ad9bd78ae7"],["assets/selectedMasters-AhVGH3z_.js",47631,"6d52da2cb62fd60a"],["assets/skyExtras-DRI_7UEC.js",51221,"4e8f599daf8ac349"],["assets/snapshot-D1boNJu8.js",4043,"7674df6cf0d080b1"],["assets/sources-DpCF3bCE.js",167310,"572c964d1622d479"],["assets/starColor-D_0EdDqh.js",2322,"8d5a6ea0bfca0b75"],["assets/stars-CLJbCriZ.js",30056,"a14ea7f445f05139"],["assets/tonight-C_kjXtpR.js",8332,"18d2acce1d14b354"],["assets/words-BUFhZ7f5.js",7619,"f17ca39632acc486"],["assets/words-CgpzjfhT.js",2338,"b120e77338f12091"],["assets/words-HH4a4Qme.js",13750,"a0d912eb29753594"],["audio/LICENSE.txt",1223,"b3b100cb1a08c319"],["brand/intro.webp",98496,"c425019b35f4145e"],["clock-rules-LICENSE.txt",1664,"fb3ba1a0258883e1"],["data/PROVENANCE.md",2027,"d7cf695d3aa9b0b3"],["data/derive-no-fuzzy.mjs",3275,"19bada4a7d7482bd"],["data/licenses/TANZIL-QURAN-TEXT.txt",1106,"72493509d507314f"],["data/licenses/TIMEZONE-DATA-ODBL.txt",26030,"064dbcd9fdd0ffdf"],["data/licenses/TZF-MIT.txt",1067,"f15704ba42fd38aa"],["data/licenses/TZF-RS-MIT.txt",1067,"f15704ba42fd38aa"],["data/tz-lite-2026e-no-fuzzy.tzb.gz",2449531,"31193fc5fe2c6110"],["favicon-64.png",3838,"5498779bd573aa36"],["icon-180.png",21138,"3cc5b663eac4d452"],["icon-192.png",23789,"93638475980c0ac4"],["icon-512.png",137478,"b20f6ed8c48ad776"],["icon.svg",6159,"78c3ecc7e84e79e8"],["index.html",2424,"306c9497d0c3c0f1"],["manifest.webmanifest",538,"db143b90617bb968"],["media/jupiter-icon.png",27948,"b1372d2a3d84f9fd"],["media/jupiter.jpg",10514,"de51dbafef083d3b"],["media/mars-icon.png",27840,"b9edd8012d606652"],["media/mars.jpg",9749,"68fac7c577e98076"],["media/mercury-icon.png",17110,"3b41d4d8d8142bee"],["media/mercury.jpg",9087,"1be4ea8b070c00f2"],["media/saturn-icon.png",14085,"8135074c00e36c00"],["media/saturn.jpg",6250,"c5f66957d16b1772"],["media/science-reading/earth-in-solar-system/ar-68fa244ef7dd.m4a",1082978,"68fa244ef7dda275"],["media/science-reading/earth-in-solar-system/en-11977ec39eba.m4a",841322,"11977ec39eba7346"],["media/science-reading/what-is-a-galaxy/ar-7934869da328.m4a",1124442,"7934869da328c567"],["media/science-reading/what-is-a-galaxy/en-586ffe5a5763.m4a",941571,"586ffe5a5763139f"],["media/spacecraft/LICENSE.txt",4112,"e7463d8ad1af7e56"],["media/spacecraft/hubble-20090519.png",446079,"bfcd79c44bcd0600"],["media/spacecraft/iss-20181004.jpg",122586,"a8add4a855c790df"],["media/venus-icon.png",22444,"0da4b2a33bf02a30"],["media/venus.jpg",6514,"6a4b163c0bb5fab1"],["privacy/ar.html",7709,"21f569c964a33245"],["privacy/en.html",5601,"d594f0763cc8bb20"],["privacy/privacy.css",654,"8aea452ef58077ca"],["tex/bluenoise.png",4228,"ee800e74196f51b2"],["tex/hd/jupiter.jpg",488445,"95f82bafae3d2b9c"],["tex/hd/mars.jpg",374775,"b18f280ceebc54f2"],["tex/hd/mercury.jpg",512088,"893f3b1682d6ad9a"],["tex/hd/moon.jpg",1486204,"490715f4c16f2f1d"],["tex/hd/moon_normal.jpg",521232,"176ace9341542c47"],["tex/hd/saturn.jpg",119609,"b6311f5f16c0454d"],["tex/hd/sun.jpg",362513,"b98f89125a586384"],["tex/hd/venus.jpg",135084,"7786eddf98b4dc38"],["tex/journey-earth.jpg",266599,"d4dc80a6ef571939"],["tex/jupiter.jpg",227274,"28c0cc658a8bee4f"],["tex/mars.jpg",100725,"f3b1c3a50331802e"],["tex/mercury.jpg",121218,"1f1d67411879ad61"],["tex/milkyway_c.webp",6128,"b845a920ef3fc437"],["tex/milkyway_l.webp",150138,"e330df45c873ba92"],["tex/moon.jpg",413535,"d38a7754e07260e6"],["tex/moon_normal.jpg",114101,"900801c2dbc7b976"],["tex/neptune.jpg",6843,"dfe9c23eeb535d56"],["tex/saturn.jpg",34006,"1766e7304be7c4f8"],["tex/saturn_ring.png",5661,"e1fde949b8cd03d5"],["tex/sun.jpg",120075,"82b5a4f1607a8ccc"],["tex/uranus.jpg",3194,"ffa97b684727fb66"],["tex/venus.jpg",38888,"d255d05e2fd1c66d"],["version.json",149,"286a3b85113af83a"]],"lazy":[["audio/najm-night.m4a",2092085,"941cc5b4b96e6f05"]]};

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
