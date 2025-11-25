
/* #Primitive: Call by value

types: 7 types
1. String, 2.Number, 3.Boolean, 4.null, 5.undefined, 6.Symbol, 7.BigInt.

*/

// const score = 100;
// const scoreValue = 100.3;

// const isLoggedIn = false;
// const outsideTemp= null;

// let userEmail;

// const id =Symbol('123');
// const id2=Symbol('123');

// console.log(id === id2);  //false

// // const bigNumber = 123456789n
// /*

//    #Refrence(Non-primitive): Call by
 
// types: 3 types
// 1. Arrays, 2.Objects, 3.Functions.

// */

// const heros = ["Ironman", "Thor", "C.America" ] // []=arrays

// let myObj={    // {}=Object
//    name: "ilyas",
//    age:25,
// }

// const myFuction = function(){
//    console.log("Hello world ");
// }

// // How to find data type:
// console.log(typeof bigNumber);    //undefined
// console.log(typeof outsideTemp);  //object
// console.log(typeof scoreValue);   //number
// console.log(typeof myFuction);   //function
// console.log(typeof id2);         //symbol


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Stack (Primitive), Heap (Non-Primitive)

let myName = "ilyas"

let anotherName = "myName"
anotherName = "umar"

console.log(myName);
console.log(anotherName);

let userOne = {
   email: "user@.com",
   upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "ilyas@.com"

console.log(userOne.email);
console.log(userTwo.email);
 
