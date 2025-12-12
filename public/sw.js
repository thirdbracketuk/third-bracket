// This file is intentionally empty to prevent 404 errors
// It appears something is trying to register a service worker
// but we're not explicitly using one in this project
self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', () => {
  self.clients.claim();
});

// No fetch handler to avoid interfering with normal requests