// array

const myArr = [0, 1, "y", 3, 4, 5, "ilyas"]
console.log(myArr[2]);

//Array methods

myArr.push(12)
myArr.push(7)
myArr.pop(1)

myArr.unshift(9)  // add new value at start
myArr.shift()    // remove first value 

console.log(myArr.includes(9)); // it'll check if we have this value in our arr.in boolean
console.log(myArr.indexOf(4)); //it'll show in which index asked value is.is its not -1.

const newArr = myArr.join() // our arr will be changed in string and binded it.

console.log(myArr);  // [0, 1, 2, 3, 4, 5, `ilyas`]
console.log(newArr);//  0,1,2,3,4,5,ilyas

// Slice , Splice

console.log("A", myArr);

const myna1 = myArr.slice(1,3) //slice doesn't manupulate original arr
console.log("slice", myna1);

console.log("B", myArr);

const myna2 = myArr.splice(1,3)  // splice manupulate original arr
console.log("c", myArr);

console.log("splice", myna2);

//-----

let arr=[ 1,2,3,4]
console.log(arr.slice(1,4))


