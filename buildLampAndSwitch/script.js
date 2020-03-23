let Switch = function () {
    this.status=false;

    this.getLamp = function () {
        return this.lamp;
    };
    this.connectToLamp = function (lamp) {
        this.lamp = lamp;
    };
    this.turnOn = function () {
        this.getLamp().turnOn();
        this.status=true;
        console.log(this.status);
        console.log("The switch is ON.");
    };
    this.turnOff = function () {
        this.getLamp().turnOff();
        this.status=false;
        console.log(this.status);
        console.log("The switch is OFF.");
    };
};

let Lamp = function () {
    this.status = false;

    this.setStatus = function (status) {
        this.status = status;
    };
    this.getStatus = function () {
        return this.status;
    };
    this.lamp=function () {
        if(this.getStatus()){
            console.log(this.getStatus());
            console.log("The lamp is ON.");
        }
        else {
            console.log(this.getStatus());
            console.log("The lamp is OFF.");
        }
    };
    this.turnOn=function () {
        if(!this.getStatus()){
            this.setStatus(true);
        }this.lamp();
    };
    this.turnOff=function () {
        if(this.getStatus()){
            this.setStatus(false);
        }this.lamp();
    };
};
let lampSwitch=new Switch();
let lamp1=new Lamp();
lampSwitch.connectToLamp(lamp1);
lampSwitch.turnOn();
lampSwitch.turnOff();
lampSwitch.turnOn();
lampSwitch.turnOff();
lampSwitch.turnOn();
lampSwitch.turnOff();
lampSwitch.turnOn();
lampSwitch.turnOff();
lampSwitch.turnOn();
lampSwitch.turnOff();
lampSwitch.turnOn();
lampSwitch.turnOff();
lampSwitch.turnOn();
lampSwitch.turnOff();
lampSwitch.turnOn();
lampSwitch.turnOff();
lampSwitch.turnOn();
lampSwitch.turnOff();
lampSwitch.turnOn();
lampSwitch.turnOff();
