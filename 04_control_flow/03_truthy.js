const userEmail = "ilyas@.email"

if(userEmail){    //here, we didn't chk if its trues/false or didn't chk ==condition, we just chked if we have value or not(we assume) 
    console.log("got user value");
    
}else{
    console.log("don't have user value"); 
    
}

// if we just assign empty string..  without any spacing...
const userEmail2 = ""    //empty string


if(userEmail2){    //here, we didn't chk if its trues/false or didn't chk ==condition, we just chked if we have value or not(we assume) 
    console.log("got user vaue");
    
}else{
    console.log("don't have user value"); //this condition will execute cause value is empty string
    
}
//even empty arrays are truthy value.

// Q: which are truethy values and falsey values?

//ans: #truehy values: "0", `false`, "  ", [], function(){}
//     #falsey values: false, 0, -0, BigInt 0n, null, undefined, NaN


//how to chk empty array:
const emptyarr = []
if(emptyarr.length===0){
    console.log("arr is empty");
}

//how to chk empty object:

const emptyObj = {}

if (Object.keys(emptyObj).length===0){  //this "(Object.keys(emptyObj)" returns array so we use .length
    console.log("Object is empty");
}

//Nullish Coalescing Operator(??): null undefined

let val1;
// val1 = 5??10  //5
// val1 = null ?? 10 //10
// val1 = undefined ?? 15 //15
   val1 = null ?? 10 ?? 15 //10
 
//BASICALLY FIRST VALUE WILL BE ASSIGNED

console.log(val1);

//Terniary Operator:

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");

