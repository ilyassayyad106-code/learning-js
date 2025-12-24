//IIFE: Immediately Invoke Function Expressions:
// A function that runs Immediately after it is defined.


//syntax in classic funcion:
( function iifetest (){      //named iife (we gave this function a name)
    console.log("in normal IIFE executed");
}) (); //to execute next iife code use semicoln ; to end this code


//syntax in arrow:
( ()=>{    //simple iife
    console.log("in arrow IIFE excuted");
}) (); //this wont execute if we dont use semicoln at end of first code. 


//imp for interview:
// to execute next iife code we have to use semocoln ; at end of first code
//1) to avoid global scope pollution
//2)to execute code immediately

//ex2: with variable:

( (name) =>{      // it took name as argument here
    console.log(`iife executed ${name}`);
    
}) ('ilyas') // it took ilyas as parameter