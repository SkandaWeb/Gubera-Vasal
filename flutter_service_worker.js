'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "5826873c6e11492f9224c7a537010434",
"assets/AssetManifest.bin.json": "0947bf65fafd5c33c832cae7667e4a62",
"assets/AssetManifest.json": "6575be4b81eeebd3dd06f6ac4c14a2cc",
"assets/assets/aerial-bg.jpg": "2d2af73a4d012dddde526bf437ea5dc5",
"assets/assets/aerial-bg2.jpg": "37dfe8d21d3f9812c0d11eaf3ab41ce7",
"assets/assets/aerial_bg_desktop.jpg": "27f80979694dd4d0c53fa8d38ea80e42",
"assets/assets/aerial_bg_mobile.jpg": "14304ab293029a97f1891da7f8c7a527",
"assets/assets/amenities/arch.jpg": "9bc8c0f2c2b906f5d3b119c4ce4380bb",
"assets/assets/amenities/park.jpg": "1de6a60c54f17ddc602a3335da3cf31c",
"assets/assets/amenities/road.jpg": "a6f4867799c506e2420b5ab21b492f98",
"assets/assets/amenities/temple.jpg": "5c879793de0b284c42fabfaa87296133",
"assets/assets/anim_loader.json": "fb254e1837df8a626eb4b428f0333590",
"assets/assets/anim_location.json": "8b3e7de2632792287826148c03d79ebf",
"assets/assets/ic_facebook.png": "ba803196d3b7644ffb2576efd1500b6b",
"assets/assets/ic_form.jpg": "6ffd10385faa8a4bbc28dd660b11d074",
"assets/assets/ic_instagram.png": "5c570427ee23f69853d28aec805eee79",
"assets/assets/ic_next_city.png": "a9c1ffecc8ee5b345e3dd6489a91842a",
"assets/assets/ic_whatsapp.png": "774352deeaa60ebe04164a1e28489771",
"assets/assets/ic_youtube.png": "ca6d67e60f758d352745329b283e8f32",
"assets/assets/images/133.jpg": "3248fb7892f63c04ff8aa29111e0327c",
"assets/assets/images/134.jpeg": "078fa3bfe704401e92f5c02006718081",
"assets/assets/images/2071.jpg": "f36d8021ed65653fbceac66ebfeaa4a9",
"assets/assets/images/coco_bg.jpeg": "d6b719916e9cda2484939766111d16a5",
"assets/assets/images/coco_thumb.jpeg": "ac9e10b8d48cb75e1fb3ffa0baddceda",
"assets/assets/images/erode.webp": "2a75db7c16f2bc492abbc0e37ff15e80",
"assets/assets/images/kovai.webp": "11479c0b4ec7bd0dc39afe24dd7b04f7",
"assets/assets/images/logo.png": "9a04f1a99edf2b7fe3738c29c0a462a9",
"assets/assets/images/pollachi.webp": "0098372f09c06d48baf924296fc29807",
"assets/assets/location.png": "ff0811e13c403f3ffd781296682ae182",
"assets/assets/phone.png": "512d593c2807579f3815247fc1aca160",
"assets/assets/real_estate_01.png": "c26137ec28583dcd0b6619ded0962c72",
"assets/assets/satisfaction.png": "c6f9a525f24cf6373272475c082771ae",
"assets/assets/user.png": "42c665c2531c24b205652e305c1f1b08",
"assets/assets/whatsapp.png": "983e9b8bd20f9ee3a91195e705068776",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "72dbe39058df73d3183d236bebae392f",
"assets/NOTICES": "e408d488eba26f0feee3bbd83b082770",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "416fbd43af735fe497423f57e2e76f28",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "7b8d82cb30b48435208592e7e48e2c1b",
"Gubera-Vasal/.git/COMMIT_EDITMSG": "e30260020baeb0398ff07b37dd33ed16",
"Gubera-Vasal/.git/config": "963a340034510b6b35a2e75a023380a7",
"Gubera-Vasal/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"Gubera-Vasal/.git/FETCH_HEAD": "8c84f40c1947cfcaa3ec02f221d7c5f8",
"Gubera-Vasal/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"Gubera-Vasal/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"Gubera-Vasal/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"Gubera-Vasal/.git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
"Gubera-Vasal/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"Gubera-Vasal/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"Gubera-Vasal/.git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
"Gubera-Vasal/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"Gubera-Vasal/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"Gubera-Vasal/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"Gubera-Vasal/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"Gubera-Vasal/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"Gubera-Vasal/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"Gubera-Vasal/.git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
"Gubera-Vasal/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"Gubera-Vasal/.git/index": "852d964abc03b11a93dde6309525b8fe",
"Gubera-Vasal/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"Gubera-Vasal/.git/logs/HEAD": "c646fe860eecb9cda61f8fe0d2ef6446",
"Gubera-Vasal/.git/logs/refs/heads/main": "3d2e85d66a35cba7f1d7869b5eee0232",
"Gubera-Vasal/.git/logs/refs/remotes/origin/HEAD": "aec57a087dd4f8c433624b78c7c11317",
"Gubera-Vasal/.git/logs/refs/remotes/origin/main": "839539db83fe9a68d8b98c3e8fd6340a",
"Gubera-Vasal/.git/objects/00/754d0cb4759fbd8e698b0d1aaf932a113432b8": "340976c67a4151097ef0a89fe8c6a8cd",
"Gubera-Vasal/.git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "cc729cbc1de09e26c8ac1c31cb284e98",
"Gubera-Vasal/.git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "aa6bc2588c86a5df58354e8329a5819b",
"Gubera-Vasal/.git/objects/0b/a0d15ddb34f21ae28b77e5828132c0fa0c0c80": "da86fbb0745b3dde15c1adc84bf6e8eb",
"Gubera-Vasal/.git/objects/0c/37594409355f44e27de8152dd5be76567012e6": "90be72f0e57b1e1f031c3f95bab409fb",
"Gubera-Vasal/.git/objects/11/813c75f003ca4103b2b25446edfc0a8fcaa9f5": "eed41a488c0a55490160938a1836c031",
"Gubera-Vasal/.git/objects/13/3691d4971029f3566556c36afec4dbcfe040cd": "0426c31354af5733d0141c307c5cb3cd",
"Gubera-Vasal/.git/objects/1a/c10ea894ab89951b50def7ce57b0cd0af86499": "b3403ae0aff518a6b3a5eb9731e1c557",
"Gubera-Vasal/.git/objects/1b/53864feb3b7d49c51b1dc49916e5ff4774e1c3": "7f66d307808ae15671a8f5572ada90db",
"Gubera-Vasal/.git/objects/1c/b761f7ff1316adcb1cddf255d9543fa489fdea": "00babc9d23a4f8cdabd3eee0b2fec68c",
"Gubera-Vasal/.git/objects/1f/e1f47a31919e51c5d8d17d2ab3e516fc96c4c6": "e8093c2b1cd2be7424549be743294e1b",
"Gubera-Vasal/.git/objects/25/89f9400f35ce4cf6dd004b797d32edf0aa5a6d": "84b36b47cbe7c15aa3347eb9d1777601",
"Gubera-Vasal/.git/objects/26/dce34d26df38d0f5b891812668b0b194e4f8bf": "42b3974beca6a89b02f6b11330d9952a",
"Gubera-Vasal/.git/objects/27/ae75494dd6f5ac44457acf97ebd71637e93feb": "8ff94e7b5be282d73224419865035240",
"Gubera-Vasal/.git/objects/29/f6cde4c958aa51a66a57e588179bad289def44": "b0aae5f028c2363205efc89208b4ad41",
"Gubera-Vasal/.git/objects/2a/3c4bebf3a927a1504f71eaa5eb004fd13a38da": "fe522b3609f7d1967900e1e1c768836f",
"Gubera-Vasal/.git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "f610cbe34ab930f142b6d073ab27deb5",
"Gubera-Vasal/.git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "cefb98dcae0301097bc465deeeb72772",
"Gubera-Vasal/.git/objects/39/c67873c7804e8e6ec0b602ad8d585244219ea9": "348651905846e6cedbe7d33ee8e800b8",
"Gubera-Vasal/.git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "18afdd808b7e0b924a0e7474cebad727",
"Gubera-Vasal/.git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "707307abdda4f1fc08504b12b08018e6",
"Gubera-Vasal/.git/objects/3d/2e3200cfa810ba3d81f359530be0f82d05dd3e": "4d031c8d018df5f68c1a0a2e3b9a0a6a",
"Gubera-Vasal/.git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "b51c8670b810523b169634bf530a8675",
"Gubera-Vasal/.git/objects/42/d6c31d496d81033ff6416968b098f90a6b13f1": "7167715cb3143690cb2f0444329dcea4",
"Gubera-Vasal/.git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "f6fc11391a8c401cfb67cb54aa713a55",
"Gubera-Vasal/.git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "4b82e8a451138284a42647b622432b38",
"Gubera-Vasal/.git/objects/4d/1397fc5144efbeb962284afb0b367bbd786d26": "6658bf86751f1119e2862a45e3cfb339",
"Gubera-Vasal/.git/objects/4f/9b6766adcaf56d9d16fd2030d220f32040b5b1": "23b2ce5feff832484e1fc972d591b28b",
"Gubera-Vasal/.git/objects/52/3039ced5d1f218c68010781d473f7af37385a5": "6a385958001ed0818153196c6ec6f805",
"Gubera-Vasal/.git/objects/55/bda4e4ab04c02551575a34fe7b8ebb9338d28d": "f92149e597daf6dd4be3edb836031f9d",
"Gubera-Vasal/.git/objects/58/8a17de1ed5b21375773ebc86f0178342d1089f": "59a5779035f2dcc0c32df408fe34409b",
"Gubera-Vasal/.git/objects/59/3d539966cc9bc1169ee5fcf0987e5a022733ee": "edfc6af847d3f74263b8c6179b010f20",
"Gubera-Vasal/.git/objects/5a/bdb7b454d7a7517691c791513490743855e486": "1bee2562fb9cab9f8504a58cd1fc7a49",
"Gubera-Vasal/.git/objects/61/81afa883112845173241818fadd8d4c9e365f7": "5c56b6c1da319c420d04d397794ce68b",
"Gubera-Vasal/.git/objects/65/fd1cdaf0dd3228782319a3c7c0a620276fb32c": "607513d9adb943909adf658287acb77d",
"Gubera-Vasal/.git/objects/67/f7a61bbe94f9032d49b1ceec066a47ce873929": "7987b9f44871cb47c9bfe9386f3b0cb6",
"Gubera-Vasal/.git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "f1341a25d22b4a8e5f9c0241d202a781",
"Gubera-Vasal/.git/objects/6c/fdda64f13c1c00a3c9895467b895e43efe5c0b": "7a3643616fa7a8dbbd898c323fc83b53",
"Gubera-Vasal/.git/objects/6f/1c894a862c1cbac197c400a9559d738fefc375": "9c277098702e985bfe08373303926a29",
"Gubera-Vasal/.git/objects/6f/676a4dea2446be7c9f9651562ef50d15057407": "8eee419bdfac2246ca964d86da75f075",
"Gubera-Vasal/.git/objects/6f/9509c88bed7080d496fc5e1d87a9315e30549d": "c3ed1be52deaa5a5334678c624ecf031",
"Gubera-Vasal/.git/objects/70/6670c7eab8034337fa852b5501363c88ecd302": "c007b028d6c007d201cd7198875a3fe3",
"Gubera-Vasal/.git/objects/70/dd7ce8f9a6a1ffe44d68468b5b5c2905208449": "ce56486aed79a4f15c34ed410c296c8e",
"Gubera-Vasal/.git/objects/72/231ecbd0364accf5d0f3185783cdb8ea1d2a8e": "73ab0b8544fe731254f129e47e994ec4",
"Gubera-Vasal/.git/objects/73/a572b82c22a9c11e7a8ec23744481e9d8a2583": "14519a00f49b31b091792ac75e9b7177",
"Gubera-Vasal/.git/objects/80/44942b017d6c0b40f5b0b2e1249485f64ddd95": "12c5b3be52726ddfaa653ac025a500d7",
"Gubera-Vasal/.git/objects/80/759a3e87bff7e5963de38adf1ca78aa06ce29d": "ad364038d10ceb6395ac3f0b5ea92cc7",
"Gubera-Vasal/.git/objects/82/d3da7d3f45f50238935a9b3526b23131ee168d": "96e0ef22a5042c3417840a887668ad32",
"Gubera-Vasal/.git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "f88c3e8f69490491359c01fdfbf4dea9",
"Gubera-Vasal/.git/objects/86/333a96ccf9f7092b11393869db786772f7f23d": "92fb23015d8809d462b481cb65721f72",
"Gubera-Vasal/.git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "741ebbc8fe0e42c5efc5679e00865b0e",
"Gubera-Vasal/.git/objects/8a/9ff082366f22290a9c8214ca415c362e768730": "3a4a6a3e88da713dd052e9613822c75e",
"Gubera-Vasal/.git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "935f6777d5a34b22eac29575fdf07a81",
"Gubera-Vasal/.git/objects/8e/ab48c3000b84776ee334fc5a13bb7cddd95767": "6d028c4e8918c051d7d907d3d1dff44e",
"Gubera-Vasal/.git/objects/8f/1817c9544b9bb6966899b7ddbcfc39816d5e88": "6747e8340e88c3f8ce97b4945513d76e",
"Gubera-Vasal/.git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "cc171eda59b2198bcfb662da9c3ed257",
"Gubera-Vasal/.git/objects/93/c9d164211772c02105fb9df254d4c7a3f25b69": "8acde3bcdf6f973d5afd1ac958be04b1",
"Gubera-Vasal/.git/objects/94/65d16ee3762eafbd1dbb5df7c2c447a0a49436": "0b7c8d478b62efef4fb51617ac068fd2",
"Gubera-Vasal/.git/objects/96/5f0c522c03665f20a474caa628ba3a123dd05a": "ba22d4a3a63f52126f4856c9bde0eb3b",
"Gubera-Vasal/.git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "e0aee1a764d4e79300d1392e0233ed7e",
"Gubera-Vasal/.git/objects/9c/9e1e16d28261c1d57f152897818da97af4576f": "5de5e14190ddf7c1ef7b9253f39a2473",
"Gubera-Vasal/.git/objects/a0/e47568ad66679fd909d9d6c1fffeaac94d14c9": "efa778822f3a990183e45cb3ebbcbd98",
"Gubera-Vasal/.git/objects/a1/f8bdc577a5029040c2da121d838351c68643fc": "5d95621d9b0adce53a2cba2ce35a26ba",
"Gubera-Vasal/.git/objects/a4/c21cd7dc26bd86fef4420ae0e0d1676c53d394": "4a1945fd2ed73955d32093f84b87582a",
"Gubera-Vasal/.git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "a8ee603f3c72787ba9ac0d9e8695cfe0",
"Gubera-Vasal/.git/objects/aa/154ee7502345271c0a25de05c1c73b9206e93e": "2b3e14319ef24f351a123445d143e243",
"Gubera-Vasal/.git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "0f71dae0bcf233241efa99a3c9d748a0",
"Gubera-Vasal/.git/objects/ae/8ad5668741ea26c255fe7433fedb7398930be2": "cf8df0c2107ea35054f0eebed51ebfa1",
"Gubera-Vasal/.git/objects/b0/7469d9c7f05499580f0dfdb31286263090dea7": "336c765695bc7dd036acf60207b6e8e2",
"Gubera-Vasal/.git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "61886305a27a3edc9485ae96c5c20381",
"Gubera-Vasal/.git/objects/b6/51ba8d4ad6354f5a100a20c7aa245c9e2ee6e9": "39835ac3bd5546dcf2a6fe50b23302ec",
"Gubera-Vasal/.git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "4205eef49190d51b728a5fe78bc74582",
"Gubera-Vasal/.git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "4adf46374f95b9427c9fef44980c448c",
"Gubera-Vasal/.git/objects/bb/6112f1667abaf538ccbe7a637fb4d772ea3b1a": "e117627e51c0ec53f10601d5d7f46ffd",
"Gubera-Vasal/.git/objects/bb/7da259d087dbe67580faa2b46bc2780d87157b": "6bdb97ac0c0fc5b96a87c0f7bfb2c964",
"Gubera-Vasal/.git/objects/c0/8c87792d7a68ffd71898fa598b9b983f7e7ef9": "5e6d59f1d6187e2b1ab5f657c723ff8c",
"Gubera-Vasal/.git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6060cb588c8774586304298a5710f1f7",
"Gubera-Vasal/.git/objects/c8/0a5bd2f0508d3cf504f032726e08ccc2d30130": "d94f393c93c221c7da83599cd7a6529a",
"Gubera-Vasal/.git/objects/cb/23e7ac4d3ce6bd45bb173f505cc2e12d55c32c": "84d3b83757ac39e6f7a78ea03f695404",
"Gubera-Vasal/.git/objects/cc/975a4882ea03bbf67850b159c184f4752fd9ba": "18f43c854f6151d52c23f54a82c86a02",
"Gubera-Vasal/.git/objects/cc/a0514872e52e9ac6d1973df9d4cef5a10475bc": "c0ba26f7e0ee7880871f5a8251d89068",
"Gubera-Vasal/.git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "e328ba153ad3c7d383daf129966de954",
"Gubera-Vasal/.git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "43ec7593c54051d29f6a01ef0b3cdb05",
"Gubera-Vasal/.git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "43dc1abdf318479619f8ba30d339447d",
"Gubera-Vasal/.git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "6fb66a610eeb3a4d0399d24581bd4509",
"Gubera-Vasal/.git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "3655e2595dff3e9a6535903ae76f08bb",
"Gubera-Vasal/.git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "561d04eb65f955d114e3388465614e21",
"Gubera-Vasal/.git/objects/db/2f3dc6fb6e78066da203e46c4645364e7dc1ca": "29d0b83c241e1f61003372dafefe68d3",
"Gubera-Vasal/.git/objects/db/3cc7bffacdd0c25c4a50da08ac463f284f1073": "fabf8ab1c45fa19770912006cc1c14e7",
"Gubera-Vasal/.git/objects/dd/8958612015976818ce2316dcf7af02f2d1689e": "272a4264d6c20b0aa00f90be7eb004b3",
"Gubera-Vasal/.git/objects/df/e0770424b2a19faf507a501ebfc23be8f54e7b": "c394bb349d5f6a6517986a0734827215",
"Gubera-Vasal/.git/objects/e1/ec98aa6ee295df960e939d90efcd395eb89377": "cecb9135e236e14049df0493767df242",
"Gubera-Vasal/.git/objects/e5/0d5c7b638ae7c596f808defa039c0856929625": "8be4772205661e6a3716514a71b712b7",
"Gubera-Vasal/.git/objects/e5/8d26cb01b02f1d21b57b5c88556df8c9472b90": "302e8ce93a55487f59859c978cd14eb7",
"Gubera-Vasal/.git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "7dbbc94a8e35ee815b1d45df01b3842e",
"Gubera-Vasal/.git/objects/ed/7a5cb6d9c671c3808ee8f55facdfc17b0ed0d2": "b63096bf693df2598fa003794a645c21",
"Gubera-Vasal/.git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "a3bcb2075c8ac99bd68c577183925bd2",
"Gubera-Vasal/.git/objects/f7/f56af0e28390072d85975f87134706503eb892": "6823a0c7f27d5733afb46ed4402b1075",
"Gubera-Vasal/.git/objects/fa/4eb1294ec9201c3ef94bad7136de0f77f70661": "8baa6ed2bfbfda9a56104daf459d586d",
"Gubera-Vasal/.git/objects/fc/b0da0d44c9b9adf39353b962e2560bed1fe7f7": "dd5af1ce5f353feebc9e310286c78ab8",
"Gubera-Vasal/.git/objects/fd/37d92e8e8d0ca0fcfdd45bd3d2b488a06c489a": "606b7df5dc42428ba05ecb13f2c41052",
"Gubera-Vasal/.git/objects/fd/f7488584d53e4c2ebe76555bebff8e8d04fca7": "3970190182549a735f81170f1d637ac4",
"Gubera-Vasal/.git/refs/heads/main": "042219b2a2e1f17dbbc621fe8e983978",
"Gubera-Vasal/.git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
"Gubera-Vasal/.git/refs/remotes/origin/main": "042219b2a2e1f17dbbc621fe8e983978",
"Gubera-Vasal/assets/AssetManifest.bin": "631a1c217fdafd4eefa25e4e614043da",
"Gubera-Vasal/assets/AssetManifest.bin.json": "20c7b9a29aa91d0d3dc79fddf40bb5c6",
"Gubera-Vasal/assets/AssetManifest.json": "d709f38684078d20917e226a0fcde246",
"Gubera-Vasal/assets/assets/aerial-bg.jpg": "2d2af73a4d012dddde526bf437ea5dc5",
"Gubera-Vasal/assets/assets/aerial-bg2.jpg": "37dfe8d21d3f9812c0d11eaf3ab41ce7",
"Gubera-Vasal/assets/assets/aerial_bg_desktop.jpg": "27f80979694dd4d0c53fa8d38ea80e42",
"Gubera-Vasal/assets/assets/aerial_bg_mobile.jpg": "14304ab293029a97f1891da7f8c7a527",
"Gubera-Vasal/assets/assets/anim_loader.json": "fb254e1837df8a626eb4b428f0333590",
"Gubera-Vasal/assets/assets/anim_location.json": "8b3e7de2632792287826148c03d79ebf",
"Gubera-Vasal/assets/assets/ic_facebook.png": "ba803196d3b7644ffb2576efd1500b6b",
"Gubera-Vasal/assets/assets/ic_form.jpg": "6ffd10385faa8a4bbc28dd660b11d074",
"Gubera-Vasal/assets/assets/ic_instagram.png": "5c570427ee23f69853d28aec805eee79",
"Gubera-Vasal/assets/assets/ic_next_city.png": "a9c1ffecc8ee5b345e3dd6489a91842a",
"Gubera-Vasal/assets/assets/ic_whatsapp.png": "774352deeaa60ebe04164a1e28489771",
"Gubera-Vasal/assets/assets/ic_youtube.png": "ca6d67e60f758d352745329b283e8f32",
"Gubera-Vasal/assets/assets/images/133.jpg": "3248fb7892f63c04ff8aa29111e0327c",
"Gubera-Vasal/assets/assets/images/134.jpeg": "078fa3bfe704401e92f5c02006718081",
"Gubera-Vasal/assets/assets/images/2071.jpg": "f36d8021ed65653fbceac66ebfeaa4a9",
"Gubera-Vasal/assets/assets/images/coco_bg.jpeg": "d6b719916e9cda2484939766111d16a5",
"Gubera-Vasal/assets/assets/images/coco_thumb.jpeg": "ac9e10b8d48cb75e1fb3ffa0baddceda",
"Gubera-Vasal/assets/assets/images/erode.webp": "2a75db7c16f2bc492abbc0e37ff15e80",
"Gubera-Vasal/assets/assets/images/kovai.webp": "11479c0b4ec7bd0dc39afe24dd7b04f7",
"Gubera-Vasal/assets/assets/images/logo.png": "9a04f1a99edf2b7fe3738c29c0a462a9",
"Gubera-Vasal/assets/assets/images/pollachi.webp": "0098372f09c06d48baf924296fc29807",
"Gubera-Vasal/assets/assets/location.png": "ff0811e13c403f3ffd781296682ae182",
"Gubera-Vasal/assets/assets/phone.png": "512d593c2807579f3815247fc1aca160",
"Gubera-Vasal/assets/assets/real_estate_01.png": "c26137ec28583dcd0b6619ded0962c72",
"Gubera-Vasal/assets/assets/satisfaction.png": "c6f9a525f24cf6373272475c082771ae",
"Gubera-Vasal/assets/assets/user.png": "42c665c2531c24b205652e305c1f1b08",
"Gubera-Vasal/assets/assets/whatsapp.png": "983e9b8bd20f9ee3a91195e705068776",
"Gubera-Vasal/assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"Gubera-Vasal/assets/fonts/MaterialIcons-Regular.otf": "72dbe39058df73d3183d236bebae392f",
"Gubera-Vasal/assets/NOTICES": "e408d488eba26f0feee3bbd83b082770",
"Gubera-Vasal/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "416fbd43af735fe497423f57e2e76f28",
"Gubera-Vasal/assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"Gubera-Vasal/assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"Gubera-Vasal/assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"Gubera-Vasal/assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"Gubera-Vasal/canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"Gubera-Vasal/canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"Gubera-Vasal/canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"Gubera-Vasal/canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"Gubera-Vasal/canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"Gubera-Vasal/canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"Gubera-Vasal/canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"Gubera-Vasal/canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"Gubera-Vasal/canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"Gubera-Vasal/canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"Gubera-Vasal/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"Gubera-Vasal/flutter.js": "f393d3c16b631f36852323de8e583132",
"Gubera-Vasal/flutter_bootstrap.js": "ec5ccb4ab190bdf6f7e29617f19597c9",
"Gubera-Vasal/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"Gubera-Vasal/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"Gubera-Vasal/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"Gubera-Vasal/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"Gubera-Vasal/index.html": "80ad4321f12aeb91e62683fec9e4c695",
"Gubera-Vasal/logo.png": "feda39e439b82adaf1579db67899c5e8",
"Gubera-Vasal/main.dart.js": "521002ec222ef41874e7a757ebafa0bb",
"Gubera-Vasal/manifest.json": "6dcceb06abed02ff259573c01290616a",
"Gubera-Vasal/manifest.zip": "e2dff4c9b3c17e1835da2c0794d9724f",
"Gubera-Vasal/version.json": "2b04f4dd17f41ab45ea8ed44bfea692a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "0cfcf5948f7fdd2110aeaef7e115b714",
"/": "0cfcf5948f7fdd2110aeaef7e115b714",
"logo.png": "feda39e439b82adaf1579db67899c5e8",
"main.dart.js": "7b0aba1d5b04eba82cad38d8dd022b17",
"manifest.json": "6dcceb06abed02ff259573c01290616a",
"manifest.zip": "e2dff4c9b3c17e1835da2c0794d9724f",
"version.json": "2b04f4dd17f41ab45ea8ed44bfea692a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
