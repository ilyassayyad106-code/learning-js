// if() condition:
//condition: <(less than), >(greater than), <=, =>, ==, !=, ==, ===, !==

if(2==2){  // if condition is true then..
  console.log("condition is true");  // ..then this code will be execute
  
} 

if(2==4) { // if condition is false wich is false then..
    console.log("condition is wrong"); //.. then this code won't be ecxecute
    
}

if(2==="2"){
    console.log("num 2 is not equal to string 2");
    
}

if(6!=8){
    console.log("6 is not equals to 8");
    
}

//else: code will execute like : this or that

const temprature = 27

if(temprature === 27){
    console.log("temp. is less than 30deg");
    
} else{
    console.log("temp. is greater than 30deg");
    
}

// imp for interwiev : (scope and var related)

const score = 200

if(score > 100){
    const power = "fly"
     console.log(`user power ${power}`); // if we comment this out and...
    
}

//    console.log(`user power ${power}`); //...and try to print here..

   //it wont execute and error says: power is not defined, cause we defined power in scope-
   // we cant access is out side of scope
                //BUT
   // IF WE USE var , and declare power with var in that scope
   
 const score2 = 300
 
 if(score2>200){
    var power = " speed"
    console.log(`user power: ${power} inside scope`); // this will execute here 
    
 }

 console.log(` user power: ${power} out side scope`);
 
                
   


