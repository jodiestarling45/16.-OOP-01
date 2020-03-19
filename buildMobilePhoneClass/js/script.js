const MAX_BATTERY = 100;

class Mobile {
    constructor(name) {
        this.name = name;
        this.battery = MAX_BATTERY;
        this.msg = '';
        this.inbox = [];
        this.outbox = [];
    }

    writeMsg(value) {
        this.msg = value;
        this.battery--;
        phoneStatus();
        displayBattery();

    }

    receiveMsg(name, msg) {
        this.inbox.push(name + ":" + msg + "<br>");
        this.battery--;
        phoneStatus();
        displayBattery();

    }

    sendMsg(mobile) {
        mobile.receiveMsg(this.name, this.msg);
        this.outbox.push(this.msg + "<br>");
        this.battery--;
        phoneStatus();
        displayBattery();

    }

    /*autoDecreaseBattery() {
        if (this.battery>0){
            setInterval(this.decreaseBattery,3000);
        }
    }*/
    /*   decreaseBattery(){
           this.battery--;
           console.log(typeof this.battery);
           console.log(this.battery);
       }*/

}

let mobile1 = new Mobile('iphone');
let mobile2 = new Mobile('SamSung');

/*mobile1.autoDecreaseBattery();
mobile2.autoDecreaseBattery();*/
/*function autoDecreaseBattery() {
    if (mobile1.battery>0){
        setInterval(mobile1.decreaseBattery,3000);
    }
}
autoDecreaseBattery();*/

/*mobile1.writeMsg('hello');
mobile1.sendMsg(mobile2);
mobile1.writeMsg('Im Iphone');
mobile1.sendMsg(mobile2);
console.log(mobile1);
console.log(mobile2);*/
function sendMessage(m1, m2) {
    m1.sendMsg(m2);
    document.getElementById('iphone-inbox').innerHTML = mobile1.inbox;
    document.getElementById('iphone-outbox').innerHTML = mobile1.outbox;
    document.getElementById('SamSung-inbox').innerHTML = mobile2.inbox;
    document.getElementById('SamSung-outbox').innerHTML = mobile2.outbox;
    document.getElementById('SamSung-msg').value = '';
    document.getElementById('iphone-msg').value = '';
    mobile1.battery--;
    phoneStatus();
    displayBattery();

}

function displayBattery() {
    document.getElementById('iphoneBattery').value = "Battery: " + mobile1.battery;
    document.getElementById('SamSungBattery').value = "Battery: " + mobile2.battery;
}

function phoneStatus() {
    if (mobile1.battery <= 0) {
        document.getElementById('iphoneStatus').value = "The phone is dead, it's stupid."
        document.getElementById('iphone-msg').disabled=true;
        document.getElementById("iphone-send").disabled=true;
    }else document.getElementById('iphoneStatus').value = "You're good to go, for now.";
    if (mobile2.battery <= 0) {
        document.getElementById('SamSungStatus').value = "The phone is dead, it's stupid."
        document.getElementById('SamSung-msg').disabled=true;
        document.getElementById("SamSung-send").disabled=true;
    }else document.getElementById('SamSungStatus').value = "You're good to go, for now.";


}

displayBattery();
phoneStatus();