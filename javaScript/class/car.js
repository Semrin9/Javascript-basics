export default class Car {
    constructor(make, model, year) {
      this.make = make;
      this.model = model;
      this.year = year;
      this.speed = 0;
    }
  
    accelerate() {
      this.speed += 10;
      console.log(`The ${this.make} ${this.model} is accelerating. Current speed: ${this.speed} km/h.`);
    }
  
    brake() {
      if (this.speed > 0) {
        this.speed -= 10;
      }
      console.log(`The ${this.make} ${this.model} is braking. Current speed: ${this.speed} km/h.`);
    }
  }

