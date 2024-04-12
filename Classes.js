//Section Two

class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }
  get getCar() {
    return `My Car Brand Is ${this.brand} And The Model Is ${this.model}`;
  }
  set setNewCar(newCarName) {
    this.brand = newCarName;
  }
}

const carOne = new Car("Toyata", "Etios");
carOne.setNewCar = "Audi";
console.log(carOne);
