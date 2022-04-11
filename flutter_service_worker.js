'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "dd78d7141eaba21d3eaf7e94880939d8",
"assets/assets/fonts/NotoSans/NotoColorEmoji.ttf": "e0e141083ec8960372e6fa96940d0721",
"assets/assets/fonts/NotoSans/NotoSans-Bold.ttf": "98f0cacc6bb63b64b98aac7cac082d27",
"assets/assets/fonts/NotoSans/NotoSans-BoldItalic.ttf": "a1375023bb3f9d55dfc6d58685cd6e69",
"assets/assets/fonts/NotoSans/NotoSans-Italic.ttf": "afe1714f485b424f221147e1be6cf8ad",
"assets/assets/fonts/NotoSans/NotoSans-Regular.ttf": "5a87cce84010f7cea085ae218d44a64b",
"assets/assets/fonts/NotoSans/NotoSansSymbols-Regular.ttf": "5f2aef3fe5844e11017fc1d1bd811a32",
"assets/assets/fonts/Nunito/Nunito-Black.ttf": "529509f5501c7f45315210d280a456d4",
"assets/assets/fonts/Nunito/Nunito-Bold.ttf": "c0844c990ecaaeb9f124758d38df4f3f",
"assets/assets/fonts/Nunito/Nunito-ExtraBold.ttf": "438598eadc302471a495b3133620f621",
"assets/assets/fonts/Nunito/Nunito-ExtraLight.ttf": "4470502486a612e2bf6f38d5bff77ce8",
"assets/assets/fonts/Nunito/Nunito-italic.ttf": "380d3172fab0055a8d74ab12636f5a9b",
"assets/assets/fonts/Nunito/Nunito-Light.ttf": "08bc5f85e4505782d3fa279944f2feab",
"assets/assets/fonts/Nunito/Nunito-Regular.ttf": "d8de52e6c5df1a987ef6b9126a70cfcc",
"assets/assets/fonts/Nunito/Nunito-SemiBold.ttf": "876701bc4fbf6166f07f152691b15159",
"assets/assets/images/ButtonIcon/intelyArc%2520Logo%2520Icon%25201%25202.svg": "84ac70ec464eb08fe24fad316cbb4833",
"assets/assets/images/ButtonIcon/intelyChat%2520Icon%25201%25202.svg": "c1e2f2f601d6165f00e41dbdccd43302",
"assets/assets/images/ButtonIcon/intelyConnect%2520Icon%25201%25202.svg": "b43438a40a8a356d916cbec3cfb371c8",
"assets/assets/images/ButtonIcon/intelyDx%2520Icon%25201%25202.svg": "4b8aeeeed787f6ae906ae6f141a0421c",
"assets/assets/images/ButtonIcon/intelyFi%2520Icon%25201%25202.svg": "8d94535c40831127cd46be45e77f3668",
"assets/assets/images/ButtonIcon/intelyMatch%2520Icon%25201%25202.svg": "ff7ad838f66796516a74e6fbeb25a450",
"assets/assets/images/ButtonIcon/intelyNote%2520Icon%25201%25202.svg": "26fd6e53f0ecb42954dae4439de8aa87",
"assets/assets/images/ButtonIcon/intelyPay%2520Icon%25201%25202.svg": "3f228162dd05cf9cbd2b7667c732b2e1",
"assets/assets/images/ButtonIcon/intelyReg%2520Icon%25201%25202.svg": "dee8ee55c9055f7d80d69c98affcbcac",
"assets/assets/images/ButtonIcon/intelyRx%2520Icon%25201%25202.svg": "3c8253d4dd9aa80309c0318924e4569f",
"assets/assets/images/ButtonIcon/intelySched%2520Icon%25201%25202.svg": "85a0e4e465ad012905f802ed7d3b2a8c",
"assets/assets/images/Icon/intelyArc.svg": "5d96aa824533354e6578ff2923b0f46a",
"assets/assets/images/Icon/intelyChat.svg": "c5c5c990f94823d37e9210d3717979fb",
"assets/assets/images/Icon/intelyConnect.svg": "4cdc55cc18ca9b1f707dec626d1c765a",
"assets/assets/images/Icon/intelyDx.svg": "d4ada01eac0244ac56c10ac08cc2dd73",
"assets/assets/images/Icon/intelyFi.svg": "aeac02ac3517bc907fa416fd0af0f428",
"assets/assets/images/Icon/intelyMatch.svg": "47a6c717eb17e24c4d45757f725ae624",
"assets/assets/images/Icon/intelyNote.svg": "c37dae64eaa56cfdc881a8a1897cb5e0",
"assets/assets/images/Icon/intelyPay.svg": "51f2883eae6b2b4fc02c1b35855df56a",
"assets/assets/images/Icon/intelyReg.svg": "641f446e4dc3e74721541f8469404ecd",
"assets/assets/images/Icon/intelyRx.svg": "71100f99de62a76adec1a2f19f8ccf28",
"assets/assets/images/Icon/intelySched.svg": "689f1ae5e41d03f703b2da6b5c582c86",
"assets/assets/images/login/background.png": "f9707f511eedf452f77b002bb8612fba",
"assets/assets/images/login/facebook.png": "0c2176b70feb14fee7696149bba992b5",
"assets/assets/images/login/google.png": "a6c3fab8f2e386a05d1fc04ca4eba7bb",
"assets/assets/images/login/header_logo.svg": "3173245e392babb3610a82b7e4a18631",
"assets/assets/images/login/header_name.svg": "12a3a63e5daacb06bfc8e17dd49c4590",
"assets/assets/images/login/linkedin.png": "36fa168ef849853afdb8ca682db28232",
"assets/assets/images/Menu/intelyArc%2520Icon%25201%25201.svg": "7ab532f1a9509d01f3d0ff0ebf6a8f22",
"assets/assets/images/Menu/intelyChat%2520Icon%25201%25201.svg": "8ce9dfff2068eea2e240a8a6678538ab",
"assets/assets/images/Menu/intelyConnect%2520Icon%25201%25201.svg": "0c952397ccf7a34a2499de587719d6ae",
"assets/assets/images/Menu/intelyDx%2520Icon%25201%25201.svg": "1b85ada2f66adca994f14672bbbc945d",
"assets/assets/images/Menu/intelyFi%2520Icon%25201%25201.svg": "95f1ce88e99a2746e3055d208801a9b1",
"assets/assets/images/Menu/intelyMatch%2520Icon%25201%25201.svg": "a275873848476d46599e158b875872ef",
"assets/assets/images/Menu/intelyNote%2520Icon%25201%25201.svg": "d1e8d07d842e35cbcdcc79472a18e7a6",
"assets/assets/images/Menu/intelyPay%2520Icon%25201%25201.svg": "c057570ab50c029dd5c09928ca8b4339",
"assets/assets/images/Menu/intelyReg%2520Icon%25201%25201.svg": "0479fcaebe758594ffcbfe555ab3d570",
"assets/assets/images/Menu/intelyRx%2520Icon%25201%25201.svg": "de37c797a3f9263bc4acbbc68d82e3ef",
"assets/assets/images/Menu/intelySched%2520Icon%25201%25201.svg": "4e6f22407b778b79087723e68d7943df",
"assets/assets/images/others/anatomy.png": "0277ba22c9ae11c12146f01661df019d",
"assets/assets/images/others/anatomy.svg": "e38d095ea6d597c0c3fc5bd1cf213df1",
"assets/assets/images/others/anatomy_head.svg": "e016d7e79e7e5e919af9ec4e62c0c662",
"assets/assets/images/others/anatomy_highlight_body.png": "6ddd7dbf83bc359ecf571f0c4190365e",
"assets/assets/images/others/anatomy_highlight_head.png": "2fcd0407c31efb8e189fd1ceade4eaf1",
"assets/assets/images/others/anatomy_highlight_left_arm.png": "8ea4779a45b5a107de96b9ea7ebab842",
"assets/assets/images/others/anatomy_highlight_left_leg.png": "3fb818516f05816787a25951f60be718",
"assets/assets/images/others/anatomy_highlight_right_arm.png": "1e826fd32f073348a36bbb75dcc1ee42",
"assets/assets/images/others/anatomy_highlight_right_leg.png": "90b0190bb73a667b2b5ad7deaf340ad0",
"assets/assets/images/others/applogo.png": "247ebf1e238b7fd6e405011f969db36f",
"assets/assets/images/others/applogo2.png": "b6de80233a2bac029f03c021e76ae6d6",
"assets/assets/images/others/applogo_white.svg": "4326c6ac7c08ffb67ce7832feb50e202",
"assets/assets/images/others/Bell.png": "0bc2c3b0f3792020d7c3087ae483a693",
"assets/assets/images/others/bell.svg": "8671f2c2fa530c1815c488896ccc1dba",
"assets/assets/images/others/body.png": "f97af2c0dfd0a594f71de37901e0086d",
"assets/assets/images/others/calendar.svg": "9f73137e4137b404570693e33efd1706",
"assets/assets/images/others/calendar_icon.svg": "36fe94a3d5f93998bc1fb0ad24cb42a5",
"assets/assets/images/others/Call.svg": "8112a9367e122145628f2bb0d8ae8185",
"assets/assets/images/others/call_call_icon.svg": "0e38ebaaa2edf01ab59663e567552fc3",
"assets/assets/images/others/call_mic_icon.svg": "632c6d2f8ed5c5d7876c6df698198e95",
"assets/assets/images/others/call_video_icon.svg": "a163e75097b9ece16f2a601a0d98f154",
"assets/assets/images/others/Chat.svg": "67ec43194768c4cae9d837fadffdba2b",
"assets/assets/images/others/Chat2.svg": "6a0427b36d0417d1672b94aeac02c6fa",
"assets/assets/images/others/comments.svg": "b3dfadedfeac23a8fa47a173f59c97c7",
"assets/assets/images/others/cross_out_icon.svg": "708c6a6dcbd4af75986b5d855f091716",
"assets/assets/images/others/decline_call_icon.svg": "e2ae47d59039290f52944b9e7233438e",
"assets/assets/images/others/doctor_image.png": "73ab0be65193c9159f419d6f2e52e157",
"assets/assets/images/others/dr.svg": "bec0bca806b2e95e969a941f8bf70590",
"assets/assets/images/others/Ellipse%252024.svg": "5a1f2f21a60d76f4f2565224ae2c5296",
"assets/assets/images/others/head.png": "6773334efc97c5a4745b7f4cc96487a2",
"assets/assets/images/others/head_click.png": "0902280ae641223ed6bec16f435336d2",
"assets/assets/images/others/Home.png": "e0ef3c2112fd87de9c903161fc22b019",
"assets/assets/images/others/home.svg": "1fe16a4f88a9df27e1b52db1a11e03bd",
"assets/assets/images/others/icon3.svg": "87b6a878c6077a492fe354ee09ee4727",
"assets/assets/images/others/Icons.svg": "6654c0da0e3d4cab7d2a62eff01c481a",
"assets/assets/images/others/image_icon.svg": "f9b32525c922ac5577670ccd415e2848",
"assets/assets/images/others/injury_point.png": "67c7d7ea002314812a14aec3c55a3fd2",
"assets/assets/images/others/IntelyHealth1.svg": "972000f27f91b9c803d5ccba472ce032",
"assets/assets/images/others/IntelyHealth2.png": "1fafccc2b89934e90e1e6b18abbf8533",
"assets/assets/images/others/intelyhealth_logo.png": "fd5b53609c46d183a869d6cee1932c5d",
"assets/assets/images/others/intelylogo.svg": "0bcbbf1b45c12db3cd99e7565cdd2dea",
"assets/assets/images/others/intelytext.svg": "b58e53eb4020816e7f409a917723869f",
"assets/assets/images/others/intelytext2.png": "9e5a6ce30e030fdd36c56d3ebfaf84b2",
"assets/assets/images/others/left_arm.png": "2a285c72eb7a879220261e06132d0cf1",
"assets/assets/images/others/left_leg.png": "dd6d8bc4426b32772cc24cbcbeefcdd9",
"assets/assets/images/others/login_image.PNG": "ab052fe32eae7e541e05725d5406e829",
"assets/assets/images/others/logo%25204.svg": "11810476375b98c6011c35c1928452b4",
"assets/assets/images/others/logo1.png": "f73fa69e61de58c0e4e953b0f4091ebe",
"assets/assets/images/others/logo2.png": "df98f136bccd2b4e695abb241702b263",
"assets/assets/images/others/logo2.png.svg": "2421b76b8018a9e309dda425888d48ae",
"assets/assets/images/others/logo3.svg": "1f3a449d67f02ae69ead5b692813d9fd",
"assets/assets/images/others/logo5.png": "8d3ea3b18c722be65795dccafa9511fc",
"assets/assets/images/others/logos.png": "a5d64b9e998afc4b86ae456509d61fd9",
"assets/assets/images/others/logos2.png": "e3ed8705beb60947535c9a9d42056f13",
"assets/assets/images/others/main_intely_icons/intely_arc_icon.svg": "9ffef9b7fa6c93efcab3460f04fdae5d",
"assets/assets/images/others/main_intely_icons/intely_chat_icon.svg": "ff4f898d77caeb91ad983b6d0f1808fc",
"assets/assets/images/others/main_intely_icons/intely_connect_icon.svg": "754139edfec25dabe56343bd07bbbdd3",
"assets/assets/images/others/main_intely_icons/intely_dx_icon.svg": "af456ac29a3a0160c1fde07ca85eb3f2",
"assets/assets/images/others/main_intely_icons/intely_fi_icon.svg": "d8755b931c9f1eccd62d9ff366784150",
"assets/assets/images/others/main_intely_icons/intely_match_icon.svg": "8a22386255670fdc0929ba47feb2ce6f",
"assets/assets/images/others/main_intely_icons/intely_note_icon.svg": "d400bb66c35daf6a40658cd44c2a63f4",
"assets/assets/images/others/main_intely_icons/intely_pay_icon.svg": "95b0749077c0e233863060ea2fbe9562",
"assets/assets/images/others/main_intely_icons/intely_reg_icon.svg": "1aa69865c80a85f1a74188945c683392",
"assets/assets/images/others/main_intely_icons/intely_rx_icon.svg": "826ed923f4d789c5eddf87de9e958621",
"assets/assets/images/others/main_intely_icons/intely_sched_icon.svg": "7f4c6dd4a4bd7475fdaa0452e1a78309",
"assets/assets/images/others/map.svg": "ac2cee4dbe43ef804014eeaa88463768",
"assets/assets/images/others/menu_icon.svg": "68d63569898ae52ba8625f960be90ac3",
"assets/assets/images/others/month.svg": "d325746c3b9e86522da96c193967178e",
"assets/assets/images/others/more_info_double_arrow_right.svg": "71537855271464445625ea891980e927",
"assets/assets/images/others/neck_click.png": "36f1ad4faaae10763d603a696e6f0b8f",
"assets/assets/images/others/placeholder.png": "bff0f028daeedc2e9efa5436da249807",
"assets/assets/images/others/Profile.svg": "9cef80fe37976c9728abc0b01afa972d",
"assets/assets/images/others/profile_violet.svg": "23d4dad551f0873d2feb2779ac4c83d9",
"assets/assets/images/others/resource.svg": "4189a19e0bbec61dfab7e6abe569ea28",
"assets/assets/images/others/right_arm.png": "4bdad5d2f55c55df5e2e8dca901de060",
"assets/assets/images/others/right_arm_click.png": "4023fd60b91294e5f4ecfd3a30fee104",
"assets/assets/images/others/right_leg.png": "7dee39d5142f1427c35442db59feeb5f",
"assets/assets/images/others/send.svg": "d7dbeacb830093f3c94a712862fad2ea",
"assets/assets/images/others/smily_icon.svg": "71011a7a39bf2fb54e78e40f49d5d761",
"assets/assets/images/others/sort-desc.svg": "2bf51524c73f0ad6daad3afdfe266487",
"assets/assets/images/others/time.svg": "042434b1b6320d7569c5c0d681c08c24",
"assets/assets/images/others/Union.png": "2f48e5efa307c906e9ed4c64ef2c4a1f",
"assets/assets/images/others/Union.svg": "06e98cc967d4dba272ff3d7a9bac87c6",
"assets/assets/images/others/user-plus.svg": "cd5e27de4c438625321d118cca0ecc58",
"assets/assets/images/others/user.png": "e151215425810decc2eb5116b51e6835",
"assets/assets/images/others/Video.svg": "d65be8212802ef3c5dc9529460056b3b",
"assets/assets/images/others/video_icon.svg": "a114868f1c833ab5b8a6359c40df4dcd",
"assets/assets/images/others/weblogo.png": "10673ed0c64443fa47cafdc7581f218a",
"assets/assets/images/others/week.svg": "8970f916539529f2db8946b10f1ce7f5",
"assets/FontManifest.json": "2233c37d28bb288977cefd358b57bddd",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/NOTICES": "8099171aa839acc7246cfbf1a8c05d0d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b37ae0f14cbc958316fac4635383b6e8",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5178af1d278432bec8fc830d50996d6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "aa1ec80f1b30a51d64c72f669c1326a7",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "43a59b1f0dc31b668eed67a42024b5ba",
"/": "43a59b1f0dc31b668eed67a42024b5ba",
"main.dart.js": "5e5c6f96cf9346f926dac3ca2315e752",
"manifest.json": "f1349d8ca67c527fb0d86c50206a990e",
"splash/img/dark-1x.png": "5f0a1ca4eb83faf238954e329308a418",
"splash/img/dark-2x.png": "319dd81750a47f190acfdaedb5af5649",
"splash/img/dark-3x.png": "c8f0dadc4003c2ba2806d50d93a2a427",
"splash/img/dark-4x.png": "c0385440bf37a868426227bc53de3f90",
"splash/img/light-1x.png": "5f0a1ca4eb83faf238954e329308a418",
"splash/img/light-2x.png": "319dd81750a47f190acfdaedb5af5649",
"splash/img/light-3x.png": "c8f0dadc4003c2ba2806d50d93a2a427",
"splash/img/light-4x.png": "c0385440bf37a868426227bc53de3f90",
"splash/style.css": "183d42635645b43f19666e30ccd0cf43",
"version.json": "6a94f0952750025774c2b33ea834afb7"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
