// DOM manipulation w javascript
//section1 what is the DOM
//the dom (document object model) is how Javascript interacts with html on a web page.
//it turns you html into a structure of objects you can access and change using JS

//section 2 targeting existing html elements in js

//getElementById/querySelector//querySelectorAll

const button = document.getElementById("my-button"); //Target element with id="my-button"

console.log(button);

const box1 = document.querySelector("#box1");

const heading = document.querySelector("h1"); //target using element
// const heading = document.querySelector("#my-heading"); //target using class
// console.log(heading);
// const heading = document.querySelector(".my-heading"); //target using id
// console.log(heading);
console.log(heading);

// if you want to target multiple elements use all
const listItem = document.querySelectorAll(".list-item");

console.log(listItem);

//section 3: Changing text or HTML content
//we already stored the targeting inside new variables
button.textContent = "Okay, dont click me then.";
// document.getElementById("my-button").textContent = "" instead of this

//innerHTML set or gets the HTML inside an element (can include tags)
heading.textContent = "Please leave";

heading.innerHTML = "<span style='color:red'>DOM Manipulation</span>"; //can be used to hack badly secured sites. Never use this for inputs and things that users can but text into. as a general rule, Always use textContent. Always use textContent if youre not intentionally adding HTML tags

//section 4; changing styles

button.style.background = "blue";
heading.style.color = "blue";
heading.style.textTransform = "uppercase";

//section 5: Creating and adding elements

//create a new <p> tag
const newParagraph = document.createElement("p");
const newParagraph2 = document.createElement("p");

//give our new tag some text content
newParagraph.textContent = "I am a paragraph";
newParagraph2.textContent = "I am a ALSO paragraph";

//give out new paragraph a css class
newParagraph.classList.add("fancy-paragraph");
newParagraph2.classList.add("fancy-paragraph");
//append our new tag to the bottom of the page
document.body.append(newParagraph);
document.body.prepend(newParagraph2);

// append vs appendChild
//appendchild() only accepts **DOM nodes** (elements)
// append() can accept **DOM nodes OR text**, and also multiple things at once
//prepend out newParagraph2 to the top of the box1 div
box1.prepend(newParagraph2);

//insert an element somwhere in the middle of our page (before a spesific element)

const midParagraph = document.createElement("p");
midParagraph.textContent = "swag";
document.body.insertBefore(midParagraph, button);

//create an image element and add attributes to it
const newImage = document.createElement("img");
newImage.src =
  "https://iranfreshfruit.net/wp-content/uploads/2020/01/red-apple-fruit-600x600.jpg";

newImage.setAttribute("alt", "a red juicy apple");
newImage.setAttribute("width", "height");
document.body.append(newImage);

//dom node
//a dom node is any single part of the document tree:
// an element (like <p> or <div>)
// a text node (plain text)
// A comment node (<!--like this -->)
// most of the time, when youre wworking with elements, youre usin element nodes

//add a new list item to an existing list
//this has to be const not let
// 1- target our unordered list
const list = document.querySelector("#unordered-list");
//2- create our new li
const listItem3 = document.createElement("li");
//3 -add textContent to the li
listItem3.textContent = "Item 3";
//4- append the new li to out ul
list.append(listItem3);

//section 6 removing elements

const firstListItem = list.firstElementChild;
list.removeChild(firstListItem); //removed the first li from the list

console.log(list.parentElement);
console.log(list.children);
console.log(list.firstElementChild);
console.log(list.lastElementChild);

//section 8 Classlist methods
const newBox = document.createElement("div");

//add a class
newBox.classList.add("container");
newBox.classList.add("ugly-class");
//Toggle a class (remove if present, add if missing)
newBox.classList.toggle("border");
//append our newBox to the body
document.body.append(newBox);

console.log(newBox.classList.contains("border"));

//section 9 creating a list in a loop

//lets create a list of favorite movies and display them on the page

const favoriteMovies = [
  "The Matrix",
  "Interstellar",
  "Donnie Darko",
  "Insidious",
  "Cars 2",
  "Oppenheimer",
  "   Shutter island",
  "The square",
  "Memento",
  "Sinister  ",
  "The Odyssey",
];

//step 1 create a ol to hold our movies
const movieList = document.createElement("ol");
document.body.append(movieList);

//step 2- loop over our favorite movies array and create a list item for each movie, add the text content of each movie and append the movie to the movies list.

for (let movie of favoriteMovies) {
  const listItem = document.createElement("li"); //make a new li and store it in a new variable
  listItem.textContent = movie;
  listItem.id = movie.trim().replaceAll(" ", "-").toLowerCase(); //giving them an id each, trimming the whitespaces, removing the space between the names and replacing it with -, also making it lowercase.
	listItem.classList.add("movie")
  movieList.append(listItem);
}


//summary DOM(document object model)
//The DOM is how js connects to HTML
//use querySelector, getElementbyId etc to select elements
//use .texContent, .innerHTML, and .style to change content and appearance
//use createElement + appendChild/append to add elements
//use removeChild to delete elements
//DOM has a parent/child/sibling structure you can navigate
//classList helps manage CSS classes
//You can attach event listeners like click or mouseover
//prepend post it to the top