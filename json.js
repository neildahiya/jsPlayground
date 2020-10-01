/*
JSON: JavaScript Object Notation.

JSON is a syntax for storing and exchanging data.

JSON is text, written with JavaScript object notation.

When exchanging data between a browser and a server, the data can only be text.

JSON is text, and we can convert any JavaScript object into JSON, and send JSON to the server.

We can also convert any JSON received from the server into JavaScript objects.

Data is in name/value pairs
Data is separated by commas
Curly braces hold objects
Square brackets hold arrays

JSON values cannot be one of the following data types:

a function
a date
undefined

*/

var person = {
  name: "Neil",
  age: 22,
};
// Converting to JSON String
var personJson = JSON.stringify(person);
// console.log(personJson);
var personObj = JSON.parse(personJson);
// console.log(personObj);
