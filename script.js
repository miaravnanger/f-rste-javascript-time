//lesson 3 recap

//section 1 variables, data types, operators

//scenarion: an online store managing product detailn

const storeName = "Tech Haven"; //string
const productName = "Wireless Earbuds"; //string
let productPrice = 75; //integer number
let productQuantity = 5; //integer
const isInStock = true; //boolean
const productTags = ["audio", "wireless", "accessory"]; //array
let onSale; //undefined

console.log("store name:", storeName);
console.log("Product name:", productName);
console.log("product Tags:", productTags[1], productTags[2]);

//see more contents of thee array using spread syntax (will learn this more later)
console.log("Product Tags:", ...productTags);

//calculate the total cost for the avaliable quantity
const totalValue = productPrice * productQuantity;
console.log("Total value of in stod wireless earbuds is:", totalValue);

//increase product prise by 10
//productPrice = productPrice + 10; -we dont do this
productPrice += 10;
console.log(productPrice);

//increase productQuantity by 1

//productQuantity += 1 -we dont do this
productQuantity++;

//decrease productQuantity by 1

productQuantity--;
console.log(productQuantity);

//section 2 conditionals and logical operators

//ex: decide promotion messages based on basket size.

let basketSize = 300;

if (basketSize > 300) {
  console.log("you qualify for free delivery");
}
//if the costumer has over 250 in their basket, we console.log
else if (basketSize >= 250) {
  console.log("you're close to free delivery, spend 300 to qualify");
} else {
  console.log("if you spend over 300, you'll get free delivery");
}

// logical operators && and ||

//scenario: message if the product is in stock and either is on sale or the quantity is high

onSale = true;
//
if (isInStock && (onSale || productQuantity > 10)) {
  console.log("you get 15% off this product");
} else {
  console.log("No discount for you, loser!");
}

// Ternary - if basketSize > 250 console.log("free shipping"), otherwise console.log ("15 dollar fee") use a ternary
let fee = basketSize > 250 ? "free shipping" : "$15 fee";
console.log(fee);

let ShippingCost = basketSize > 250 ? "Free shipping" : "$15 fee";
console.log(ShippingCost);

// Switch statement : display messages based on the product category

let category = "accessories";

switch (category) {
  case "audio":
    console.log("this product is in our Aurdio department");
    break;
  case "accessories":
    console.log("this is in our sccessories section");
    break;
  case "gadget":
    console.log("this is in the gadgets collection");
    break;

  default:
    console.log("this product must be uncategorized");
}

//section 3
//typeof opeator to check datatype

console.log(typeof storeName);
console.log(typeof productPrice);
console.log(typeof isInStock);
console.log(typeof productTags);

// demo truthy falsey

const dataType = "string";
if (dataType) {
  console.log("This came back true");
} else {
  console.log("this came back false");
}

//section 4 template literals // template string

//can concatenate things in the string easier.

const firstName = "Alex";
const lastName = "Miller";
const city = "London";
const country = "England";

const welcomeMessage = `welcome ${firstName} ${lastName} from ${city}, ${country}! We hope you enjoy shopping with us!`;
console.log(welcomeMessage);

const productInfo = `we currently have ${productQuantity} ${productName} in stock. The department tags for this product are ${productTags.join(
  ", "
)}`;
//.join gjør at arrayen blir en string, så tar du i parantes det du vil ha mellom hver ting
console.log(productInfo);

//Mixing ternary and template strings.

// basketSize > 250 ? "are" : "aren't";

basketSize = 10;
const basketMessage = `You ${
  basketSize > 250 ? "are" : "aren't"
} eligible for free delivery`;
console.log(basketMessage);
