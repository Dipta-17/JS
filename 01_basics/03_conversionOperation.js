let score="Dipta"

// console.log(typeof score);//or
// console.log(typeof (score));

let valueInNumber=Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);// it is show NaN becouse char cant be convert in number  

// "33" =>33
// "33abc" =>NaN
// //true=>1 ,false=0

let isLoggedIn="Dipta"
let booleanIsLoggedIn=Boolean(isLoggedIn)

// console.log(booleanIsLoggedIn)

// 1=> true ,0=>false
// " "=> false
// "Dipta"=> true

let someNumber=33
let stringNumber=String(someNumber)

// console.log(stringNumber)
// console.log(typeof stringNumber)

// *********************** Operations ***********************

let value =3
let negvalue= - value
// console.log(negvalue)

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " Dipta"

let str3 = str1 + str2
//  console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");
// console.log( (3 + 4) * 5 % 3);


// console.log(+true);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);

// ++++++++++++++++++memory+++++++++++++++++++++

//  js use 2 type of memory  

// Stack (primitive),Heap(Non-premitive)

let Name="Ram"
let anotherName=Name
anotherName="shyam"

console.log(Name);
console.log(anotherName);

let userOne={
    email: "d@gmail.com",
    upi:"user@ylb"
}

let userTwo=userOne

userTwo.email="A@gmail.com"
console.log(userOne.email);
console.log(userTwo.email);