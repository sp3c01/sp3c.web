self.addEventListener('push', function(event) {
    const options = {
        body: event.data.text(),
        icon: 'icon.png', 
        vibrate: [200, 100, 200] 
    };

    event.waitUntil(
        self.registration.showNotification('كلمة المرور', options)
    );
});