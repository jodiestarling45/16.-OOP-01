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
let mobile2 = new Mobile('Nokia');

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
    document.getElementById('Nokia-inbox').innerHTML = mobile2.inbox;
    document.getElementById('Nokia-outbox').innerHTML = mobile2.outbox;
    document.getElementById('Nokia-msg').value = '';
    document.getElementById('iphone-msg').value = '';
    mobile1.battery--;
    phoneStatus();
    displayBattery();

}

function displayBattery() {
    document.getElementById('iphoneBattery').value = "BATTERY: " + mobile1.battery;
    document.getElementById('NokiaBattery').value = "BATTERY: " + mobile2.battery;
}

function phoneStatus() {
    if (mobile1.battery <= 0) {
        document.getElementById('iphoneStatus').value = "STATUS: The phone is dead, it's stupid.";
        document.getElementById('iphone-msg').disabled = true;
        document.getElementById("iphone-send").disabled = true;
        document.getElementById('iphonePower').value = "RECHARGE AND POWER ON";
    } else document.getElementById('iphoneStatus').value = "STATUS: You're good to go, for now.";
    if (mobile2.battery <= 0) {
        document.getElementById('NokiaStatus').value = "STATUS: The phone is dead, it's stupid.";
        document.getElementById('Nokia-msg').disabled = true;
        document.getElementById("Nokia-send").disabled = true;
        document.getElementById('NokiaPower').value = "RECHARGE AND POWER ON";
    } else document.getElementById('NokiaStatus').value = "STATUS: You're good to go, for now.";



}
function IphoneSwitch() {

    let btn = document.getElementById("iphonePower");

    if (btn.innerHTML === "POWER OFF") {
        btn.innerHTML = "RECHARGE AND POWER ON";
        document.getElementById('iphone-msg').disabled = true;
        document.getElementById("iphone-send").disabled = true;
    }
    else {
        btn.innerHTML = "POWER OFF";
        document.getElementById('iphone-msg').disabled = false;
        document.getElementById("iphone-send").disabled = false;
        mobile1.battery=100;
        phoneStatus();
        displayBattery();
    }

}
function NokiaSwitch() {

    let btn = document.getElementById("NokiaPower");

    if (btn.innerHTML === "POWER OFF") {
        btn.innerHTML = "RECHARGE AND POWER ON";
        document.getElementById('Nokia-msg').disabled = true;
        document.getElementById("Nokia-send").disabled = true;
    }
    else {
        btn.innerHTML = "POWER OFF";
        document.getElementById('Nokia-msg').disabled = false;
        document.getElementById("Nokia-send").disabled = false;
        mobile2.battery=100;
        phoneStatus();
        displayBattery();
    }

}
displayBattery();
phoneStatus();