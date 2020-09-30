var person = { fname: "John", lname: "Doe", age: 25 };

// Will log property names
// for (x in person) {
//   console.log(x);
// }

//Not allowed
// for (x of person) {
//   txt += person[x];
// }

// for (x in person) {
//Will print values
//   console.log(person[x]);
//Not allowed as x is a variable
//   console.log(person.x);
// }

// Adding functions to objects
// person.printDetails = function () {
//   console.log(this.fname);
// };

// Not allowed to use arrow function while declaring method of object
// person.printDetails = () => {
//   return this.fname;
// };

// console.log(person.printDetails());

// Object.values() converts object to array -> will store all of the values
// var myArray = Object.values(person);
// console.log(myArray);

// JSON.stringify()
//Will convert object to string -> JSON format -> Functions not stringifies unless we do it beforehands
// var stringObj = JSON.stringify(person);
// console.log(stringObj);

// Better data quality is assured when we use getters or setters

// Constructors
function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
}

var myFather = new Person("John", "Doe", 50, "blue");
var myMother = new Person("Sally", "Rally", 48, "green");

//Cannot add new properties to an existing constructor without using prototype
// Person.shoeSize = 10; // Not allowed
// Can add property to object
// myFather.shoeSize = 10;

//Using prototype to constructor
Person.prototype.shoeSize = 10;
myFather = new Person("Sally", "Rally", 48, "green");

// console.log(Object.values(myFather));

//All JavaScript objects inherit properties and methods from a prototype

// Object.keys() -> returns enumerable properties of object
// console.log(Object.keys(person));

// Call - With the call() method, you can write a method that can be used on different objects.
// function sayLoud(n) {
//   console.log(this.fname);
// }
// sayLoud.call(person);

// Eg 2
// var person = {
//     fullName: function(city, country) {
//       return this.firstName + " " + this.lastName + "," + city + "," + country;
//     }
//   }
//   var person1 = {
//     firstName:"John",
//     lastName: "Doe"
//   }
//   person.fullName.call(person1, "Oslo", "Norway");

// Apply
// The Difference Between call() and apply()
// The difference is:

// The call() method takes arguments separately.

// The apply() method takes arguments as an array.
// var person = {
//     fullName: function(city, country) {
//       return this.firstName + " " + this.lastName + "," + city + "," + country;
//     }
//   }
//   var person1 = {
//     firstName:"John",
//     lastName: "Doe"
//   }
//   person.fullName.apply(person1, ["Oslo", "Norway"]);

// Closures
//Global variables can be made local (private) with closures.
