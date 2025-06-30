const descripter=Object.getOwnPropertyDescriptor(Math,"PI")

// console.log(descripter);
// console.log(Math.PI);
// Math.PI=5
// console.log(Math.PI);

const chai={
    name:'ginger chai',
    price:250,
    isAvailable:true,

    oderChai:function(){
        console.log("good chai")
    }
}

console.log(Object.getOwnPropertyDescriptor(chai,"name"));

Object.defineProperties(chai,'name',{
    //writable:false,
    enumerable:true,
})

console.log(Object.getOwnPropertyDescriptor(chai,"name"));

for(let[key,value]of Object.entries(chai)){
    if(typeof value!=='function'){
        console.log(`${key}:${value}`);
    }
}