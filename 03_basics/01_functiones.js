// normal code: this is how we print something 

// console.log("I");
// console.log("L");
// console.log("Y");
// console.log("A");
// console.log("S");

//Functions:

function sayMyName(){
    
 console.log("I");
 console.log("L");
 console.log("Y");
 console.log("A");
 console.log("S");
}
// sayMyName()

function addTwoNumbers(number1, number2){//when we create defn.of functions,(xyz1, xyz2)are called parameters 
    console.log(number1 + number2);
}
//   addTwoNumbers(7 , 8) //when we call functions (xyz,xyz)are called arguments
//   addTwoNumbers(7, "2") // 72 as a string
//   addTwoNumbers(7 , "b" ) // 7b
  addTwoNumbers(7, null) //7

  // return:

  function loginUserMassage(username){
    return `${username} just logged in`
  }
  console.log(loginUserMassage("ilyas")); // ilyas just logged in

  // what if we dont pass argument?

  function loginUserMassage2(username){
    return `${username} just logged in`
  }
  console.log(loginUserMassage2()); //undefined just logged in

  
  
  // we dont want to print "undefined just logged in" we'll use if-else

  function loginUserMassage3(username){
    if(username === undefined){
      console.log("please enter a username")
      return
    }
    return `${username} just logged in`
    
  }  
  console.log(loginUserMassage3()) // to stop that from printing we have to stop this line

  //OR=> we could just put default parameter to avoid undefined output...

  function loginUserMassage4(username = "umar"){
    return `${username} just logged in`
  }
  console.log(loginUserMassage4()) // umar just logged in

  //Function scope
  function test(){
    let x=10
    console.log(x) // as we can see console is not working but calling is .
  }

  test()

  // WHY JS DO THIS?
  // TO PREVENT VARIABLE VONFLICTS, AVOID ACCIDENTA CHANGES, KEEP CODE SAFE.

  //EX:  SAME VARIABLE, NO PROB.

  function one(){
    let name="ilyas"
    console.log(name) // XX WONTS WORK
  }

  function two(){
    let name="salena"
    console.log(name) //  XX WONT WORK
  }

  one()  // work
  two() // work

  // LOCAL VS GLOBAL VARIABLE:

  let city ="mumbai"       //global variable

  function showCity(){
    let country ="india"  //local variable

    console.log(city)          //ALLOWED
    console.log(country);     // ALLOWED
    
  }
  showCity();
  // console.log(city);     //ALLOWED
  // console.log(country); //error
  

  // ... rest operator:

  function calculateCartPrice(...num1){
    return num1
  }

  console.log(calculateCartPrice(200, 400, 500, 2000));

  //Imp. for interview:

  function calculateCartPrice2(val1,val2, ...num1){
    return num1
  }

  console.log(calculateCartPrice2(200, 400, 500, 2000)); 
  // output will be => [500, 2000] cause 200 goes in val1 and 400 in val2

  //Object in function: 

  const user ={
    name: "ilyas",
    price: 1999
  }

  function handleobject(anyobject){
    console.log(`name is ${anyobject.name} and price is ${anyobject.price}`);
    
  }

  handleobject(user)

     //OR we can pass object in direct function argument

  handleobject({
    name: "umar",
    price: 2999
  })


  // array in function:

  const arr = [200, 300, 400, 500]

  function returnSecval(getarr){
    return getarr[2]
  }
  console.log(returnSecval(arr));
  
  
  
