const CACHE='fordham-staff-v1-0-0-20261107';
const PREFIX='fordham-staff-';
const ASSETS=[
'/FordhamDailyTask/staff-app/','/FordhamDailyTask/staff-app/index.html','/FordhamDailyTask/staff-app/tasks.html','/FordhamDailyTask/staff-app/manifest.json','/FordhamDailyTask/staff-app/app.js','/FordhamDailyTask/staff-app/tasks.js','/FordhamDailyTask/staff-app/icons/icon-192.png','/FordhamDailyTask/staff-app/icons/icon-512.png','/FordhamDailyTask/css/style.css',
'/FordhamDailyTask/js/task-category.js','/FordhamDailyTask/js/special-tasks.js','/FordhamDailyTask/js/compliance-ui.js','/FordhamDailyTask/js/hot-food-store.js','/FordhamDailyTask/js/hot-food-engine.js','/FordhamDailyTask/js/hot-food-ui.js','/FordhamDailyTask/js/firebase-config.js','/FordhamDailyTask/js/firebase.js','/FordhamDailyTask/js/auth.js','/FordhamDailyTask/js/fordham-setup.js','/FordhamDailyTask/js/store.js','/FordhamDailyTask/js/ui.js','/FordhamDailyTask/js/final-config.js'
];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS))));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith(PREFIX)&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;const u=new URL(e.request.url),fresh=/\.(?:js|html)$/.test(u.pathname);if(fresh){e.respondWith(fetch(e.request).then(r=>{const c=r.clone();caches.open(CACHE).then(x=>x.put(e.request,c));return r;}).catch(()=>caches.match(e.request)));return;}e.respondWith(caches.match(e.request).then(c=>c||fetch(e.request)));});
self.addEventListener('message',e=>{if(e.data?.type==='SKIP_WAITING')self.skipWaiting();});
self.addEventListener('notificationclick',e=>{e.notification.close();e.waitUntil(clients.openWindow('/FordhamDailyTask/staff-app/'));});
