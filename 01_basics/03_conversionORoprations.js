let score = 34

console.log(typeof score);      //number
console.log(typeof(score));     //number

let Score = "34abc"

console.log(typeof Score);      //string
console.log(typeof(Score));     //string

let valueInNumber = Number(Score);

console.log(typeof valueInNumber);  //number
console.log( valueInNumber);        //NaN 

let value1 = NaN;
console.log(value1);  //NaN

let value2 = undefined;
console.log(value2); //undefined

let valueInNumber2 = Number(value2);
console.log(valueInNumber2);  // NaN

let value3 = null;
console.log(value3);  //null

let valueInNumber3 = Number(value3);
console.log(valueInNumber3);  // 0

let value4 = true;
console.log(value4);  //true

let valueInNumber4 =Number(value4);
console.log(valueInNumber4);  //1

// "34" => 34
//"34abc"=>NaN
//true => 1 ; false => 0

let isLoggedIn = 1;
let booleanisLoggedIn = Boolean(isLoggedIn);
console.log(booleanisLoggedIn);   //true

// 1 => true ; 0 => false
// " " => false
//"ilyas" => true

let someNumber = 55;

let stringNumber = String(someNumber);
console.log(stringNumber);   //55
console.log(typeof stringNumber); //string
