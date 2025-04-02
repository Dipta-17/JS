//if 
const isUserloggedIn=true
const temperature=41

// if(temperature===40){
//     console.log("less then 50")
// }else{
//     console.log("temparature is greater then 50")
// }

// console.log("Execute");
// <, >, <=, >=, ==, !=, ===(it will also check datatype), !==

const score = 200

if(score>100){
    let power="fly"
    console.log(`user power:${power}`)
}
//console.log(`User power: ${power}`);//dosenot belong to the scope

 const balance = 1000
// if (balance > 500) console.log("test"),console.log("test2");// this is not  good to write a code

if (balance < 500) {
        console.log("less than 500");
    } else if (balance < 750) {
        console.log("less than 750");
        
    } else if (balance < 900) {
       console.log("less than 750");
        
    } else {
        console.log("less than 1200");
} 

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}
