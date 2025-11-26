const name = "ilyas"
const repoCont = 4

// console.log(name + repoCont  ); //old method to concatinate.

console.log(`Hello my name is ${name} and my repo count is ${repoCont}`);

const gameName = new String(`ilyas-sayyad-45`)

console.log(gameName[0]);     //I
console.log(gameName.__protp__);

console.log(gameName.length);  //8
console.log(gameName.toLocaleUpperCase()); //ILYAS
console.log(gameName.charAt(3));      //a
console.log(gameName.indexOf(`y`));  //2

const newString = gameName.substring(0,4)
console.log(newString); //ilya

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringone = "     ilyas.  "
console.log(newStringone);         //        ilyas.
console.log(newStringone.trim()); // ilyas.

const url = "http://ilyas.com/ilyas%20sayyad"
console.log(url);                      //http://ilyas.com/ilyas%20sayyad
console.log(url.replace(`%20`, `-`)); //http://ilyas.com/ilyas-sayyad
console.log(url.includes(`sayyad`)); // true
console.log(url.includes(`cricket`));//false

console.log(gameName.split(`-`));  //[ `ilyas` , `sayyad` , `45`]

// LEARN MORE ABOUT PROPERTIES OF STRING








