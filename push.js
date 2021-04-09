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
    "endpoint":"https://fcm.googleapis.com/fcm/send/d6EhN9o_ykY:APA91bHuZnseIjK8N_6LBNFF3J_Lgh3wGrgiyy19Ydy49bwQpN9SqjBdbJ00xQ8NIgp7sZop1qIc-pJc27JMOhtgJoekkQJ344afgjNAP9YBbc2WmZdLvh1UGcLU2HOyo8rNJ1c0fkRs",
    "expirationTime":null,
    "keys":{
        "p256dh":"BMuo1ocprsO8cvdl3fc_Pt2yd7cUptBNdSoL-8_FLC6qBcDpd05kVCygM3scjWdXYLp0bqxpUYHabJaaabJBEEU",
        "auth":"TsxAJ3Mkjbv3wDNEYByqzA"
    }
};

push.sendNotification(sub, 'BPA Message One');



