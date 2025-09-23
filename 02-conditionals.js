// Lesson 2 conditionals and related operators

//section 1 The typeof operator

let myVariable = "hello world";

console.log(typeof myVariable);

myVariable = 100;

console.log(typeof myVariable);

console.log(15 != 20);
// is this NOT the same? so its true.
console.log(15 != "15");
//false
console.log(15 !== "15");
// == takes datatypes into account, so true

//section 2, conditionals with if, if.. else, if.. else. if.. else

//basic if/ else if/ else statement (no limit, but else is the last)

let temperature = 3;

if (temperature > 25) {
  console.log("it's a hot day!");
} else if (temperature > 5) {
  console.log("it's a typical day");
} else {
  console.log("it's a cold day");
}

// Section 3 logical operators AND ( &&) and OR (||)

// if the driver is under 18, OR their license is suspended, AND they have a license

let age = 18;
let hasLicense = true;
let suspended = false;

if (age >= 18 && hasLicense && !suspended) {
  /// triple = is very importaint because youre asking if hasLicense is the same as true. In this case we KNOW that hasLicense is true, so you can remove the ===.
  console.log("You are allowed to drive");
}
// && means both have to be true to run the code. || means it will run as long as one of them is true

console.log(hasLicense);

let day = "Sunday";
if (day === "Saturday" || day === "Sunday") {
  console.log("it's the weekend! yay");
} else if (
  day === "Monday" ||
  day === "Tuesday" ||
  day === "Wednesday" ||
  day === "Thursday " ||
  day === "Friday"
) {
  console.log("it's a weekday");
} else {
  console.log("You've typed in something stupid havent you");
}

//section 4: Ternary operator

//The ternary operator is usful for simple if..else statements.

const isMember = true;

//if (isMember) {
// fee = "$5";
//}else {
// fee = "10";
//}

let fee = isMember ? "$5" : "$10";

//you can nest ternarys but its usually better to use if/else.
// let fee  = isVip ? "$0" : isMember ? "$5" : "$10";

console.log(fee);

//section 5: switch statement
//a switch statement checks a value against multiple cases

const fruit = "Kiwi";

switch (fruit) {
  case "apple":
    console.log("apples are delicious");
    break;
  case "banana":
    console.log("bananas are good");
    break;
  case "orange":
    console.log("oranges are orange");
    break;
  default:
    console.log("unknown fruit detected");
}

//Truthy

let value = null;
console.log(value);

if (value) {
  console.log("This value is true");
} else {
  console.log("This value was falsey");
}

//Truthy data types:
//A string with value
//A positive number
//A negative number
//An empty array
//An array with value inside
//An empty object
//An object with values

//Falsey data types:
//An empty string
//0
//null
//undefined

// section 7: template literal // Template strings
//example 1

const firstName = "Ola";
const lastName = "Nordmann";

//bad way
const greeting1 = firstName + " " + lastName + " " + "welcome";

//good way
const greeting2 = `Hei ${firstName}, I see your surname is ${lastName}, welcome to my website`;

console.log(greeting1);
console.log(greeting2);

//example 2

const user1 = {
  name: "Joe",
  location: "Stavanger",
};

const user2 = {
  name: "Mia",
  location: "Bergen",
};
//good way again
userGreeting = `Welcome ${user2.name} from ${user2.location} to the webpage`;

console.log(userGreeting);
