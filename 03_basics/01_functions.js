function sayMyName(){
    console.log("D");
    console.log("i");
    console.log("p");
    console.log("t");
    console.log("a");

}
//sayMyName()

// function addTwoNumbers(number1,number2){
//     console.log(number1+number2);
// }

function addTwoNumbers(number1,number2){
    // let result=number1+number2
    // return result

    return number1 + number2
}
//console.log(addTwoNumbers(3,5));
const result=addTwoNumbers(3,5)
//console.log("result:",result);

function loginUserMessage(username="sam"){
    if(!username){
        console.log("please enter a user name")
        return
    }
    return`${username} just logged in`
}
// console.log(loginUserMessage("Dipta"))//Dipta just logged in
// console.log(loginUserMessage())//sam just logged in

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

//console.log(calculateCartPrice(200, 400, 500, 2000))
const user={
    username:"Dipta",
    price:199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
//handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}
//console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));


