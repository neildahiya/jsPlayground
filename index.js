// import User from "/user.js"; // No need to put name in {} in case of defualt exports
// import { printName, printAge } from "./user.js"; // Not default so we need to put in {}

// Or

import User, { printAge, printName } from "./user.js";

var first = true;
var second = true;
function randomFunc() {
  return new Promise((resolve, reject) => {
    if (first && second) {
      resolve("yup both true");
    } else {
      reject("not both true");
    }
  });
}

// randomFunc()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
//Promise.all([array of promises]).then((message)=>{
//  message will be array of all the resolves
//})
// Promise.race will return the 1st one resolved

// Filter
const filArray = [
  { name: "Neil1", age: 21 },
  { name: "Neil2", age: 24 },
  { name: "Neil3", age: 23 },
  { name: "Neil4", age: 22 },
];

const filteredArray = filArray.filter((arr) => arr.age <= 22);
// console.log(filteredArray);
//But the original array remains same
// console.log(filArray);

// Map
const nameArray = filArray.map((arr) => {
  return arr.name;
});
// console.log(nameArray);

// Find
const reqElem = filArray.find((arr) => {
  return arr.name === "Neil1";
});
// console.log(reqElem);

//ForEach
filArray.forEach((item) => {
  //   console.log(item.name);
});

//Some - return true if any one of the item matches
const hasYoung = filArray.some((arr) => {
  return arr.age < 18;
});
// console.log(hasYoung);

//Every
const allYoung = filArray.every((arr) => {
  return arr.age < 26;
});
// console.log(allYoung);

//Reduce
const totalAge = filArray.reduce((currentTotal, arr) => {
  return currentTotal + arr.age;
}, 0);

// console.log(totalAge);

//Includes
const items = [1, 2, 3, 4];
const containsTwo = items.includes(2);
// console.log(containsTwo);

///////////////////////////////////////////////////////////////////////////////////////////////
//                             Arrow Functions

function sum(a, b) {
  return a + b;
}

let sum2 = (a, b) => a + b;
// console.log(sum2(5, 6));
// ------------------------

function isPositive(a) {
  return a > 0;
}

let isPositive2 = (a) => a > 0;
// ------------------------
function randomNumber() {
  return Math.random;
}
let randomNumber2 = () => Math.random;

// ------------------------
document.addEventListener("click", function () {
  //   console.log("Click");
});

document.addEventListener("click", () => {
  //   console.log("Click");
});

/////////////////////////////////////////////////////////
//                Modules

const user = new User("Neil", 21);
// console.log(user);
// printName(user);
// printAge(user);

/////////////////////////////////////////////////////////
//                Destructuring Arrays/Objects
const alphabets = ["a", "b", "c", "d", "e", "f"];
const numbers = [1, 2, 3, 4, 5];
const [a, , c, ...rest] = alphabets;
// console.log(a);
// console.log(c);
// console.log(rest);

//Combining arrays
const combArray = [...alphabets, ...numbers];
// console.log(combArray);

const destArray = (a, b) => {
  return [a + b, a * b, a / b];
};

// const [add, mult] = destArray(2, 3);
// console.log(add);
// console.log(mult);

// Using default arguments
const [add, mult, div = "No division"] = destArray(2, 3);
// console.log(add);
// console.log(mult);
// console.log(div);

// Destructuring Objects
const firstPerson = {
  name: "Neil",
  age: 21,
  gender: "Male",
  address: {
    street: "8 Marla",
    hno: 217,
  },
};
const secondPerson = {
  name: "Neil2",
  age: 212,
  gender: "Male",
  address: {
    street: "8 Marlaaa",
    hno: 2171,
  },
};
// const { name, age } = firstPerson;
// console.log(name);
// console.log(age);

//    OR
// const { name: firstName, age, ...restOfDetails } = firstPerson;
// console.log(firstName);
// console.log(age);
// console.log(restOfDetails);

// const {
//   name: firstName,
//   address: { street },
// } = firstPerson;
// console.log(firstName);
// console.log(street);

const thirdPerson = { ...firstPerson, ...secondPerson };
// Copies all of first person in the new object, then copies all of second person and overwrites in case of conflict
// console.log(thirdPerson);
