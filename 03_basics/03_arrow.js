const user = {
    username : "ilyas",
    price : 999,

    welcomeMassage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
    }
}

user.welcomeMassage()
user.username = "umar"
user.welcomeMassage()

console.log(this);

function test(){
    let username = "ilyas"
    console.log(this.username); //undefined
    
}
test() //undefined, we cant use this in function , just in object

//arrow

const test2=() =>{
    let username ="ilyas"
    console.log("test2",this.username); //undefined
    
}

test2()

//arrow syntax:
const addtwo=(num1, num2) =>{
    return num1 + num2 
}
console.log(addtwo(5,6));   //11

// implicit return(syntax:2)

const addtwo3=(num1, num2) => num1 + num2
console.log(addtwo3(5,6)); //11

//syntax:3
const addtwo4=(num1, num2) => (num1 + num2) //imp. for react
console.log(addtwo4(5,6)); //11


//imp: if we use curly brasec {}, then we have to use "return" keyword.

