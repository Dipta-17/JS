const name="Dipta"
const repoCount = 50

// console.log(name + repoCount +"value");// This is not a good practic

//or we can write

console.log(`Hello my name is ${name} and my repo count is ${repoCount} `)

const gameName=new String('Dipta-co-com')

// console.log(gameName[3]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toLocaleUpperCase());
// console.log(gameName.toLocaleLowerCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString=gameName.substring(0,3)
console.log(newString);

const anotherString=gameName.slice(-4,3)
console.log(anotherString);

const newStringOne=" Dipta  "
console.log(newStringOne);
console.log(newStringOne.trim());// it will remove all the space

const url = "https://Dipta.com/Dipta%50Das"

console.log(url.replace('%50','-'));
console.log(url.includes('Dipta'));
console.log(url.includes('ram'));

console.log(gameName.split('-'));


