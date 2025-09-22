// 7 javascript loops
//a loop is a way to repeat code without writing it multiple times

//section1 why we use loops

//without a loop

const names = ["Joe", "Henry", "Jimbo", "Dexter"];

//without a loop

// console.log(`Hei ${names[0]}`);
// console.log(`Hei ${names[1]}`);
// console.log(`Hei ${names[2]}`);
// console.log(`Hei ${names[3]}`);

//DRY- dont repeat yourself

//For loop
//Where does the loop start - Where/when does the loop end - How much does the loop go up by each time.
//i = index
// index starts at 0, goes trough the whole length before it enda, and increases by 1 each time
for (let i = 0; i < names.length; i++) {
  console.log(`Hei ${names[i]}`);
}

for (let i = 1; i <= 5; i++) {
  console.log(`Counting ${i}`);
}

//section 3 combining loops with functions and methods

//Creating a function with a loop to greet names in an array. Also cleaning up the writing
const people = ["alice", " BOB ", "charlie", "dEbBy"];
//create array "cleanNames", create the loop, create "name" and add all the elements from the array into it. Then push "name" which now contains all the elements, into the array cleanNames. Here you can trim and edit the elements.then outside of the for loop, return names
function greetEveryone(nameArray) {
  const cleanNames = [];
  for (let i = 0; i < nameArray.length; i++) {
    const name = nameArray[i];
    cleanNames.push(
      name.trim().charAt(0).toUpperCase() + name.trim().slice(1).toLowerCase()
    );
  }
  //trimming away whitespace, selecting character starting at 0 and making it capital. + again trimming the whitespace, slicing away the first character that we just capitalised, and making the rest lowercase.
  return cleanNames;
}

console.log(greetEveryone(people));

let words = ["Loops", "are", "really", "useful"];

//creating a function with a loop to combine elements in an array to a string

// function makeSentence(wordsArray) {
// 	let sentence = ""

// 	for (let i = 0; i < wordsArray.length; i++) {
// 		sentence += wordsArray[i];
// 		if (i < wordsArray.length -1) {
// 			sentence += " "
// 		}
// 	}
// return sentence + "."
// 	}
// console.log(makeSentence(["Loops", "are", "really", "useful"]))

//some methods have inbuilt loop!
function makeSentence(wordsArray) {
  return wordsArray.join(" ") + ".";
}
console.log(makeSentence(words));

//section 4 the for...of loop
//easier way if youre just looping from start to end and increasing one. which is the standard. If you want to skip every other element or do some kind of wierd shit, you have to use for loop.
const colors = ["red", "green", "blue"];
//instead of saying color[i]
for (let color of colors) {
  console.log(color);
}
let cleanedNames = [];
for (let person of people) {
  cleanedNames.push(
    person.trim().charAt(0).toUpperCase() + person.trim().slice(1).toLowerCase()
  );
  console.log(person);
}
console.log(cleanedNames);

//section 5 the while loop /THE DANGEROUS INFINITE LOOP

let count = 1;
while (count <= 5) {
  console.log(`Our While count is at ${count}`);
  count++;
}

//Guessing game with a while loop.
const secretNum = Math.floor(Math.random() * 10);
let guess = 0;
console.log(secretNum);
while (guess !== secretNum) {
  guess++;
  console.log(`Guessing: ${guess}`);

  if (guess === secretNum) {
    console.log(`Correct! The secret number was ${guess}`);
  }
}

//section 6 creating array with loop

function makeRandomArray(length, max) {
  const result = [];
  for (let i = 0; i < length; i++) {
    const rand = Math.floor(Math.random() * max) + 1;
    result.push(rand);
  }

  return result;
}
// shorter way for (let i = 0; i < length; i++) {
//  (result.push(Math.floor(Math.random() * max) + 1;)

console.log(makeRandomArray(10, 50));
const randomNumbers = makeRandomArray(40, 1000);
console.log(randomNumbers);

//section 7 finding the biggest number

function findMax(numbers) {
  let highestNum = 0;

  for (let num of numbers) {
    if (num > highestNum) {
      highestNum = num;
    }
  }
  return `The biggest number is: ${highestNum}`;
}
console.log(findMax(randomNumbers));

// section 8 using break and continue
const moreNames = [
  "Tom",
  "Eric",
  "Jessica",
  "Scott",
  "Anna",
  "Carl",
  "Elisabeth",
  "Benny",
	"Oliver",
  "Andy",
	"Patrick",
];
//skip Andy
for (let name of moreNames) {
  if (name === "Andy" || name === "Scott") continue;

  // console.log(name);
}
//stop when you reach benny
for (let name of moreNames) {
  if (name === "Benny") break;
  console.log(name);
}
// for (let i = 0; i < moreNames.length; i++) {
//   if (moreNames[i] === "Benny") break;
//   console.log(moreNames[i]);
// }


//summary
//for - best when using an index or counting
//for...of- great for looping through entire arrays
//while - useful when you dont know how many times to repeat
//break -stops the loop early
//continue - skips to the next loop cycle