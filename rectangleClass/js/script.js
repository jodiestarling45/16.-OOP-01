let Rectangle = function (a, b ) {
    this.width=a;
    this.height=b;
    this.getSurface = function () {
        return this.width * this.height;
    };
    this.getPerimeter = function () {
        return (this.width + this.height) * 2;
    };
    this.drawRectangle=function () {
        let c = document.getElementById("myCanvas");
        let ctx = c.getContext("2d");
        ctx.beginPath();
        ctx.rect(20, 20, this.width, this.height);
        ctx.fill();
    }
};
function getValue(id) {
    return +document.getElementById(id).value;
}
function specialUnit(unit, value) {
    return (unit + '&sup' + value + ';');
}

function showRectangle(){
    let rectangle= new Rectangle(getValue('width'), getValue('height'));;
    let drawRectangle=rectangle.drawRectangle();
    document.getElementById('myCanvas').getContext=drawRectangle;
}
function showCalculations(){
    let rectangle = new Rectangle(getValue('width'), getValue('height'));
    let surface = rectangle.getSurface();
    let perimeter = rectangle.getPerimeter();
    document.getElementById('calculations').innerHTML="surface: " + surface + specialUnit("cm",2)+ "; perimeter: " + perimeter+"cm.";
}



