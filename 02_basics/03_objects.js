// singleton
//Object.create

//object literals:

const mySymbol = Symbol("key1")

const Jsuser = {
    name : "Ilyas",   // key name is basiclly is "name" (in string)
    "full name": "Ilyas Sayyad", //if key value is manualy declared in string " " we can't access it with .fullname, so we will use [] method.
    [mySymbol]: "mykey1", //[mySymbol]= this is the syntax to use symbol
    age : 25,
    location: "satara",
    email: "ilyas@.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday" ]

} 

console.log(Jsuser.email); //this is how we access object but there's one more method which is best.
console.log(Jsuser["email"]) 
console.log(Jsuser["full name"]); //will work
// console.log(Jsuser.full name);  // error

// console.log(Jsuser.mySymbol); //mykey1 but its not symbol its string
// console.log(typeof Jsuser.mySymbol); //string,so declare symbol in[] to get correct value.
console.log(Jsuser[mySymbol]); // for symbol we don't use "" to access in [].

Jsuser.email = "newIlyas2@.com" //to overwrite (change/update) value using = 

//if we want to freez object (no one should change or update any value) use: object.freeze

// Object.freeze(Jsuser)

Jsuser.age = 19
console.log(Jsuser["age"]); // 25 , if we  freezed this Object, 19 if we didn't.

Jsuser.greeting = function(){
    console.log("hello user");
}

Jsuser.greetingTwo = function(){
    console.log(`hello user,${this.name}`); //use this. to access all current object keys
    
}
console.log(Jsuser.greeting()); // hello user
console.log(Jsuser.greetingTwo()); // hello user, Ilyas










