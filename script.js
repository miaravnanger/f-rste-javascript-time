//8: Objects
//1 whats an object?
//an object stores related data using key-value pairs

const person = {
  name: "Alice",
  age: 28,
  job: "Designer",
};
console.log(person); //logs the entire object
console.log(person.name); //accessing value with dot notation
console.log(person["age"]); //access with bracket notation

//dot vs bracket: use dot when you know the key name code time: person.name. Use brackets when the ey is dynamic or not a valid identifier: person[Key]

//section 2, creating, modifying and deleting keys in objects
//adding a new key
person.country = "Norway";
//just pretend it exist, and then it does
console.log(person);
//modifying an existing key
person.job = "coder";
//just reassigning it
//removing an existing key
delete person.age;
//dimply deleting the key
console.log(person);

//3 looping through object using "for in" loop

const user = {
  name: "Joe",
  age: 37,
  location: "Stavanger",
  hobby: "gaming",
  address: "homeless",
};
console.log(user["name"]);
for (let key in user) {
  console.log(user.key); //returns undefined so we use bracket notation instead

  console.log(key); //logs the keys
  user[key] += "."; //modifies the value and adds a full stop to the end of each
  console.log(user[key]); //loops through values using bracket notation
}

//4 nested objects and arrays

const userData = {
  firstName: "Olav",
  lastName: "Hansen",
  age: 31,
  isMale: true,
  hobbies: ["Golf", "Hiking", "Cinema"],
  address: {
    streetName: "Solskinnsgaten",
    streetNumber: 38,
    postCode: 4050,
  },
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  }, //this refers to the object, so the objects firstName and lastName
	addMiddleName: function (middle) {
		this.middleName = middle;
	},
};
console.log(userData.fullName()); //created a method/built in function
userData.addMiddleName("Trond");
console.log(userData.middleName);

userData.hobbies.push("Fishing"); //adding a new value(fishing) to the existing array(hobbies)
console.log(userData.hobbies); //checking to see that push worked
console.log(userData.address.streetNumber); //targeting streetnumber
console.log(userData.hobbies[2]); //targeting cinema (hobbies array index 2)

//5, arrays of objects

const products = [
  { productName: "Shirt", productId: 746352, stock: 32 },
  { productName: "Pants", productId: 745652, stock: 5 },
  { productName: "Socks", productId: 749345, stock: 22 },
];

console.log(products);

for (let product of products) {
  console.log(
    `The product: ${product.productName}, has the productID of: ${product.productId} and has ${product.stock} in stock`
  );
}

//section 6: descriptive sentences with objects

const people = [
  {
    name: "Thomas",
    isMale: true,
    age: 23,
    hobbies: ["cycling", "football", "pool"],
  },
  {
    name: "Susan",
    isMale: false,
    age: 26,
    hobbies: ["jogging", "travelling", "dancing"],
  },
  {
    name: "Monica",
    isMale: false,
    age: 21,
    hobbies: ["skateboarding", "guitar", "concerts"],
  },
  {
    name: "Avery",
    isMale: true,
    age: 28,
    hobbies: ["coding", "games", "memes"],
  },
  {
    name: "Phillip",
    isMale: true,
    age: 24,
    hobbies: ["boxing", "wrestling", "mma"],
  },
  {
    name: "Otto",
    isMale: true,
    age: 36,
    hobbies: ["movies", "cinema", "music"],
  },
  {
    name: "Annabelle",
    isMale: false,
    age: 30,
    hobbies: ["makeup", "fashion", "shopping"],
  },
  {
    name: "Cathy",
    isMale: false,
    age: 18,
    hobbies: ["design", "drawing", "css"],
  },
];

// console.log(people);
//Cathy is 18 years old
//cathy is 18 years ols and enjoys css
//cathy is 18 years old and enjoys random hobby

for (let person of people) {
  const hobbyLength = Math.floor(Math.random() * person.hobbies.length);

  console.log(
    `${person.name} is ${person.isMale ? "male" : "female"} ${
      person.age
    } years old and enjoys ${person.hobbies[hobbyLength]}`
  );
}

//section 7: workign with object data

//calculate total age of all people
let totalAge = 0;
//make a global variable with total age
for (let person of people) {
  totalAge += person.age; //create a loop where you increase the totalAge variable with the age each time the loop runs
}
console.log(`total compined age: ${totalAge}`);

//section 8 combining hobbies with spread syntax
//put all hobbies into one array
for (let person of people) {
  console.log(person.hobbies);
  console.log(...person.hobbies); //logs the content of the array instead of the actual array
}

const allHobbies = [];
for (let person of people) {
  allHobbies.push(...person.hobbies);
}

//se if you can make sure there are just one of each.
//if/else?
console.log(allHobbies);

//section 9: adding new properties to objects in an array

// add a new key called title
//if person.isMale = true  title = "Mr."
//if person.isMale = true  title = "Ms."
for (let person of people) {
  person.title = person.isMale ? "Mr." : "Ms.";
}
console.log(people);
