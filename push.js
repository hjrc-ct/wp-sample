var push = require('web-push')

let vapidKeys = 
        //push.generateVAPIDKeys();
        {
            publicKey: 'BBlw0TujfU6PVbweYIULgv5nLRcwOhvgM5fjdzeLWEXqjHsKvshTk10Q7VFsS9G29y-dovhm5bwz3Vwh5k0tRNI',
            privateKey: 'secret' 
        };

//console.log("VAPID keys for BPA -> ", vapidKeys)


push.setVapidDetails('mailto:security@ct.com', 
                        vapidKeys.publicKey, vapidKeys.privateKey);

let sub = 
{
    "endpoint":"https://fcm.googleapis.com/fcm/send/cLVdJ4vT410:APA91bGBS1HF_hpBdFDY2kh7UvB_NYzRvJQvDpobF3q_aPjUMaNdsOlT2IV3ApfewgLQSlFRfA_d1RRXf8p4g0x8I8goxzEz5Qinrlh2XUTYjO7ZUdGzrv794nvoV-rOK-lAdmhYPZz8",
    "expirationTime":null,
    
    "keys":{
        "p256dh":"BNUaOX3IzIY84BD8ebtwSJHRkHxwMzKH9Nt7Ha8m1vfcwqvif5gydd8v3t_M_qe80vfbUGFkFCpu8fKv0faL9dI",
        "auth":"uaypOjuqVoX2GXaJ0EwIww"
    }
};

push.sendNotification(sub, 'BPA Message One');

