//lesson 9: recap- loops & objects

//section 1 looping through arrays

const fruitNames = ["Apple", "Banana", "Mango", "Grapes", "Pear"];

// "for" looop allows the possibility to change starting index, when we end ans how we increment

for (let i = 0; i < fruitNames.length; i++) {
  console.log(fruitNames[i]);
  // console log the name of the array plus [i] to get the whole array
}

// for.. of loop works like a standard for loop, will loop through each element in the array. no acces to 1
for (let fruit of fruitNames) {
  console.log(fruit);
}
//section2 looping with conditions
const numbers = [12, 5, 8, 13, 44, 300, 22];
//loop through the array
//if the number is <10 continue
//if the number is > 100 break
//otherwise console log the number

for (let number of numbers) {
  if (number < 10) continue;
  if (number > 100) break;
  console.log(number);
}

//section 3 the while loop (guessing game)

//generate a random number between 1-10

const randomNumber = Math.floor(Math.random() * 10) + 1;

let guess = 1;

// use a while loop to increment a guess variable. When the guess and the randomNumber match, end the loop and console log that we guess correctly.

while (randomNumber !== guess) {
  guess++;

  console.log(`Guessing: ${guess}`);

  if (guess === randomNumber) {
    console.log(`Correct! The number was: ${guess}`);
  }
}

//section4 basic object review

const book = {
  title: "The Hobbit",
  author: "J.R.R. Tolkien",
  pages: 310,
};

//Add year published
book.published = 1937;

//Change pages
book.pages = 320;

//remove author
delete book.author;

//target title using dot notation
console.log(book);
//Target pages using bracket notation

//section 5 looping through an object and using dynamic keys
for (let key in book) {
  console.log(key); //console logging the key
  console.log(book[key]); //console looking the key and value
}

//section 6 array of objects - fruit data
const fruits = [
  {
    name: "Apple",
    color: "Red",
    calories: 52,
    pricePerKg: 3.5,
    countryOfOrigin: "USA",
  },
  {
    name: "Banana",
    color: "Yellow",
    calories: 89,
    pricePerKg: 1.2,
    countryOfOrigin: "Ecuador",
  },
  {
    name: "Orange",
    color: "Orange",
    calories: 47,
    pricePerKg: 2.8,
    countryOfOrigin: "Spain",
  },
  {
    name: "Strawberry",
    color: "Red",
    calories: 32,
    pricePerKg: 6.0,
    countryOfOrigin: "Mexico",
  },
  {
    name: "Mango",
    color: "Orange",
    calories: 60,
    pricePerKg: 4.0,
    countryOfOrigin: "India",
  },
  {
    name: "Grapes",
    color: "Green",
    calories: 69,
    pricePerKg: 0.5,
    countryOfOrigin: "Italy",
  },
  {
    name: "Pineapple",
    color: "Brown",
    calories: 50,
    pricePerKg: 3.0,
    countryOfOrigin: "Costa Rica",
  },
];

//describe each fruit.
//console log: Apple is a Red fruit from USA
//console log: Banana is a Yellow fruit from Ecuador
for (let fruit of fruits) {
  console.log(
    `${fruit.name} is a ${fruit.color.toLowerCase()} from ${
      fruit.countryOfOrigin
    }`
  );
}

//task 2
let lowestPrice = Infinity;
let fruitName = "";

for (let fruit of fruits) {
  if (fruit.pricePerKg < lowestPrice) {
    lowestPrice = fruit.pricePerKg;
    fruitName = fruit.name;
  }
}
console.log(
  `The cheapest fruit is ${fruitName}, costing ${lowestPrice} kr. per kg.`
);

//section 8 adding and removing properties in a loop

//add a "good" propertry to every fruit

for (let fruit of fruits) {
  fruit.good = true;
}
for (let fruit of fruits) {
  delete fruit.good;
  console.log(fruit);
}

//section 9: Object in Function 
function describeFruit(fruit) {
	return `${fruit.name} contains ${fruits.calories} calories per 100g.`;

}

console.log(describeFruit(fruits[0]));
console.log(describeFruit(fruits[5]));

//section 10 summary
//use loops to repeat tasks or go trough arrays and objects
// for.. of is great for typical arrays
// for..in is used for object kets
// obejcts store data in key-vale pairs
// arrays can contain multiple object (object arrays)
// loops can ombine with logic, conditions and functions
// you can add, modify, or dele properties dynamically


//JSON

const rawJsonData = [
	// data that you got from api?
	// theres a method that you can use to parse the data to remove unwanted ""
]

// const parsedData = JSON.parse(rawJsonData)
// console.log(parsedData)