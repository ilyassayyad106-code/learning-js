const accountId = 1253
let accountEmail = "ilyas@gmail.com"
var accountPassword = "12456"
accountCity = "Satara"

let accountState;



// accountId = 2 // not allowed
console.log(accountId);

accountEmail = "il@il.com"
accountPassword = "789"
accountCity = "pune"


/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([ accountId, accountEmail, accountPassword, accountCity, accountState])
