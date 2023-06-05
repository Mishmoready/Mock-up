// console.log("hello");
// document.body.innerHTML = "<h1>red Bros</h1>";
// document.body.style.backgroundColor = "red";

// function changeColour() {
//   if (document.body.style.background === "red") {
//     document.body.style.background = "white";
//   } else {
//     document.body.style.background = "red";
//   }
// }

// let currentColour = 0;
// function changeColour() {
//   const colourArray = ["white", "blue", "red", "yellow", "burlywood", "green"];

//   if (currentColour === colourArray.length - 1) {
//     currentColour = 0;
//   } else {
//     currentColour++;
//   }
//   document.body.style.background = colourArray[currentColour];
// }
// console.log(document);

// //Selectors
// document.querySelector(".header-class").textContent =
//   "Look! My text content has changed.";

// document.getElementById("header-id").style.color = "green";

// const helloWorldHeader = document.getElementById("helloWorldHeader");
// helloWorldHeader.style.fontSize = "20px";

// let counter = 0;
// function incrementByOne() {
//   counter = counter + 1;
//   console.log(counter);
// }

// function funcWithParams(num1, num2) {
//   return num1 + num2;
// }
// console.log(funcWithParams(3, 4));

// let funcAnswer = funcWithParams(3, 4);
// if (funcAnswer === 7) {
//   console.log("the answer is right");
// } else {
//   console.log("the answer is wrong");
// }

// // function expression
// constfuncWithParamsExpression = function (num1, num2) {
//   return num1 + num2;
//   console.log(num1 + num2);
// };

// function checkString(str) {
//   if (str === "") {
//     return false;
//   } else {
//     return true;
//   }
// }
// console.log(checkString(""));
// console.log(checkString("Hello"));

//Exercise 4.1
// function halfNumber1(num) {
//   return num / 2;
// }
// const number = 5;
// const result1 = halfNumber1(number);
// console.log(halfNumber1(10));
// console.log(result1);
// console.log(`half of ${number} is ${result1}`);

// //Exercise 4.2
// function timeInSeconds(sec)

// const str = "The quick brown fox jumps over the lazy dog.";
// console.log(str.split(""));
// console.log(str.split(" "));

// "CAN YOU HEAR ME".toLowerCase(); // OUTPUT -"can you hear me"
// "Is this mic on?".toUpperCase(); // OUTPUT -"IS THIS MIC ON?"
// " trim or not to trim, but keep the middle spaces ".trim(); // OUTPUT -"trim or not to trim, but keep the middle spaces"

// const x = -1;

// if (x > 1) {
//   console.log(`positive result`);
// } else if (x === 1) {
//   console.log(`x is 0`);
// } else {
//   console.log(`x is negative`);
// }

// let myString = "1 apple";
// if (myString[0] === "a") {
//   console.log(true);
// } else {
//   console.log(false);
// }

// const word = "hippopotamus";
// if (word[0]==="h"){
//   console.log("The word might be hippopotamus");
// }else{
//   console.log("The word is definitely not hippopotamus")
// }

// document.body;

// document.body.innerHTML = "<h1>Hello World</h1>";

// document.body.style.background = "blue";

// function changeColour() {
//   document.body.style.background = "blue";
// }

// function changeColour() {
//   if (document.body.style.background === "blue") {
//     document.body.style.background = "white";
//   } else {
//     document.body.style.background = "blue";
//   }
// }
// let currentColour = 0;
// function changeColour() {
//   const colourArray = [
//     "white",
//     "blue",
//     "red",
//     "green",
//     "yellow",
//     "orange",
//     "burlywood",
//   ];
// if (currentColour===5){
//     currentColour=0;
// }else{
//     currentColour++;
// }
//   document.body.style.background = colourArray[currentColour];
// }

// document.querySelector (); //gets an element by its CSS selector but only returns the first matching element
// document.querySelectorAll (); //gets all elements that match the given selector
// document.getElementById (); //gets an element by its id but only returns the first matching element
// document.getElementsByClassName (); //gets all elements with a certain class name
// document.getElementsByTagName (); //gets all elements with a specified tag name

// const helloWorldHeader=document.getElementById('helloWorldHeader');

// helloWorldHeader.style.fontSize='10px;'

// helloWorldHeader.textContent = "Look! My text contect has changed.";

// const helloWorldHeader = document.querySelector("h1");

// const helloWorldHeader = document.querySelector("#helloWorldHeader");

// helloWorldHeader.style.fontSize = "10px";
// helloWorldHeader.textContent = "Look! My text content has changed.";

// onchange; //when a change is detected to an element
// onmouseover; //when the mouse is moved over the object
// onmouseout; //when the mouse is moved out of the object
// onkeydown; //when the user pushes a key on the keyboard
// onload; //when the browser has finished loading the page
// oninput; //each time a new character is added or taken away in an input field
// onsubmit; //specific to form elements, handles the submission of a form

// const myDiv = document.getElementById("divId");
// myDiv.addEventListener("mouseover", function () {
//   myDiv.style.background = "blue";
// });

// myDiv.addEventListener("mouseout", function () {
//   someElement.style.background = "pink";
// });

// function changeToPink() {
//   myDiv.style.background = "pink";
// }
// myDiv.addEventListener("mouseout", changeToPink);

let times = (a, b) => a * b;
console.log(3, 5);
