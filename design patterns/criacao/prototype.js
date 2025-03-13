//

function Car(model, year, miles) {
  this.model = model;
  this.year = year;
  this.miles = miles;
}
Car.prototype.toString = function () {
  return this.model + "has done " + this.miles + " miles";
};

let civic = new Car("Honda Civic", 2009, 20000);
let mondeo = new Car("Ford Mondeo", 2010, 5000);
let lancer = new Car("mitsubishi", 2020, 1100);

console.log(civic.toString()); 
console.log(mondeo.toString()); 
console.log(lancer.toString()); 