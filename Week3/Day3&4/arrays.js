// console.log("Array!");
// const myArray = ["Noodles", "Apples", "Pizzas"];
// console.log(myArray[0]);

// myArray[2] = "Pineapple";
// console.log(myArray);

// const myNumbers = [5, 6, 7, 8, 9, 10];
// let sum =
//   myNumbers[0] +
//   myNumbers[1] +
//   myNumbers[2] +
//   myNumbers[3] +
//   myNumbers[4] +
//   myNumbers[5];
// const average = sum / myNumbers.length;
// console.log(average);

// const arrayOfNumbersBooleansStrings = [3, 3, true, 6, false, true, "1", 6];
// const arrayOfObjects = [
//   {
//     name: "Buddy",
//     favColour: "blue", //index 0
//   },
//   {
//     name: "Sally",
//     favColour: "purple", //index 1
//   },
// ];
// const result = arrayOfObjects[0];
// const getTheColor = result.favColour;
// console.log(result);
// console.log(getTheColor);
// console.log(arrayOfObjects[1].favColour);

// const food = {
//   title: "Deep Dish Pizza",
//   servings: 4,
//   recipe: ["dough", "tomatos", "pizza sauce", "loads of cheese"],
// };
// console.log(food);
// let newRecipe = "Water";
// console.log(`There's ${food.recipe.length} in the pizza recipe`);
// food.recipe.push("water");
// console.log(food);
/*initialExpression;conditionExpression;incrementExpression*/

// for (let i = 10; i >= 1; i--) {
//   console.log(i);
// }
// const myString = "Responsiveness";
// for (let i = 0; i < myString.length; i++) {
//   console.log(myString[i]);
// }

// for (let i = 0; i <= recipe.length - 1; i++) {
//   console.log(recipe[i]);
// }
// const recipe = ["dough", "tomatos", "pizza sauce", "loads of cheese"];

// for (items of recipe) {
//   console.log(`I like following ${items}.`);
// }

// const fruit = ["apple", "banana", "cherry"];

// const array = [5, 6, 7, 8, 9, 10];
// let sum = 0;
// for (x = 5; x <= 10; x++) {
//   sum = sum + x;
// }
// console.log(sum);
// const firstItem = fido.loves[0];
// console.log(firstItem); //Output: "walk"

// const firstItem = fido[]

let myArray = [];
myArray.push("Auckland", "Wellington", "Queenstown", "Napier");
console.log("Length of the array:", myArray.length);
console.log("Element at index 2:", myArray[2]);
let poppedElement = myArray.pop();
console.log(poppedElement, "Popped element");
console.log(myArray);
let napierIndex = myArray.indexOf("Napier");
console.log("Index of 'Napier':", napierIndex);

let information = {
  name: "Moses",
  age: "50",
  citiesBeento: ["Auckland", "Rotorua", "Wellington"],
};
console.log(information, information.citiesBeento.length);
console.log(information.citiesBeento);
information.citiesBeento.push("Sydney");
console.log(information);
