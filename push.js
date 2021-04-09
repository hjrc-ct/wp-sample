var push = require('web-push')

let vapidKeys = 
        //push.generateVAPIDKeys();
        {
            publicKey: 'BBlw0TujfU6PVbweYIULgv5nLRcwOhvgM5fjdzeLWEXqjHsKvshTk10Q7VFsS9G29y-dovhm5bwz3Vwh5k0tRNI',
            privateKey: 'JY8cIeauPUtdafWBU8Y-TJuqUulZBUwxv64jqJFd2Us' 
        };

//console.log("VAPID keys for BPA -> ", vapidKeys)


push.setVapidDetails('mailto:security@ct.com', 
                        vapidKeys.publicKey, vapidKeys.privateKey);

let sub = {};
