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
        "endpoint":"https://updates.push.services.mozilla.com/wpush/v2/gAAAAABgeSCkKjXTHhvEJpAdRkZGOO8IWazkDaNZDyBZV0IriFEqIjzqPZq6yyydqv3BF8j-dhPk8gBanESi4Pj9DuhVVl2GKb8n5qxfWi2PpUjVPnXfRqSjpLZO9B3oy3eTk-yAJlXk0s1WIxXokvep1qWE-xlGxegjhTNBmCZHLjqh2A2QepM",
        "keys":{
            "auth":"XReC7O1U0P_1uEWRJotZxA",
            "p256dh":"BLZmhMnqx4E9STcg6PwkSXT_CcCkeLIrx0OpiFQsg_Btnw8l0IWjs1H9c7uB62msBZ22x1TCWDInsc4pu-4JOi4"
        }
    },
    {
        "endpoint":"https://updates.push.services.mozilla.com/wpush/v2/gAAAAABgeTrDJycATHHpoZxePiGKCXdxHgyn2g_SWMKBLvwtbS_rsp-Xc2ZqSen66eGLn_74wSKTgCxf9jaUNwctvf29HAKiYbmfRU25LeRSzJZn94XAKae8h88C8gblJW8r_yHmXshojkZxFDeax6wrKJWguu84iiVYxJwKmVIBeR71Gubu2no",
        "keys":{
            "auth":"SgnDOoHoA2OxBMHkMyxT0Q","p256dh":"BLyzAXaem8GAD_K7OGEifR94SEYTpjuv1Aed_F1gttdRpZLMRB2tQ_j9Fm1pbsQ2rXZpFPLpcaf58MMgu0G-bts"
    }
    }
];
var msgCustomised = {
    "message"  : "BPA Message Eight 5",
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



