const saleBtn = document.querySelector("#sale-btn"); 

const fruits = [
  { name: "Apple", color: "Red", calories: 52, pricePerKg: 3.5, origin: "USA" },
  {
    name: "Banana",
    color: "Yellow",
    calories: 89,
    pricePerKg: 1.2,
    origin: "Ecuador",
  },
  {
    name: "Orange",
    color: "Orange",
    calories: 47,
    pricePerKg: 2.8,
    origin: "Spain",
  },
  {
    name: "Strawberry",
    color: "Red",
    calories: 32,
    pricePerKg: 6.0,
    origin: "Mexico",
  },
  {
    name: "Mango",
    color: "Orange",
    calories: 60,
    pricePerKg: 4.0,
    origin: "India",
  },
  {
    name: "Grapes",
    color: "Green",
    calories: 69,
    pricePerKg: 2.5,
    origin: "Italy",
  },
  {
    name: "Pineapple",
    color: "Brown",
    calories: 50,
    pricePerKg: 3.0,
    origin: "Costa Rica",
  },
];

//Create section element to hold our cards. document.createElement to make it. classList.add to style it append to print to page
//creating the element as a section
const fruitSection = document.createElement("section");

//giving it a class
fruitSection.classList.add("fruit-section");

document.body.append(fruitSection);

//for..of loop to create and print the card in these steps:
//article > h2, img, p, p, p and also
//give them classes for stying
//give text content / img src
//append the h2, img, p, p, p, to the article
//append the article to the fruit section

for (let fruit of fruits) {
  const card = document.createElement("article"); //creating the article
  card.classList.add("card"); //creating classlist for styling
  //create h2 and give it a class

  const fruitTitle = document.createElement("h2");
  fruitTitle.classList.add("fruit-title");
  fruitTitle.textContent = `${fruit.name}`;

  //create img and give it a class and a src + alt attribute
  const fruitImg = document.createElement("img");
  fruitImg.classList.add("fruit-img");
  fruitImg.src = `images/${fruit.name}.jpg`;

  //create p for info and give it a class and textContent
  const fruitInfo = document.createElement("p");
  fruitInfo.classList.add("fruit-info");
  fruitInfo.textContent = `Color: ${fruit.color}, Country ${fruit.origin}`;

  //create p for calories and give it a class and textContent
  const fruitCalories = document.createElement("p");
  fruitCalories.classList.add("fruit-calories");
  fruitCalories.textContent = `Calories: ${fruit.calories} per 100g`;

  //create p for price and give it a class and textContent
  const fruitPrice = document.createElement("p");
  fruitPrice.classList.add("fruit-price");
  fruitPrice.textContent = `Price: ${fruit.pricePerKg}kr/kg`;

  //append the hr, img and p's to the card before appending the card itself

  card.append(fruitTitle, fruitImg, fruitInfo, fruitCalories, fruitPrice);

  //appending the card to the fruitSection
  fruitSection.append(card);

  //randomly put fruit on 50% sale

  //if on sale, strrikethrough normal price and add a new p to hold the sale price

  fruit.sale = Math.random() < 0.5;
	
	if (fruit.sale) {
		fruitPrice.classList.add("strikethrough");

		const salePrice = document.createElement("p")
		salePrice.classList.add("sale")
		salePrice.textContent = `${fruit.pricePerKg / 2} kr/kg`;
		card.append(salePrice);
	}
}

saleBtn.addEventListener("click", showSales );

function showSales() {
for (let fruit of fruits) {
	if (!fruit.sale){
		card.classList.toggle("toggleVisibility");
	}
}
}