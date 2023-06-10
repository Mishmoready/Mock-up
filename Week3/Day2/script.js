let newPerson = {
  firstName: "Lebron",
  lastName: "James",
  favouriteNumber: 23,
  favouriteDay: "Taco Tuesday",
};
console.log(
  `I'm ${newPerson.firstName} 
  ${newPerson.lastName} my favourite Number is 
  ${newPerson.favouriteNumber} 
  and my favourite day is ${newPerson.favouriteDay}`
);
newPerson.favouriteFood = "Tacos";
console.log(newPerson);

delete newPerson.favouriteDay;
newPerson.favouriteNumber = newPerson.favouriteNumber * 2;
