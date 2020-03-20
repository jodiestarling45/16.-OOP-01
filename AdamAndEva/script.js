const APPLE_WEIGHT = 10;
let Apple = function () {
    this.weight = APPLE_WEIGHT;
    this.decrease = function () {
        if(this.weight > 0){
            this.weight--;
        }
    };
    this.getWeight = function () {
        return this.weight;
    }
};
let Human = function (name,weight) {
    this.name=name;
    this.gender=true;
    this.weight=weight;

    this.setGender = function (gender) {
        this.gender=gender;
    };
    this.showGender=function () {
        if (this.gender===true)
            console.log("This is a man.");
        else console.log("This is a women.");
    };
    this.checkApple = function (apple) {
         return apple.weight>0;
    };
    this.eatApple = function (apple) {
        if(this.checkApple(apple)){
            this.weight++;
            apple.decrease();
        }
    };
    this.talk=function (phrase) {
        console.log(phrase);
    };
    this.getName = function () {
        return this.name;
    };
    this.setName = function (name) {
        this.name = name;
        return this.name;
    };


    this.getWeight = function () {
        return this.weight;
    };
    this.setWeight = function (weight) {
        this.weight = weight;
        return this.weight
    };
};
let apple=new Apple();
console.log("The apple's weight: "+apple.getWeight());


let adam=new Human();
adam.setName("Adam",80);
console.log("Name: "+adam.getName());
adam.setGender(true);
console.log(adam.showGender());
adam.setWeight(80);
console.log("His weight is: "+adam.getWeight());
adam.talk("I can eat this apple!");
adam.eatApple(apple);
adam.eatApple(apple);
adam.eatApple(apple);
adam.eatApple(apple);
adam.eatApple(apple);
adam.eatApple(apple);
adam.eatApple(apple);
console.log("His weight is: "+adam.getWeight());
console.log("Apple's weight is: "+apple.getWeight());


let eva=new Human();
eva.setName("Eva");
console.log("Her name is: "+eva.getName());
eva.setGender(false);
console.log(eva.showGender());
eva.setWeight(40);
console.log("Her weight: "+eva.getWeight());
eva.talk("Can I have a piece?");
eva.eatApple(apple);
eva.eatApple(apple);
eva.eatApple(apple);
eva.eatApple(apple);
console.log("Her weight: "+eva.getWeight());
console.log("Apple's weight is: "+apple.getWeight());

adam.talk("Why do you have to eat the whole thing?");
eva.talk("I like it, are there more?");
adam.talk("not for you, hippo.");