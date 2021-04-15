var push = require('web-push')

let vapidKeys = 
        //push.generateVAPIDKeys();
        {
            publicKey: 'BBlw0TujfU6PVbweYIULgv5nLRcwOhvgM5fjdzeLWEXqjHsKvshTk10Q7VFsS9G29y-dovhm5bwz3Vwh5k0tRNI',
            privateKey: 'JY8cIeauPUtdafWBU8Y-TJuqUulZBUwxv64jqJFd2Us'
        };  // keep privateKey in a secure location. Nobody should see the private key per se.  DevOps action.

//console.log("VAPID keys for BPA -> ", vapidKeys)


push.setVapidDetails('mailto:security@ct.com', 
                        vapidKeys.publicKey, vapidKeys.privateKey);


// user device endpoint registered
let subDeviceList = [ 
    {
        "endpoint":"https://fcm.googleapis.com/fcm/send/ezJJmtBJzsY:APA91bG7jcMR4zn5wXUw48RnkijyjlrfGJ_DsXOG5-n-DO2TYpHHJdhUoMwrc52nVCQORBUC9tPGQbIxqVQsgt-rdCjlxNO6ON3KoRAsh2gfPwnCwq8kQ0PECiWg7XVhwG6PjbPUj62P",
        "expirationTime":null,
        "keys":{
            "p256dh":"BECjEl1ZGzfVih6Sn2SIIp7uje0d-IMRLCLp-8rL3kby4jCOgyT7UCKoRKDyY14nWrRjNLPcNwSKQCbgq2Hsgno",
            "auth":"v3mqZv70y4YtuvKE3KOnQw"
        }
    },
    {
        "endpoint":"https://updates.push.services.mozilla.com/wpush/v2/gAAAAABgd-lOcmcZEfEh_lnFe4Lu2biSiGsKEqvnsZO4X6LvAlrAoh10TBxs--mkVX6wTyQXUQDXMQwcc2wACk13__d1H75mmNckmKPvSG6g_ykWJvlSoQjtduGkTRHl6Im9QOmdOAVUjXNVu8U5rSHxuJjSgSXI695Fl97tPX6hVsaKES0KbWg",
        "keys":
            {
                "auth":"SRzqoYiDbCa_fGkdUlm4hA","p256dh":"BJSD8vCnobOXqKeVMT8hHMf03y-PxwmR5Vf0fdb6JCg-JYkgRGaEakDEaM8oU3xqmW2b6NWsCbUcRxZAWCcUk2A"
    
        }
    }
];
var msgCustomised = {
    "message"  : "BPA Message Eight 2",
    "module"   : "module_a",
    "category" : "category_a",
    "category" : "type_a"
};

console.log("Sending message to list of user devices...", subDeviceList.length );
subDeviceList.forEach( element => { 
    
        console.log("invoking endpoint...", element.keys.auth );
        push.sendNotification(element, JSON.stringify(msgCustomised) ).catch( (err) => {
            // error handling script here
            if (err.statusCode === 404 || err.statusCode === 410) {
                // delete subscription as it is no longer valid
                console.error("evict endpoint...", element.keys.auth );
            } 
        } ); // end of catch error

    }
);



