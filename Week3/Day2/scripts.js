console.log("i am living");

if (Boolean_conditional) {
  console.log("boolean conditional resolved to true");
}
else {
  console.log("boolean conditional resolved to false");
}

console.log(Boolean(false));
console.log(!false);
console.log(true && false);
console.log(true || false);

let x = 4,
  y = 2;
z = 0;
if (x == 4 && (!(y == 1) || z == 0)) {
  /*(!(y == 1) Is true due to y does not equal to 4 and || z == 0)) z is 0... results code being true */ console.log(
    true
  );
} else {
  console.log(false);
}
console.log(2 == "2");

// Exercise 1
console.log(2 == "2");
console.log(2 === 2);
console.log(10 % 3);
console.log(10 % 3 === 1);
console.log(true && false);
console.log(false || true);
console.log(true || false);

// Exercise 2
const cat = {
  firstName: "Lebron",
  lastName: "James",
  favouriteColor: "Gold-Purple",
};
console.log(
  `I'm`,
  cat.firstName,
  cat.lastName,
  "the favourite color is",
  cat.favouriteColor,
  "."
);
// OR
console.log(
  `I'm ${cat.firstName} ${cat.lastName}, the favourite color is ${cat.favouriteColor}.`
);

const myString = "favouriteColor";
console.log(cat[myString]);

const rectangle = {
  length: 10,
  width: 50,
};

console.log(rectangle["width"] * rectangle["length"]);

const myLength = "length";
const myWidth = "width";
const areaOfRectangle2 = rectangle[myLength] * rectangle[myWidth];

let person = {
  firstName: "John",
  lastName: "Doe",
};
person.firstName = "Jane";
console.log(person); //Output:Jane

cat.favouriteColour = "Purple";

delete cat.lastName;

console.log(Boolean(false));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(0));
console.log(Boolean(NaN));