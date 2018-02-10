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
