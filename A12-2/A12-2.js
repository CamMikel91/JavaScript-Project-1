//-- Planet Section ------------------------------------------------------------------------------------------------------------------------

// Planet object constructor
let Planet = new Object();
    Planet.name = "Earth";
    Planet.order = 3;
    Planet.size = 24,902;

document.write(
    "<p>" +
    "Planet Name: " + Planet.name + "<br>" +
    "Solar Order: " + Planet.order + "<br>" +
    "Circumference in Miles: " + Planet.size +
    "</p>"
    );

//-- Animal Section -----------------------------------------------------------------------------------------------------------------------------

// Animal object constructor
function Animal(type, age, color) {
    this.type = type;
    this.age = age;
    this.color = color;
}

// Prototype for displayProps method
Animal.prototype.displayProps = function() {
    document.write(
        "<p>" +
            "Animal Type: " + this.type + "<br>" +
            "Age: " + this.age + "<br>" +
            "Color: " + this.color +
        "</p>"
        );
};

// Creates hard coded animal object and writes to html
let animal01 = new Animal("Dog", 4, "White");
animal01.displayProps();


// Prompts user to enter animal type/age/color, taken values are used to create a new animal object
let animalType = window.prompt("What species of animal do you have?", "");
let animalAge = window.prompt("How old is your " + animalType + "?", "");
let animalColor = window.prompt("What color is it?", "");
let animal02 = new Animal(animalType, animalAge, animalColor);

animal02.displayProps();