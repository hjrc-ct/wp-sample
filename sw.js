// service worker

self.addEventListener('push', () => {
    console.log('service worker registration ...');
    self.register.sendNotification('BPA message', {} );
});

