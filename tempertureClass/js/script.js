let Temperature = function (a) {
    this.Celcius = a;
    this.convertToFahrenheit = function () {
        return ((this.Celcius * 9 / 5) + 32);
    };
    this.convertToKenvin = function () {
        return this.Celcius + 273.15;
    };

};

function specialUnit(unit, value) {
    return (unit + '&sup' + value + ';');
}
function convert() {
    let temperature1 = new Temperature(25);
    let Fahrenheit1 = temperature1.convertToFahrenheit();
    let Kenvin1 = temperature1.convertToKenvin();
    document.getElementById('display').innerHTML=temperature1.Celcius + "&deg;C is " + Fahrenheit1 + "&deg;F and " + Kenvin1 + "&deg;K.";


}
convert();