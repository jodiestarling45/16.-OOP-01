/**
 * Created by nhatnk on 4/26/17. Edited by tungnguyenls2008
 */

function Hero(image, top, left, size) {
    this.image = image;
    this.top = top;
    this.speed = 10;
    this.left = left;
    this.size = size;

    this.getHeroElement = function () {
        return '<img id="char" width="' + this.size + '"' +
            ' height="' + this.size + '"' +
            ' src="' + this.image + '"' +
            ' style="top: ' + this.top + 'px; left:' + this.left + 'px;position:absolute;" />';
    };
    /*this.move = function (btnId) {
        switch (btnId) {
            case "left":
                this.moveLeft();
                break;
            case "right":
                this.moveRight();
                break;
            case "up":
                this.moveUp();
                break;
            case "down":
                this.moveDown();
                break;
        }
    };*/
    this.moveRight = function () {

        this.left += this.speed;
        console.log(this.left);
    };
    this.moveLeft = function () {

        this.left -= this.speed;
        console.log(this.left);

    };
    this.moveUp = function () {

        this.top -= this.speed;

    };
    this.moveDown = function () {

        this.top += this.speed;


    };

}

let hero = new Hero('songokuright.jpg', 40, 30, 200);

function start() {

    if (hero.left < window.innerWidth - hero.size && hero.top === 0) {
        hero.moveRight();
    } else if (hero.top < window.innerHeight - hero.size && hero.left > window.innerWidth - hero.size)
        hero.moveDown();
    else if (hero.left > 0 && hero.top > window.innerHeight - hero.size) {
        hero.moveLeft();
    } else if (hero.top > 0) {
        hero.moveUp();
    }

    /*switch (moveId) {
      case "left":
        hero.moveLeft();
        break;
      case "right":
        hero.moveRight();
        break;
      case "up":
        hero.moveUp();
        break;
      case "down":
        hero.moveDown();
        break;
    }*/
    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 10);

}

function confirmSpeed() {
    hero.speed = +(document.getElementById('charSpeed').value);
}

start();