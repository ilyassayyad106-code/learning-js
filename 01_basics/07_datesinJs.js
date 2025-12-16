//Dates

let myDate = new Date()

// console.log(typeof myDate);

// console.log(myDate);                           //2025-11-30T17:29:49.535Z
// console.log(myDate.toDateString());           //Sun Nov 30 2025         in string
// console.log(myDate.toISOString());           //2025-11-30T17:29:49.535Z in string
// console.log(myDate.toJSON());               //2025-11-30T17:29;49.535Z in string
// console.log(myDate.toLocaleDateString());  //11/30/2025                  ---
// console.log(myDate.toLocaleString());     //11/30/2025, 5:29:49 PM       ---
// console.log(myDate.toLocaleTimeString());//5:37:50 PM                    ---
// console.log(myDate.toUTCString());      //Sun, 30 Nov 2025 17:39:19 GMT  ---

let myCreatedDate = new Date(2025, 10, 30)
console.log(myCreatedDate.toDateString()); // Sun Nov 30 2025

// let myAnotherCreatedDate = new Date(2025, 10, 30, 5, 3)
// console.log(myAnotherCreatedDate.toLocaleString()); // 11/30/2025, 5:03:00 AM

let myAnotherCreatedDate = new Date("10-30-2025")
// console.log(myAnotherCreatedDate.toLocaleString()); //10/30/2025, 12:00:00 AM

let myTimeStamp = Date.now()
// console.log(myTimeStamp);

// console.log(myAnotherCreatedDate.getTime());

// console.log(Math.floor(Date.now()/1000)); //to compair in seconds

let newDate = new Date()
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getFullYear());
console.log(newDate.getHours());
console.log(newDate.getMilliseconds());
console.log(newDate.getMinutes());
console.log(newDate.getMonth() + 1);
console.log(newDate.getSeconds());
console.log(newDate.getTime());
console.log(newDate);

let calender = new Date();
console.log(
calender.toLocaleString(`en-US`, {
       weekday: "long" ,   // we can get all properties and customization by pressing "ctrl + space"
       year: "numeric",
       month:"long",
       day:"numeric"           
}) 
);


// getter methods ...

let getter_methods = new Date();
console.log(getter_methods.getFullYear()); //2025
console.log(getter_methods.getMonth());  // 11 (dec)
console.log(getter_methods.getDate());
console.log(getter_methods.getDay());
console.log(getter_methods.getHours());
console.log(getter_methods.getMinutes());
console.log(getter_methods.getSeconds());

//date formattig methods:

console.log(getter_methods.toDateString());
console.log(getter_methods.toDateString());
console.log(getter_methods.toLocaleString());
console.log(getter_methods.toLocaleDateString());
console.log(getter_methods.toLocaleTimeString());





















