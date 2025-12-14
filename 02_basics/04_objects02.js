

//Singleton:

const user = new Object() //singleton object
const user2 = {} // non singleton object

console.log(user);
console.log(user2);

user.id = "123abc"
user.name = "dead"
user.isLoggedIn = false

// console.log(user);

const user3 = {
    email: "abc@gmail.com",
    fullname: {
        userfullname: {
          firstname: "ilyas",
          lastname: "sayyad"
         }
    }
}

// console.log(user3.fullname.userfullname);

//.assign method:

const obj1 = {1: "a", 2:"b"}
const obj2 = {3: "c", 4:"d"}
const obj3 = {5: "e", 6:"f"}

const obj4 = {obj1, obj2, obj3}
// console.log(obj4);

const obj5 = Object.assign({}, obj1, obj2,obj3) //good syntax but we won't use it so often
// console.log(obj5);


// spread method: we will use spread method 90% to combine objects

const obj6 = {...obj1, ...obj2, ...obj3}// spread method is best to use
// console.log(obj6);

const users = [
    {
        id: 1,
        email: "i@gmail.com"
    },
    {
        id:2,
        email: "l@gmail.com"
    },
    {
        id: 3,
        email:" y@gmail.com"
    }
]

users[1].email

// console.log(user);
// console.log(Object.keys(user)); //to get keys
// console.log(Object.values(user)); // to get values
// console.log(Object.entries(user)); //evry key value will be get in array.[ key, value]
// console.log(user.hasOwnProperty(`isLoggedIn`)); //to check if it has property or not(boolean)
// console.log(user.hasOwnProperty(`email`));



//Destructuring:

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// console.log(course.courseInstructor);

//destructuring: 
// const {courseInstructor} = course
// // console.log(courseInstructor);

const {courseInstructor: instuctor} = course // we can destrucure the name as we want
console.log(instuctor);



// API'S:

// {
//     "name":"ilyas",
//     "coursename":"js in hindi"
//     "price": "free"
// }

[
    {},
    {},
    {}

]












