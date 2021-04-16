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
        "endpoint":"https://updates.push.services.mozilla.com/wpush/v2/gAAAAABgeRc1oPN0at3neciycDW2fc-5JQQrL_NLz-1ujUk8aEsueFdG9wjHAV6z0EM5_UHh0xMlfKCRtZYaIApoFR2mb25PPYys25liZVpesdiHua9Kx0ApwPzWfbGQ8XKeASkmwJGt5RLMC01FEPm3rpmy9-sBq-hMsm3bofKLyAL3Y6f5vVc",
        "keys":{
            "auth":"vcHZ_ZSUKN1OSExSoIceCg","p256dh":"BOWYIvyQ7huxYN5djqIp2U2zbEVCpfKPhBqVwFPmyYhO6H6J5Q-SOczluYif_UCBahWbFF5faHw5ZkOQYNkuBtc"
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



