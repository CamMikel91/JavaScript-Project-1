function Car (seats, engine, radio) {
    this.seats = seats;
    this.engine = engine;
    this.radio = radio;
}
let work_car = new Car("cloth", "V-6", "Tape Deck");
let fun_car = new Car("leather", "V-8", "CD Player");
document.write("I want a car with " + fun_car.seats + " seats.<br>");
document.write("It also needs a " + work_car.engine + " engine.<br>");
document.write("Oh, and I would like a " + fun_car.radio + " also.");