// events
// ondblclick  
// onclick

// cammel case
function myConsole() {}

// console.log("clicked")
// alert("clicked")

// *** "string"
// document.getElementById("test").innerHTML = "<h1>This is test Peragraph</h1>"

// *** number ( like 5 or  6) = with double quote
// *** string and number concatinate ( + )
// document.getElementById("test").innerHTML = "<h1>" + 5 * 6 + "</h1>"

// *** concatinate way 2 (string literal)
// document.getElementById("test").innerHTML = 5 * 6

// *** document.write
// document.write(5 * 6)

// objects
const person = { firstName: "John", lastName: "Doe", age: 45 };
const newPerson = person;
newPerson.age = 55;

// document.getElementById("test").innerHTML = person.firstName +" "+ person.lastName +" "+ person.age
// document.getElementById("test").innerHTML = `Hi This is : ${person.firstName} ${person.lastName} and my age is: ${person.age} `

// object
const person1 = new Object();

person1.firstName = "testName";
person1.lastName = "testLastName";
person1.age = 50;
// person1.eyeColor = "blue";
// document.getElementById("test").innerHTML = `Hi This is : ${person1.firstName} ${person1.lastName} and my age is: ${person1.age} `

let txt = "";
for (let i in person1) {
    txt += person[i] + " " + "</br>";
}

// document.getElementById("test").innerHTML = txt;


const cars = ["Saab", "Volvo", "BMW"];
// document.getElementById("myCar").innerHTML =  cars



// ===========================
// nested object array example
// ===========================

// let result = "";
// const myObj = {
//     name: "John",
//     age: 30,
//     cars: [
//         { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
//         { name: "BMW", models: ["320", "X3", "X5"] },
//         { name: "Fiat", models: ["500", "Panda"] },
//     ],
// };

// let pName = "<h2>" + myObj.name + "</h2>";
// // document.getElementById("test").innerHTML = pName;


// for (let i in myObj.cars) {
//     result += "<h2>" + myObj.cars[i].name + "</h2>";
//     for (let j in myObj.cars[i].models) {
//         result += myObj.cars[i].models[j] + "<br>";
//     }
// }

// document.getElementById("test").innerHTML = result;


const myObject = {
    firstName:"John",
    lastName: "Doe",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}

// document.getElementById("test").innerHTML = myObject.fullName()


const member = {
    firstName:"John",
    lastName: "Doe",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
  }
  
  const member1 = {
    firstName:"Hege",
    lastName: "Nilsen",
  }
  
//   let fullName = member.fullName();
//   document.getElementById("test").innerHTML = fullName;


    let fullName = member.fullName.bind(member1);
  document.getElementById("test").innerHTML = fullName();

// ===========================


function sum(...items) {
    // console.log(items)
    let sum = 0;
    for (let item of items) sum += item;
    return sum;
  }
  
let resX = sum(4, 9, 16, 25, 29, 100, 66, 77);
  
// document.getElementById("test").innerHTML = resX;




// *** JavaScript Scope
// *** Global scope
var x = 1;
x = 100;
// console.log("x==>", x);

// *** Block scope
let y = 1;
y = 10;
// console.log("y==>", y);

const z = 10;
// z = 20;
// console.log("z==>", z);

// if (true) {
//     var x = 2;
//     let y = 2;

// }
// console.log("x==>",x);
// console.log("y==>",y);

// JavaScript has 8 Datatypes
// 1. String
// 2. Number
// 3. Bigint
// 4. Boolean
// 5. Undefined
// 6. Null
// 7. Symbol
// 8. Object

// The Object Datatype
// The object data type can contain:

// 1. An object
// 2. An array
// 3. A date


// get max no from an array

let randomArray = [10, 51, 80, 12, 34  ]
// console.log(randomArray.length)

const maxNo = Math.max(...randomArray)
// console.log(maxNo)


const fruits = ["Banana", "Orange", "Apple", "Mango"];
// document.getElementById("demo").innerHTML = fruits.toString();
// var checkType =  fruits.toString()

// console.log(Array.isArray(checkType))
// console.log(fruits.sort())
// ]

const points = [40, 100, 1, 5, 25, 10];
for (let i = points.length -1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i+1));
    let k = points[i];
    points[i] = points[j];
    points[j] = k;
}
document.getElementById("demo").innerHTML = points;