// let myName = "dipta     "
// let mychannel = "chai     "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.dipta = function(){
    console.log(`dipta is present in all objects`);
}

Array.prototype.heydipta = function(){
    console.log(`dipta says hello`);
}

// heroPower.dipta()
// myHeros.dipta()
// myHeros.dipta()
// heroPower.dipta()

// inheritance

const User = {
    name: "dipta",
    email: "dipta@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "Dipta     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"dipta".trueLength()
"iceTea".trueLength()