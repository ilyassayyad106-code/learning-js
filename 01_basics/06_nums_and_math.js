// const score = 400
// console.log(score);            //400

// const balance = new Number (100)
// console.log(balance);        //[Number: 100]

// console.log(balance.toString());   // 100 converted to string
// console.log(balance.toFixed(2));  //  100.00

// const otherNumber = 123.8966
// console.log(otherNumber.toPrecision(4)); // 123.9
// console.log(otherNumber.toPrecision(3));//  124


// console.log(hundreds.toLocaleString());         // 1,000,000 : by default US standards
// console.log(hundreds.toLocaleString(`en-IN`)); //  10,00,000 : by Indian standards

// +++++++++++++++++++++++++++++++ MATHS +++++++++++++++++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4));  //abs= absolute value. (negaive to positive)= 4
console.log(Math.round(4.6)); //roundof = 5
console.log(Math.ceil(4.2)); //ceil = ceiling.if value gets lil bit heigher than 4 it will convert it to top value=5.
console.log(Math.floor(4.9));//even if value is lil heigher than 4 it'll convert it to lowest value=4.
console.log((Math.min(7,9,5,4,2))); // finds minimum value=2.
console.log(Math.max(7,9,5,4,2));  //finds maximum value=9.

console.log(Math.random());// its value always will be betn. 0 to 1.
console.log(Math.random()*10);//in some project we need to set range.like for making dice game
// but its vlue always will be betn 0 to 1. so to avoid values like 0.3630..we will add +1.
console.log((Math.random()*10) +1);

console.log(Math.floor(Math.random()*10) +1);

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max - min + 1)) + min);



















