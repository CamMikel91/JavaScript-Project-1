let car = new Object();
car.seats = "cloth";
car.engine = "V-6";
car.show_features = function() {
    window.alert("car: " + car.seats + " seats, " + car.engine + " engine");
};
car.show_features();