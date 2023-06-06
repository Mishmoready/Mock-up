import logo from "./logo.svg";
import "./App.css";
import Greeting from "./Greeting.js";
import Car from "./Car.js";

const numbers = [1, 4, 9];
const root = numbers.map(function (number) {
  return number + 1;
});
console.log(root);

const fruity = ["apple", "mango", "orange"];

const newArray = fruity.map((fruit, index) => `${index}. ${fruit}`);
console.log(newArray);

const morefruits = [
  {
    name: "Apple",
    units: 3,
    singlePrice: 0.25,
  },
  {
    name: "Mango",
    units: 6,
    singlePrice: 0.35,
  },
  {
    name: "Banana",
    units: 4,
    singlePrice: 0.15,
  },
];

const fruityArray = morefruits.map(function (fruit, index) {
  return `${
    index + 1
  }) ${fruit.units} units of ${fruit.name} costs $ ${(fruit.singlePrice * fruit.units).toFixed(2)}`;
});
console.log(fruityArray);

const users = [
  { id: 1, name: "Sally Rogers" },
  { id: 2, name: "Buddy Sorrell" },
  { id: 3, name: "Millie Helper" },
];

//Object Destructuring
const user = {
  id: 99,
  isVerified: true,
};
user.id = 50;

const { id, isVerified } = user;

console.log(id, isVerified);

function App() {
  return (
    <div className="App">
      <Greeting />
      <Car carName="Toyota" />
      {users.map(function (user) {
        return <div>{user.name}</div>;
      })}

      {/* {[<div>"hello"</div>, <div>"there"</div>, <div>2</div>]} */}
    </div>
  );
}

let person = {
  firstName: "John",
  lastName: "Wick",
};

// let fName = person.firstName;
// let lName = person.lastName;

let { firstName: fName, lastName: lName } = person;
console.log(fName, lName);

// return (
//   <div>
//     {users.map((user) => (
//       <div>{user.name}</div>
//     ))}
//   </div>
// );

const myObj = {
  id: 1,
  name: "John Wick",
  username: "JohnW",
  email: "Sincere@april.biz",
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
  company: {
    companyName: "Romaguera-Crona",
    catchPhrase: "It's collaboration time",
    bs: "harness real-time e-markets",
  },
};
let { username, email } = myObj;
console.log(username);
console.log(email);

export default App;
