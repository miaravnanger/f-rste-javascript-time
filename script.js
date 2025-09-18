//Lesson 5: Javascript Methods(strings arrays, numbers)

// with a spesific type of data, like strings, numbers, or arrays. It lets you do something with that data-like change it, check it, copy og access part of it.

//1: string methods

const text = "     Hello, JavaScript World World!     ";

console.log(text.trim()); //removed whitespace from both ends of the string. Does not alter the original, can be stored in a new variable

const trimmedText = text.trim();

console.log(trimmedText);
console.log(text.toUpperCase()); // converts the string to uppercase
console.log(text.toLowerCase()); //converts to lowercase
console.log(text.indexOf("JavaScript")); //shows where the text starts in the string(The starting index of the given string)

console.log(text.slice(5, 10)); //shows the text between(from 5 to/not inclusive 10)these two points in the string(included these points)
const slicedText = text.slice(5, 10);
console.log(slicedText);

console.log(text.replace("World", "Universe")); //replaces the text in the first "" and replace it with the next "". Only the first occurence of the text.
console.log(text.replaceAll("World", "Universe")); //replaces all the instances of the text.

console.log(text.charCodeAt(5)); //returns the Unicode value of the character of index 3
console.log(text.trim().length); //returns the length of the string

console.log(text.trim().split(" ")); //converts a string into an array, splitting into new elements on the given character
console.log(text.repeat(3)); //repeats the string 3 times

//section 1.2
let numericString = "123.45xyz";

console.log(Number(numericString)); //converts entire string to a number; returns NaN if any part is invalid
console.log(parseInt(numericString)); //parses an integer(no decimals) until an invalid character(such as text)
console.log(parseFloat(numericString)); //parses an integer as a float(with decimals) until an invalid character(such as text)

//Array Methods

const colors = ["Red", "Green", "Blue"];
console.log(colors.indexOf("Green"));
console.log(colors.length);
colors.push("Yellow");
console.log(colors); // push adds to the end of an array

const lastColor = colors.pop();
console.log(lastColor); // removes the last element frmo the array, can be stored in a new variable

const firstColor = colors.shift();
console.log(firstColor); //shift removes an element from the beginning of the array

colors.unshift("purple"); //unshift places an element at the beginning of the array

console.log(colors);

console.log(colors.join("-")); //turns an array into a string, adds the text inside the "" between each element.

console.log(colors.includes("Green")); //loops over the array and checks each element to see if it matches the text in the brackets

console.log(colors);

//const newColors = colors.splice(1, 2, "Orange", "Pink");
//splice returns the deleted elements in the array, alters the original

//console.log(newColors); //find index 1, delete that 1(if 2, the nexrt one as well) and replace with Orange and pink

const newColors2 = colors.toSpliced(1, 2, "Orange", "Pink");

//toSliced returns the array with the chnges and doesnt altter the originals
console.log(newColors2);
console.log(colors);

let unsortedArray = [3, 1, 4, 1, 5, 9];
unsortedArray.sort(); //sorts the original array
console.log(unsortedArray);

let sortedArray = unsortedArray.toSorted(); //returns a copy of the original, sorted. does not affect the original array.
console.log(sortedArray);
console.log(sortedArray[0]);
console.log(sortedArray.at(0));
console.log(sortedArray.at(-2));

console.log(sortedArray.reverse()); //alters the original
const reversedArray = sortedArray.toReversed(); //makes a copy of the original
console.log(reversedArray);

const myNum = 3.34573459;
console.log(myNum.toFixed(2)); //returns a string representing myNumber rounded to 2 decimal
console.log(myNum.toString()); //converts myNum into a string
console.log(myNum.toExponential()); //returns a string with myNum in exponential notation

//section 4 chaining methods together

//Example 1: Chaining string methods

const rawString = "  JavaScript is fun!  ";

const processedString = rawString
  .trim()
  .replace("fun", "awesome")
  .toUpperCase();

console.log(processedString);

//ex 2 chaining array methods

const words = ["Hello", "World"];
const messageFromArray = words.join(" ").toLocaleUpperCase();

console.log(messageFromArray);

//ex 3
const chainedNumber = myNum.toFixed(2).toString().repeat(2);
console.log(chainedNumber);
