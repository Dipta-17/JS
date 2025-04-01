const user={
    username:"Dipta",
    price:999,
    welcomeMassage:function(){
        console.log(`$ {username},welcome to website`);
        console.log(this);
    }
}
// user.welcomeMassage()
// user.username="sam"
// user.welcomeMassage()

//console.log(this);

// const chai=function(){
//     let username="Dipta"
//     console.log(this.username)

// }
// chai()

const chai= ()=>{
    let username="Dipta"
    console.log(this)
}
//chai()

// const addTwo=(num1,num2)=>{
//     return num1+num2
// }

//const addTwo=(num1,num2)=> num1+num2
//const addTwo=(num1,num2)=>(num1+num2)

const addTwo=(num1,num2)=>({username:"Dipta"})

console.log(addTwo(2,5))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()