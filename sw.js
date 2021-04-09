// service worker

self.addEventListener('push', function( e ) {
    console.log('service worker registration ...');
    
    var options = {
        body: 'This notification was generated from a BPA push!',
        icon: 'images/example.png',
        vibrate: [100, 50, 100],
        data : {
            dateOfArrival: Date.now(),
            primaryKey: '2'
        },
        actions : [
            {
                action: 'explore',
                title: 'Explore this new BPA world',
                icon: 'images/checkmark.png'
            },
            { action: 'close', title: 'Close', icon: 'images/xmark.png' }
        ]
    };

    e.waitUntil( self.ServiceWorkerRegistration.showNotification('Hello BPA!', options));

});

