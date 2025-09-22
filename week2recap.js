
// Array 
const shoppingList = ["milk", "bread", "cheese"];
const gamesList = [
  "mario kart",
  "hollow knight",
  "hello kitty",
  "island adventure",
  "remnant 2",
  "starcarft broodvar",
  "WoW",
];

const checkItem = (item, list) =>
  `${item} is ${list.includes(item) ? "" : "not"} included in the list`;
console.log(checkItem("milk", shoppingList));
console.log(checkItem("catfood", shoppingList));
console.log(checkItem("remnant 2", gamesList));
console.log(checkItem("Gears of War", gamesList));

//   let isIsNot;
//   if (included) {
//     isIsNot = "is"
//   } else {
//     isIsNot = "is not ";
//   }
// }
// return item + " " + isIsNot + "is included in the list";
// checkItem("milk"))

//2 convert a sentence into kebab case (function, methods)

function toKebabCase(string) {
  // return string.trim().split(" ").join("-"); //turns it into an array with plit, then turns it into a string again with - between earch word
  // return string.trim().replaceAll(" ", "-");
}
console.log(toKebabCase("    Hello From The Function    "));

// 3, check if a word is a palindrome(same backwards) (function, methods)

function isPalindrome(word) {
  const lcWord = word.toLowerCase(); //first make it lowercase
  //
  //then, is the word the same as the word (each letters made to an array) reversed? (each letter gets reversed still as array) add join to make the letters back into a string.

  if (lcWord === lcWord.split("").toReversed().join("")) {
    return `${word} is a palindrome`;
  } else {
    return `${word} is not a palindrome`;
  }

  //.toLowerCase (because the first letter in the word is with a capital letter)
  //.split("") if its empty it splits each character into an element in an array
  //.toReversed reverses the order of the array
  //.join(" ") joins the elements (letters) in the array back into a string
}
console.log(isPalindrome("Ekitike")); // RaceCar is palindrome
console.log(isPalindrome("Banana")); //banana is not palindrome

//section 4 shorten a string and add "..." at the end (functions, methods)
function shorten(text, maxLength) {
  if (text.length <= maxLength) {
    return text;
  } else {
    return text.slice(0, maxLength) + "...";
  }
}

let myText = "This is a log sentence that needs shortening.";

console.log(shorten(myText, 20)); //"this is a long sente..."
console.log(shorten(myText, 10));
console.log(shorten(myText, 30));

//section 5 math.random

//built in javascript method that gived you a random number between 0(inclusive) and 1(exclusive) 0.000000000000000000-0.0000000000000

// console.log(Math.random());

// //0-9
//0.00000-0.9999999999
console.log(Math.floor(Math.random() * 10)); //math.floor makes a whole number. * 10 makes it a number between 0 and 10

//1-10
console.log(Math.floor(Math.random() * 10) + 1); // makes sure you dont get 0 and that you can get 10. 0 and 9 is the normal outcome, now we have 1- 10

//console.log(Math.ceil(Math.random() * 10)); //rounds up instead of down,basically does the same but not bug free.

const pokemon = [
  "pikachu",
  "diglett",
  "electrode",
  "machop",
  "magikarp",
  "mew",
  "blastoise",
  "vaporeon",
  "psyduck",
  "meowth",
];
//we can use math.random to create a random index. If we multiply the math.random by pokemon.lwngth then we will be able to add or remove from the array without causing bugs
const randomIndex = Math.floor(Math.random() * pokemon.length);
console.log(pokemon[randomIndex]);

//secyion 6 remove the middle element from an array (function methods, math.floor)
const myArray = ["A", "B", "C", "D", "E", "F", "G", "H"];

function removeMiddle(array) {
  const mid = Math.floor(array.length / 2);
  return array.toSpliced(mid, 1);
}
console.log(removeMiddle(myArray));

// 7 rock paper scissors function, switch case, mathrandom

// function rockPaperScissors(player1, player2) {
//   switch (player1 + player2) {
//     case "rock" + "rock":
//     case "paper" + "paper":
//     case "scissors" + "scissors":
//       return "it's a draw";

//     case "rock" + "scissors":
//     case "scissors" + "paper":
//     case "paper" + "rock":
//       return "player 1 wins";

//     case "rock" + "paper":
//     case "scissors" + "rock":
//     case "paper" + "scissors":
//       return "player 2 wins";

//     default:
//       return "Stop trying to hack the game, muppet!";
//   }
// }

// console.log(rockPaperScissors("scissors", "rock"));

function rockPaperScissors(player1, AI) {
  switch (player1 + AI) {
    case "rock" + "rock":
    case "paper" + "paper":
    case "scissors" + "scissors":
      return "it's a draw";

    case "rock" + "scissors":
    case "scissors" + "paper":
    case "paper" + "rock":
      return "player 1 wins";

    case "rock" + "paper":
    case "scissors" + "rock":
    case "paper" + "scissors":
      return "AI wins";

    default:
      return "Stop trying to hack the game, muppet!";
  }
}

const possibleAnswers = ["rock", "paper", "scissors"];
const aiAnswer = possibleAnswers[Math.floor(Math.random() * 3)];
console.log("The AI answered:", aiAnswer);

console.log(rockPaperScissors("scissors", aiAnswer));
