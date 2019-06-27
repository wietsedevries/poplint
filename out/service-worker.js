self.__precacheManifest = [
  {
    "url": "/_next/static/chunks/commons.c8ba4f5c80611d6d9375.js",
    "revision": "5295c733341a251fe089"
  },
  {
    "url": "/_next/static/runtime/main-2f35adbac3668ab071ba.js",
    "revision": "a3274e24c127936be59e"
  },
  {
    "url": "/_next/static/runtime/webpack-a79426b5e11f0ba5879d.js",
    "revision": "d284d55719907d9579fa"
  },
  {
    "url": "/_next/static/wYWbXHKudfyOvEbekAJ-y/pages/_app.js",
    "revision": "38e3e41b5ed46e52b264"
  },
  {
    "url": "/_next/static/wYWbXHKudfyOvEbekAJ-y/pages/_error.js",
    "revision": "af500c63c3d73c813677"
  },
  {
    "url": "/_next/static/wYWbXHKudfyOvEbekAJ-y/pages/index.js",
    "revision": "3a7bf468bd7902390f7f"
  },
  {
    "url": "/_next/static/wYWbXHKudfyOvEbekAJ-y/pages/ranking.js",
    "revision": "78fb216b6ec9bbfd9aea"
  },
  {
    "url": "/_next/static/wYWbXHKudfyOvEbekAJ-y/pages/semi-vs-no-semi.js",
    "revision": "d7869c80f1e2b8434765"
  },
  {
    "url": "/_next/static/wYWbXHKudfyOvEbekAJ-y/pages/style-guides.js",
    "revision": "ee43cbe93ac904bfe302"
  },
  {
    "url": "/_next/static/wYWbXHKudfyOvEbekAJ-y/pages/tabs-vs-spaces.js",
    "revision": "8c9087bc7740ebe30e35"
  }
];

/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

importScripts(
  
);

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "static/android-chrome-192x192.png",
    "revision": "639b40a6fd4c5727ba6e8ccad2296260"
  },
  {
    "url": "static/android-chrome-256x256.png",
    "revision": "18ddeb59bfb85197524628dae483c05f"
  },
  {
    "url": "static/apple-touch-icon.png",
    "revision": "3055e26c77cd9168718213538b66d780"
  },
  {
    "url": "static/bg-pattern.png",
    "revision": "2eef06745d5baa9d5150df3aae159714"
  },
  {
    "url": "static/browserconfig.xml",
    "revision": "b916cbcb7e9968031d5b2bfede9d8a6a"
  },
  {
    "url": "static/favicon-16x16.png",
    "revision": "b7d6b13852c4c3703e342b930c7043b4"
  },
  {
    "url": "static/favicon-32x32.png",
    "revision": "5ef3607ec86af494c6e2575feed04baa"
  },
  {
    "url": "static/favicon.ico",
    "revision": "75d5d5e155cde60872e6e30ac177d731"
  },
  {
    "url": "static/guides.png",
    "revision": "9d2d61a1ea8ffc0c0a9f3c824e95b751"
  },
  {
    "url": "static/mstile-150x150.png",
    "revision": "7b5c35d44dfa069249b0f3a441eb1a29"
  },
  {
    "url": "static/poplint.svg",
    "revision": "ac8b5631b6a4df8014108abbcb893cec"
  },
  {
    "url": "static/safari-pinned-tab.svg",
    "revision": "d2db5c40d3bf5263c94ae8806a1fc706"
  },
  {
    "url": "static/site.webmanifest",
    "revision": "f30244fab5dff90a312d4ac59d896f17"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^https?.*/, new workbox.strategies.NetworkFirst({ "cacheName":"offlineCache", plugins: [new workbox.expiration.Plugin({ maxEntries: 200, purgeOnQuotaError: false })] }), 'GET');
