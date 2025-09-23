//Lesson 4: functions

//section 1: function declarations and hoisting

//this function prints a simple greeting to the concole
function sayHello() {
  console.log("hello");

  //we call the function by using its name followed by (sayHello);

  sayHello();
}
//functions get read first, even tho you havent declared it above(this is called hoisting)

//section 2 Arrow functions (introdused in Es6 great for short inline functions)

const arrowFunction = () => {
  console.log("Hello from the arrow function");
};
arrowFunction();

//section 3 return statements and scope

function logMessage() {
  console.log("This function logs a message without returning a value");
}
logMessage();

function returnsValue() {
  const myMessage = "This is my message";
  console.log(myMessage);
  return myMessage;
  //Any vode below the first return is unreachable. As soon as we return, we exit the function
  return myMessage;
  const myVar = 45;
  return myVar;
}
console.log(returnsValue());

const returnedMessage = returnsValue();

console.log(returnedMessage);

//section 4 Functions with parameters

//ex 1 hard coding

function add() {
  return 3 + 4;
}
console.log(add());

//ex 2 soft coding

function minus(num1, num2) {
  return num1 - num2;
}
console.log(minus(20, 10));
console.log(minus(150, 43));
console.log(minus(2345, 678));

//function to order t-shirts
let blueShirtOrders = 0;
let redShirtOrders = 0;

function orderShirt(color) {
  if (color === "blue") {
    blueShirtOrders++;
  } else if (color === "red") {
    redShirtOrders++;
  }
}
orderShirt("blue");
orderShirt("red");
orderShirt("red");
console.log(blueShirtOrders);
console.log(redShirtOrders);

// A greeter function that uses perameters and template literals
//you dont need to put "return {" when you use an arrow function. Just in a one liner, not if you add more variables etc
//
const greeter = (name, time) => {
  return `Good ${time} ${name} to my website`;
};

console.log(greeter("Joe", "morning"));

console.log(greeter("Anders", "evening"));

console.log(greeter("Mia", "afternoon"));

//section 5 implicit return in arrow functions
//arroe function with an implicit return (no curly brackets or return statemente needed)

const adder = (num1, num2) => num1 + num2;
console.log(adder(5, 10));

//section 6 calculator function using switch statements

function calculator(operator, num1, num2) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    default:
      return "Invalid operator";
  }
}
console.log(calculator("+", 5, 10));
console.log(calculator("-", 100, 20));
console.log(calculator("*", 20, 20));
console.log(calculator("/", 100, 2));
console.log(calculator("yes", 100, 2));

//section 7 updating a Global variable via a Function

let hp = 100;

const maxHp = 200;
//lets say we're making a game and adjusting the players health
//arrow functions must be const

const updateHp = (gainLose, amount) => {
  if (gainLose === "gain") {
    hp += amount;
    if (hp > maxHp) {
      hp = maxHp;
    }
  } else if (gainLose === "lose") {
    hp -= amount;
  }

  if (hp <= 0) {
    console.log("you died!");
    hp = 100;
  }
};

updateHp("gain", 10);
console.log(hp);
updateHp("gain", 50);
console.log(hp);
updateHp("lose", 200);
console.log(hp);

//updateHp("gain", 10);
//updateHp("gain", 50);
//pdateHp("lose", 100);
//console.log(hp)

//the health needs to go up or down. I decide how much by..

//the hp variable will move up IF we say up, and down IF we say down.

//section 8 using template literals and ternary operator in a function

const fruits = ["banana", "Apple", "Pear", "Kiwi"];
let included;
//make a function which checks if an array includes n item. Then console logs if it is or isnt included
const checkItem = (fruit) => {

  // if (fruits.includes(fruit)) {
  //   included = "is";
  // } else {
  //   included = "isn't";
  // }

  return `${fruit} ${fruits.includes(fruit) ? "is" : "isn't" } included in the array`;
};


console.log(checkItem("Apple"));
console.log(checkItem("Cherry"));
//checkItem("Cherry")
//console.log("Apple is included in the array")
//console.log("Cherry is not included in the array");
