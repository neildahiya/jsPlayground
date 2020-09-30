/*

Hoisting -> let and const are hoisteed to top but not initialized --- > Code is aware of variable but it can't be used until declared -> Temporal dead zone
Will give reference error
Initializations not hoisted

==================================================================================

Using strict

"use strict"

This will not allow undeclared variables to be used -> reference error.
Duplcating Parameters not allowed, octal literals not allowed

===================================================================================

This
The JavaScript this keyword refers to the object it belongs to.

It has different values depending on where it is used:

In a method, this refers to the owner object.
Alone, this refers to the global object.
In a function, this refers to the global object.
In a function, in strict mode, this is undefined.
In an event, this refers to the element that received the event.
Methods like call(), and apply() can refer this to any object.

===================================================================================
Let -> Block Scope Variable -> Redeclaring inside a block will not affect outside the block
Var -> Cannot have block scope -> Also redeclaring can cause problems
Const -> Just like let but can't be reassigned, must be assigned when declared -> Constant reference to a value
        Const objects can changed, but not reassigned
===================================================================================

Best Practices
-> Avoid Global Variables
-> Always Declare Local Variables
-> Declarations on Top
-> Initialize Variables
-> Never Declare Number, String, or Boolean Objects
-> Don't use new Object()
-> Beware of Automatic Type Conversions
-> Use Parameter Defaults
-> End Your Switches with Defaults
-> Avoid Using eval() -> Security Problem

===================================================================================

What is JSON?
-> JSON stands for JavaScript Object Notation
-> JSON is a lightweight data interchange format
-> JSON is language independent *
-> JSON is "self-describing" and easy to understand



*/
