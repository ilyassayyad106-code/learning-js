
// for loops:

for(let index=0; index<=10; index++){
    const element = index
    console.log(element);
    
}

//lets use if statement inside for loop

for( let i=0; i<=15; i++){
    const element = i
    if(element==7){
        console.log("7 is cool number");
       }
       console.log(element)
}

// nested loop and lets print tables:

for (let i = 1; i <= 10; i++) {
    console.log(`value ${i}`);

     for (let j = 1; j <= 10; j++) {
        
    console.log( i + ` * ` +  j  +  ` = `  + i*j); //table
           
     }
    
}

//in array:

let myArr = ["thor" , "iron man" , "captain"]

for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    console.log(element);
    
    
}

//break and continue:

  // we will stop the code using break,

  for(let index=1; index<=10;index++){
    if(index==5){
        console.log(`5 detected`);
        break
    }
        console.log(`value of index is ${index}`);
        
  }

// we will use continue to skip that one condition

  for(let j=1; j<=10;j++){
    if(j==5){
        console.log(`5 detected`);
        continue
    }
        console.log(`value of index is ${j}`);
        
  }