const CACHE='fordham-general-v1-0-3-20261107';
const CACHE_PREFIX='fordham-general-';
const ASSETS=[
  '/FordhamDailyTask/',
  '/FordhamDailyTask/index.html',
  '/FordhamDailyTask/login.html',
  '/FordhamDailyTask/staff.html',
  '/FordhamDailyTask/manager.html',
  '/FordhamDailyTask/css/style.css',
  '/FordhamDailyTask/js/firebase-config.js',
  '/FordhamDailyTask/js/firebase.js',
  '/FordhamDailyTask/js/auth.js',
  '/FordhamDailyTask/js/store.js',
  '/FordhamDailyTask/js/ui.js',
  '/FordhamDailyTask/js/general.js',
  '/FordhamDailyTask/js/task-category.js',
  '/FordhamDailyTask/js/staff.js',
  '/FordhamDailyTask/js/manager.js',
  '/FordhamDailyTask/js/weekly-workspace.js',
  '/FordhamDailyTask/js/reports.js',
  '/FordhamDailyTask/js/hot-food-store.js',
  '/FordhamDailyTask/js/hot-food-manager.js',
  '/FordhamDailyTask/js/hot-food-engine.js',
  '/FordhamDailyTask/js/hot-food-ui.js',
  '/FordhamDailyTask/js/login.js',
  '/FordhamDailyTask/js/final-config.js',
  '/FordhamDailyTask/js/fordham-setup.js',
  '/FordhamDailyTask/js/special-tasks.js',
  '/FordhamDailyTask/js/special-manager.js',
  '/FordhamDailyTask/js/compliance-ui.js',
  '/FordhamDailyTask/manifest.json',
  '/FordhamDailyTask/icons/general-192.png',
  '/FordhamDailyTask/icons/general-512.png'
];

self.addEventListener('install',event=>{
  event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(ASSETS)));
});

self.addEventListener('activate',event=>{
  event.waitUntil(
    caches.keys()
      .then(keys=>Promise.all(keys.filter(key=>key.startsWith(CACHE_PREFIX)&&key!==CACHE).map(key=>caches.delete(key))))
      .then(()=>self.clients.claim())
  );
});

self.addEventListener('fetch',event=>{
  if(event.request.method!=='GET') return;
  const url=new URL(event.request.url);
  // Never handle other sites (Firebase/Firestore, Google fonts, SDK files). Firestore keeps
  // long-running requests open; if this worker handled them, a new app version could not
  // take over until they finished, leaving the update prompt stuck.
  if(url.origin!==self.location.origin) return;
  const fresh=/\.(?:js|html|css)$/.test(url.pathname)||url.pathname.endsWith('/FordhamDailyTask/');
  if(fresh){event.respondWith(fetch(event.request).then(r=>{const c=r.clone();caches.open(CACHE).then(x=>x.put(event.request,c));return r;}).catch(()=>caches.match(event.request)));return;}
  event.respondWith(caches.match(event.request).then(cached=>cached||fetch(event.request)));
});

self.addEventListener('message',event=>{
  if(event.data?.type==='SKIP_WAITING') self.skipWaiting();
});

self.addEventListener('notificationclick',event=>{
  event.notification.close();
  event.waitUntil(
    clients.matchAll({type:'window',includeUncontrolled:true}).then(windowClients=>{
      for(const client of windowClients){
        if(client.url.includes('/FordhamDailyTask/') && 'focus' in client) return client.focus();
      }
      if(clients.openWindow) return clients.openWindow('/FordhamDailyTask/');
    })
  );
});
