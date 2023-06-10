// console.log("yes");

// function myFirstFunction() {
//   console.log("I just called my first function");
// }
// myFirstFunction();

// function addString(param1, param2, param3) {
//     console.log(`${param1} and ${param2} and ${param3}`);
// }

// addString("Argument1","Argument2")

// function funcWtithParams(num1, num2) {
//   return num1 + num2;
// }
// funcWtithParams(3, 5);
// console.log(funcWtithParams(3, 4));
// if (funcWtithParams() === 7) {
//   console.log("Right answer");
// } else {
//   console.log("Wronnnnng wha whaaaa");
// }

// function laLakers(win) {
//   if (win) {
//     console.log("The lakers draw series");
//   } else {
//     console.log("LA Lakers down 2");
//   }
// }
// console.log(laLakers(1));

// function addString(text) {
//   if (text === "") {
//     return "true";
//   } else {
//     return "false";
//   }
// }
// console.log(addString());
// console.log(addString("a"));

// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   greeting: function (name) {
//     console.log(`Hi ${name}, weather is Good.`);
//   },
// };

// function halfNumber(num1, num2) {}

// const person = {
//   firstName: "Mo",
//   lastName: "Co",
// };
// function printNameFromObject(p) {
//   console.log(`Hello ${p.firstName}${p.lastName}`);
// }
// printNameFromObject(person);
// // function in object
// const person2 = {
//   firstName: "Mo",
//   lastName: "Co",
//   greeting: function () {
//     console.log("Hello World");
//   },
// };
// person2.greeting();

// let halfNumber = 10;
// let halfNumber2 = function (halvedNumber) {
//   return halfNumber / 2;
// };
// console.log(`Half of ${halfNumber} is ${halfNumber2} `);

// const calculator = {
//   add: function (a, b) {
//     return a + b;
//   },
//   subtract: function (a, b) {
//     return a - b;
//   },
// };
// const str = "The quick brown fox jumps over the lazy dog.";
// console.log(str.split(" "));
// console.log(str.split(""));

// const userMessage = prompt("Please Enter your non-relevent opinion here!");
// const trmMessage = userMessage.trim();
// console.log(userMessage);
// console.log(trmMessage);
// if (trmMessage.length <= 10) {
//   alert(trmMessage.toUpperCase());
// } else {
//   alert(trmMessage.toLowerCase());
// }

// let cat = {
//   firstName: "Kitty",
//   lastName: "Kat",
// };

// cat.favouriteColour = "Brown";
// console.log(
//   `This is ${cat.firstName} ${cat.lastName}, and their favourite colour is ${cat.favouriteColour}`
// );

// const parallelogram = {
//   Base: 3,
//   Height: 2,
//   secondMeasure: 2,
// };
// const parallelogramPerimenter =
//   (parallelogram["Base"] + parallelogram["Height"]) *
//   parallelogram["secondMeasure"];
// parallelogram.screwTrapezoid = 2;
// parallelogram.Base = parallelogram.Base * 2;
// delete parallelogram.secondMeasure;
// console.log(parallelogram);

// let guess;
// const secretNumber = 3;
// while (guess != secretNumber) {
//   guess = prompt("have a go");
//   console.log(`It's a ${guess}`);
// }

// let correct;
// const number = 55;
// while (correct != number) {
//   correct = prompt("Guess a number");
//   console.log(`Yes... it is the number ${correct}`);
// }

// let hide;
// const hiddenNumber = 69;
// while (hide != hiddenNumber) {
//   hide = prompt("Guess Number");
//   console.log(`It's a ${hide}`);
// }

// const score = window.prompt("Please input your score");
// console.log(score);
// if (score == 100) {
//   console.log("Godly. Perfect score");
// } else if (score >= 91) {
//   console.log("OUTSTANDING effort. Good stuff");
// } else if (score > 90) {
//   console.log("Very good");
// } else if (score > 80) {
//   console.log("Good score");
// } else if (score > 70) {
//   console.log("Okay score");
// } else if (score > 60) {
//   console.log("average");
// } else if (score > 50) {
//   console.log("Litte bit good, little bit shit :(");
// } else if (score <= 49) {
//   console.log("Yeah, pretty shit");
// }

// let x = 0;
// while (true) {
//   if (x === 3) {
//     console.log("x is now 3");
//   }
//   if (x === 10) {
//     console.log("x is now 10");
//   }
//   if (x === 15) {
//     console.log("x is now 15, goodbye...");
//     break;
//   }
//   x++;
// }

// const myString = `Hell@ the#e`;
// for (let i = 0; i < myString.length; i++) {
//   if (myString[i] === "@") {
//     console.log(`Error input in ${myString[i]}. Please fix!!!`);
//     continue;
//   }
//   if (myString[i] === "#") {
//     console.log(`Error input in ${myString[i]}. Will stop until fixed`);
//     break;
//   }
// }
// const student = {
//   name: "Rob",
//   age: 5,
//   isAdmin: true,
// };
// for (const key in student) {
//   console.log(key); // name, age, isAdmin
//   console.log(student[key]); // Rob, 5, true
// }

// const user = {
//   name: "John",
//   age: 5,
//   isAdmin: true,
// };
// for (const key in user) {
//   if (key === "age");
//   console.log(user[key]);
// }

// let myFavNumbers = {
//   favNum1: 2846,
//   favNum2: 4312,
//   favNum3: 8842,
// };
// let sum = 0;
// for (const key in myFavNumbers) {
//   sum += myFavNumbers[key];
// }
// console.log(sum);

// function myFirstFunction() {
//   console.log("I just called my first function");
// }
// myFirstFunction(); //This is a function call//

function sums(num1, num2) {
  return num1 + num2;
}
sums(3, 4);
