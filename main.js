function Phone(brand, price, color) {
   this.brand = brand;
   this.price = price;
   this.color = color;
}

Phone.prototype.printInfo = function () {
   console.log("The phone brand " + this.brand + ", color is " + this.color + "and the price is " +
      this.price + ".");
}

var iPhone6S = new Phone("Apple", 2250, "silver"),
   samsungS6 = new Phone("Samsung", 2100, "black"),
   onePlus = new Phone("One Plus", 1700, "white");


iPhone6S.printInfo();
samsungS6.printInfo();
onePlus.printInfo();

function Auto(brand, price, capacitance) {
   this.brand = brand;
   this.price = price;
   this.capacitance = capacitance;
}

Auto.prototype.printInfo = function () {
   console.log("The auto brand " + this.brand + " its price is " + this.price + " capacitance " + this.capacitance + " l.")
}

var bmw = new Auto("BMW", 170000, 4),
    audi = new Auto("Audi", 140000, 2),
    mercedes = new Auto("Mercedes", 150000, 2);

bmw.printInfo();
audi.printInfo();
mercedes.printInfo();
