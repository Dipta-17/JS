const score=400
//console.log(score);

const balance=new Number(100)
//console.log(balance);//output format is [Number: 100]

// console.log(balance.toString().length);
// console.log(balance.toFixed(1));// after point it will take one place 100.0

const otherNumber=123.8966
// console.log(otherNumber.toPrecision(4));

const hundreds=1000000
// console.log(hundreds.toLocaleString('en-IN'));// it will give the number in india counting fomat


// +++++++++++++ Maths +++++++++++++++++++++++++++++
// Try defarent math function in consol and apply

// console.log(Math);
// console.log(Math.abs(-4));//absolute value
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));//take the upper value
// console.log(Math.floor(4.9));//take the lower value
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)


