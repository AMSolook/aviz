'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "8805757c1247883d7b40b1dd26ba5ac2",
"assets/AssetManifest.bin.json": "37750d0c9ed22aaa7dfa6b9f10079872",
"assets/AssetManifest.json": "9b53d68223ea204bdd194695e42ea296",
"assets/assets/fonts/Shabnam-Bold.ttf": "46e5d535fe67587761993f17835e382e",
"assets/assets/fonts/Shabnam-Light.ttf": "9c0f2c8d9b90cd6a61c4f34f657f40c9",
"assets/assets/fonts/Shabnam-Medium.ttf": "94798c76cb13deef9315f622c1541d52",
"assets/assets/fonts/Shabnam-Regular.ttf": "7b18a4a8f65b3f5eac92df3c91fe4400",
"assets/assets/images/add_circle_active_icon.png": "9b90a765e47334dd12edf4eb17907d13",
"assets/assets/images/add_circle_icon.png": "1d49c746bfcea1b5ba2815b122b6dd92",
"assets/assets/images/archive_icon.png": "aaa3fcb2595b15fd76f01217bac40e25",
"assets/assets/images/arrow_left_grey_icon.png": "370901b4b3676864cdbcffb6903b6739",
"assets/assets/images/arrow_left_icon.png": "9c2d038e7e8f5cbae7701379b2873a9f",
"assets/assets/images/arrow_left_red_icon.png": "d90f6106115eaeb26866bd15e6a06aae",
"assets/assets/images/arrow_right_icon.png": "9540528dd7db706dbc064cbdc0368bdb",
"assets/assets/images/aviz_text.png": "a39fd59f288cba37fd6fccc0f96d149f",
"assets/assets/images/aviz_text_logo.png": "4cd49ede8bb434b5eb5d907fb7066044",
"assets/assets/images/call_icon.png": "6354961d93cef5caf05d75c77556d9ec",
"assets/assets/images/camera.png": "7c1adac19d1f4379dcf4ff9dfe134801",
"assets/assets/images/card_icon.png": "601205f30fbbe445ac2f3d3298b51329",
"assets/assets/images/category_icon.png": "dfb2fd5cee6d26a9f5c4a2e07867cb7c",
"assets/assets/images/clipboard_text.png": "727aa79f0675d53be1b1da23dc4036b3",
"assets/assets/images/document_upload.png": "96efc3538955fb6b1274a7ee40567ccc",
"assets/assets/images/edit_icon.png": "a84ac9d16f52c20f29aced0e255b9087",
"assets/assets/images/edit_underline_icon.png": "69683e88cef27b3e53bb66eb593647a0",
"assets/assets/images/eye_icon.png": "d7cca2400daad0e08665871b3095d7b3",
"assets/assets/images/information_icon.png": "5f2192a53ee69e91d945a0b349b42770",
"assets/assets/images/info_circle_icon.png": "4083317df886a986e102c1d9d113fea9",
"assets/assets/images/location_icon.png": "923a7f4540b60ab56216919c376abe4e",
"assets/assets/images/magicpen.png": "cbc312d6cd2279ca69635f7765bfbab3",
"assets/assets/images/map_icon.png": "687cf8b74d4a622cba1e68cd5417bfe1",
"assets/assets/images/message_icon.png": "b6add28d5b19dfd1002e921f86c13d3d",
"assets/assets/images/message_question_icon.png": "ea8679994a52738e78d7fe8d314e48d6",
"assets/assets/images/my_aviz_logo.png": "9320bb80ae389fd1bdc2f4bd835f4a43",
"assets/assets/images/note_icon.png": "6b6f5fdb24986c89c1233ef9a9ce6a95",
"assets/assets/images/options_logo.png": "64c5611c5ff7b15204267aece7d0c3df",
"assets/assets/images/posters_active_icon.png": "e15f76364897cbcc7ecd1b136accf450",
"assets/assets/images/posters_icon.png": "7830d56fc09d076fed5254929d9e5f00",
"assets/assets/images/poster_image_1.png": "a678d76435163f9764bfbd85969fee2c",
"assets/assets/images/poster_image_2.png": "54975d11646ab5c94c6b71600591c2d8",
"assets/assets/images/poster_image_3.png": "62936992419b7b7785f81416e66d4c92",
"assets/assets/images/poster_image_4.png": "7f6f1e761ef0400c3ed6103a126168a1",
"assets/assets/images/profile_circle_active_icon.png": "34160158a0a788cbdad50de4a6167b6b",
"assets/assets/images/profile_circle_icon.png": "f4d0f23fa37a4361f79894554b011a2d",
"assets/assets/images/profile_icon.png": "5085f074eca435bc32a0fef391736ae4",
"assets/assets/images/profile_pictrue.png": "ce0f846d42a5e2b34bb919f7d67fde2f",
"assets/assets/images/red_polygon.png": "50fd5a9d590615d0b152b1f09c9d8a4d",
"assets/assets/images/register_screen_background.png": "af7eebe76e4727d25c85ac7fb1fc9eb7",
"assets/assets/images/register_screen_image.png": "588e04cbfa6919abda5d238b684349a0",
"assets/assets/images/save_icon.png": "fdee16a84ee685e74064dc3a1e01cdc2",
"assets/assets/images/search_active_icon.png": "9d5b6995e4909e90924b4dca5213a6e8",
"assets/assets/images/search_icon.png": "73707fcc3f9db75f3856992061076432",
"assets/assets/images/setting_icon.png": "b68cd64d58ee1a29494865d118b58bfe",
"assets/assets/images/share_icon.png": "cf38e5a36b65c06d87f662d27fc04f20",
"assets/FontManifest.json": "6a2ca5728ff6fcafb9c32b07a3147a51",
"assets/fonts/MaterialIcons-Regular.otf": "90556d9ea4b3dc6adfe77aa505b3d325",
"assets/NOTICES": "7d110a7118bec5c50e140a09ce56e562",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "bbfd078bab3028bf519972987640b132",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "1420ac06c6edd52e4b0b104648674808",
"/": "1420ac06c6edd52e4b0b104648674808",
"main.dart.js": "ed126aa12e43bb80b806ee7ac73a72d1",
"manifest.json": "39293ea50e33058881865db2a5918708",
"version.json": "a281183e3d752e1b5879670d5bce1b11"};
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
