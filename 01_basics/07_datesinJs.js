//Date

let myDate=new Date()
console.log(myDate.toString());//Fri Mar 28 2025 04:21:48 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString());//Fri Mar 28 2025

console.log(myDate.toLocaleDateString());// 3/28/2025

console.log(typeof myDate); //object

//let myCreatedDate = new Date(2023, 0, 23)//0 means month 1
//let myCreatedDate = new Date(2023, 0, 23, 5, 3)// 1/23/2023, 5:03:00 AM

//let myCreatedDate = new Date("2023-01-14") // 1/14/2023, 12:00:00 AM
let myCreatedDate = new Date("01-14-2023")

console.log(myCreatedDate.toLocaleString());

let myTimeStamp=Date.now()

//console.log(myTimeStamp);
//console.log(myCreatedDate.getTime());

// console.log(Math.floor(Date.now()/1000));

let newDate=new Date()
console.log(newDate.getMonth()+1); // 3

console.log(newDate.getDay());

 //`${newDate.getDay()} and the time `

newDate.toLocaleString('default',{
    weekday:"long",
})

//there is various date/time function try on console and mdn refarence
