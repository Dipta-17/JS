//singleton
//Object.create

//object literals

const mySym=Symbol("key1")

const JsUser={
    name:"Dipta ",
    "full name":"Dipta Das",
    [mySym]:"mykey1",
    age:23,
    location:"jalpaiguri",
    email:"d@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"])
//console.log(JsUser[mySym])
JsUser.email='A@google.com'
//Object.freeze(JsUser);// after freeze the value cannot modify 
JsUser.email='A@googlee.com'

//console.log(JsUser);
JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
