const accountId=144553
let accountEmail="Dipta Das"
var accountPassword="12345"
accountCity="Siliguri"
let accountState;

// acountId=2 //not allowed
accountEmail="D@gmail.com"
accountPassword="667653768"
accountCity="kolkata"

/*prefer not to use var 
bacause of issue in block scope and functional scope
*/

// console.log(acountCity);
// console.log(accountId);
// console.log(accountEmail);
// console.log(acountPassword);

console.log(accountId);
//to create a table of output
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])