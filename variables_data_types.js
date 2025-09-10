// Variables, data types and basic operators
// ---------------------------

// hotkey to comment ctrl + *
// multi-line comments shirt + alt + a
// shift + alt + down arrow - duplucate current line

// secton 2: console log

console.log("hello world");

//--------------
//section 3 Variables and data types

//camelCase
// first word lowercase, next word upper case. Used for naming variables in JavaScript.

//snake_case

//kabab-case

//Variables store datavalues

// String- "text"
const exampleText = "this is my line of text";

console.log(exampleText);

//Integer- whole numbers
const myNumber = 5;
console.log(myNumber);

//Boolean- true or false
const thisIsTrue = true;
const thisIsFalse = false;

console.log(thisIsTrue);
console.log(thisIsFalse);

// use descriptive names for you variable. Think of the purpuse of the variable and use that.

// Array- [list of values]
const exampleArray = ["this is a string", "this is also a string", 60, false];

const shoppingList = ["milk", "cat food", "bread"];

shoppingList[1] = "dog food";

console.log(shoppingList);

console.log(shoppingList[0]);

// Object- {hold key value pairs}
const person = {
  name: "Joe",
  age: 37,
  location: "Stavanger",
};
console.log(person);
//------------------------------

// section 4: Declaring variables - Let and Const

// var myVariable = 10;
// var is not really used anymore

// standard rule: if you can use const, use const. If you have to use let, use let.

let changebleMessage = "i can change!";
console.log(changebleMessage);

changebleMessage = "I've changed!";
console.log(changebleMessage);

let healthPoints = 100;
healthPoints = 50;
console.log(healthPoints);

// using const, value can not be reassigned
const fixedValue = "i cannot be changed!";

console.log(fixedValue);

// fixedValue = "this will give an error as i'm trying to reassign a const"
// you can change one of the elements in a const array, but not the entire array.

// ------------
// Section 5: Basic Operators
// --------------------------

// Operators preform calculations or comparisons. + -

let num1 = 10;
let num2 = 5;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);

let num3 = num1 + num2;

console.log(num3);

const firstName = "Jane";
const lastName = "Doe";

const fullName = firstName + " " + lastName;

console.log(fullName)

let counter = 0;

counter = counter + 5;
counter += 5;

// ++increments by 1
counter++;
// DRY - dont repeat yourself
counter++;
counter++;
counter++;
// --decrement by 1
counter--;

counter -= 10;

counter *= 10;

counter /= 5;

console.log(counter);
// == comparison

console.log(10 == 10);
// true

console.log(10 == "10");
// true

console.log(10 === 10);
// false
let a = 5;
let b = 2;

console.log(5 > 10);
// false
console.log(50 > 10);
// true
console.log(10 >= 10);
// true

console.log(5 < 10);
// true
console.log(50 < 10);
// false
console.log(10 > 10);
// false
console.log(a % b); //Modulus (Remainders: 0)


