'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "ba1f2511fc30423bdbb183fe33f3dd0f",
".git/config": "5ad105f21370e730855b066948807c31",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "10d36f5384f7738af691ef1d7bf7569f",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "0d1aa7b2cb23bbdd6eeb4430ef3b0f51",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "77a86534118609a91f026985ad09b335",
".git/logs/refs/heads/main": "77a86534118609a91f026985ad09b335",
".git/logs/refs/remotes/origin/HEAD": "5780a990b8f183ed0bf3e364e33c6091",
".git/logs/refs/remotes/origin/main": "236ca6935447899f5cf9437e72d03b33",
".git/objects/03/e6233cfd1262b60c757ba8ea77d93532b8937c": "6f4ca69db7140cc086591ccdda3bb04a",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/06/3176ddfaddb54a2739f022a7707a0c212f369c": "02157bd0ca4fa2da02d052d17fa22098",
".git/objects/07/a39fc2f242a6911398caa524c32efae7810a23": "588d17c855bba66ca00fa2e342c7bbfd",
".git/objects/0a/4ea22b01e269a95ed46a7917e9be515392eeab": "c859ddcf539c69dad044984db05b711a",
".git/objects/0b/7624b2374f890caa474293abd899a47ba48687": "1163f7b79cbb841ecfa8e68b2f9fe622",
".git/objects/0e/f299bf1e8141943df11c6b7625055cb9f89525": "1679fc8cc3a1863c7c2ba6941a5a410d",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/12/d1b7b0960700a81f4aad958a52f256d5dd7809": "533001aa46f2349af7400cfb793ad653",
".git/objects/1b/e592f32059337e4683cee4dfb8922705ffdced": "a5066bdce8c94eb0ff65e71e848c9103",
".git/objects/20/314b05ae84afa29be2ae0bf6963093eb2e1de5": "e2ed61a4db629aa71cba81358fe40ed9",
".git/objects/24/ac51907faf3a6c9aa2b83594c827a14ca83015": "71851cff17c919a604a0e32ec56642d6",
".git/objects/26/a8015529d0c18ebd93d8e1d782408ebed081de": "8517be2c6a3db82f81178b08797c5b7e",
".git/objects/27/8826135c2f55ccfd39657c814dfc2d55b73715": "e3c3c40c416668c49d2b2afaec9df82b",
".git/objects/2e/eb55fac11088fbbe7a91c568cd8cf62a2a95a9": "0d6c2d2720cd8e4eaaa8778872563933",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/39/4cc23bc71e761e838c3dcaf0af2c58e03e621f": "78ab30caf3851835777f8832120bb315",
".git/objects/3a/eb4bbb6740fc1c1bcf838cb87ad317f1005691": "ff1860c06645f0b72a4a225479c26cfb",
".git/objects/3e/c5c5201531fa72a2d47264ec23a45c61c6e3d0": "e6f181db5e299a0d17c7e7b2d9554fdc",
".git/objects/3f/212adbdcbe2071328aa6af396d554ad3340305": "99bd107892694b1bed5dde16ed8b9a5e",
".git/objects/3f/a923e070698d361053af683c8643ec0924d26f": "2343a8a9263fba924ff477e071e78888",
".git/objects/41/1d0f0f08be96ae2426c79392c6f1da9d845a03": "c3363ec350fa75817b78a6bb178a4d8b",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/45/ce431d554a6cd0785c8ee8f0edec98e3dec636": "0a0059325dbe6bcfdd86555b7067bac6",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/f02a0dd984c4cb38a1402ff03276cc1948c4f4": "54bf2d1e48101b1e93a3f5c6c82fb9e3",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/51/0cf86b0403ccd12d3dba68de04809b7213393a": "dbcb7cb63397a5ea0140a1e351ccca5e",
".git/objects/54/754949c2e8c5a88a6d5cd636d32da99c8d9e36": "b34bec01cf5408b5f420221e351e342e",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/57/2f122164ffa4a09fdcdb36f421e1e7da59c099": "a8c902896bfe21c1a36eb2d5c2a1aa40",
".git/objects/5f/114b6aa84fcc4e5c7d5bfda7757560047f244b": "2a597edce33889b7d2fb33cf28f1ce7d",
".git/objects/61/a3026729fd9194e07b5bd42c63139b042e6eed": "836b4503612e2c948fdc35cb0bb0c499",
".git/objects/64/3fa6c994c3eb2eb555e1a384d8b6b31a5e07c4": "e4abf00a69e1ee20e083431ed88fc04b",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/6b/d7b38668dee781080d907c1072617af2dc7df2": "36eee1b2a4d79acc7e5875b849467e69",
".git/objects/6f/3963c5ea521d8e315343b7155eb2497984396f": "16b2b7c8efd9c653c6fc2a7e5faebb33",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/75/00d53eb65551d64e1d941af032070c8a84fae3": "cb721481e5c5db024829b978792aff1c",
".git/objects/77/05afbc329e4f861eafdb5343fc6e93aff6ce3d": "83156fd565861aec9110ba6b8edae8a0",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7e/ab49aba0eec4bd93b7534f9ee74a33a15ca6e1": "59461d48020ee1def0a86e60faff0152",
".git/objects/81/26722bcca37d6b7a3d185eac678fe0003e38e8": "e1e4ed7bf36b349424dc1a0f4def259f",
".git/objects/83/a33c2a21983fea83334afd9550aa85f44ce369": "b19bf37d55c509a81e00322a43ce559b",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/96/a5c56a4c4e1b9128bf7ab7955f37a61237a358": "80cc3e2d97c94ece91775ec3eb313979",
".git/objects/9b/ac2bd3cd92a1eb1803a200fb8bf34f00a23419": "a78e31c3a44330865a22fe74a43a0397",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/7d5d2535c7e822784fa671719c4f17c88df12e": "86a0efe3eb9ae60f6a24053208935e65",
".git/objects/aa/0a1f5e0ee0027eab53fca90ae531580834084e": "2716f9b1262d62033ce19a6257d30c17",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "25802b31f0bee36b4e1a7a67835f99f0",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b6/3ed08e06cfacb6a3f547f5357ddda3c2df60d7": "9271ccca84413d6f23aaabdab15d0d14",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c1/7b5d15a37c8d29ce69b2f5d4d3754b94388e7e": "d9d52c0fcf9c30f5f693aca88b938e0a",
".git/objects/c2/9886718da68d9f534e479f302dd3a8f5ffd688": "5864013e43195d63dfe0635e7fc842f8",
".git/objects/cb/67f00556617661fa0d1dee15b00999fc8bc2f5": "0f1ea3889544ea14b5b046ba025285ae",
".git/objects/cb/fd5271350cdd13e5a57399840f2755ff43feae": "b8bcecef5f37b8c2498aed7acbfc87e4",
".git/objects/cc/893ca48c83e6d94c84a02c029c807935cc7279": "1e410bd0af68d8db0b6e9f131ef35e3e",
".git/objects/d0/18914eb9dfa6ccd0bdc4e723e3c755286ce353": "ab204d67de265568d5d5e8316a6294a6",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/fcc1a5f9cf184568e288ebd3a23994277b8b11": "a8d736e8c86a48fb4d5eb94d2b35ce3c",
".git/objects/d7/ed4096f3d7eedf05dc9c1eebeeb7dbea5749b7": "6eb551ca9e631bba5ab6faa8d2a88f0b",
".git/objects/d9/919b53a8c75ea9c46294843260a9b418e6224f": "fb1b21a625448fd295f4ac0e7d4f2380",
".git/objects/df/e0770424b2a19faf507a501ebfc23be8f54e7b": "76f8baefc49c326b504db7bf751c967d",
".git/objects/e4/88c64b3a12370929413a4f95e735c2442c4b3a": "1449980cddddfbb551517964f6f2fbe9",
".git/objects/e5/46d4756892b316ca49f406c7da1865bb633611": "e06dcb456b70a99a809943933daf510c",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e9/ace064b4a5ed265987d574b62690c44d268dc8": "c6ae7268f152ad199c67d5431bf0b42a",
".git/objects/ea/fd42f644932329bf8ac3493477de2acdf48ba3": "98d5dc283f6633932009b18ac126963f",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/52b39c24c81a2f7ad30999fc5188d3e07f5871": "bee1066d71f6a1356e89a59f488303c6",
".git/objects/f1/6fb5614cca834b37160d395e90337f0f98d383": "8605f1a77c65e1a0a6b894399076cbc5",
".git/objects/f1/b0485d1ef39edfa63b11b6012962a3aef9f70d": "895bcaef7f7d43c41bfee896a4f3c6d5",
".git/objects/f5/2bef044369ec882523ecc0731de5d1d22711eb": "5a18c0892324d97dc1898d6e54f6d0c3",
".git/objects/fb/3941153ea05f9883260dd88011e3725b15cb79": "894e51e64f60aef245ad65d73a90594a",
".git/refs/heads/main": "5a47a9beb202f93d526a739740c99395",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "5a47a9beb202f93d526a739740c99395",
"assets/AssetManifest.json": "a62a98877468db2304b64cc0f035748b",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/lib/AddingFormula.xlsx": "a6bcc3b7519e8b6fb8aec270a096b081",
"assets/lib/data.csv": "fa75bf69c9e32c7ec4a707608f78fe9d",
"assets/lib/json.json": "9538ecf8e6fc61ad8f58d55c5c664c25",
"assets/NOTICES": "ec8731fa4113b7229d77f3fc90fed059",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "a1661cb207ee7e4b5fa3ea435cc0d4e1",
"/": "a1661cb207ee7e4b5fa3ea435cc0d4e1",
"main.dart.js": "64a5eb211ddc30a9e7318e52cc850d67",
"manifest.json": "958af24bdc4a109d284c10a6e55cebc1",
"version.json": "66731af74b557e45fd605c5cbaf75a1d"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
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
