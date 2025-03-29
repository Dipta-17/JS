// const tinderUser= new Object()

const tinderUser={  }

tinderUser.id="123abc"
tinderUser.name="Dipta"
tinderUser.isLoggedIn=false

//console.log(tinderUser);

const regularUser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Dipta",
            lastname:"Das"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname)//Dipta

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

//const obj3={obj1,obj2}
//console.log(obj3);

const obj3={...obj1,...obj2}
//console.log(obj3);

const user=[
    {
        id:1,
        email:"D@gmail.com"
    },
    {
        id:1,
        email:"D@gmail.com"
    },
    {
        id:1,
        email:"D@gmail.com"
    },
]
user[1].email

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(tinderUser.hasOwnProperty("isLoggedIn"));

const course={
    coursename:"js user",
    price:"999",
    courseInstructor:"Dipta"
}

//course.courseInstructor


const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "Dipta",
//     "coursename": "js ",
//     "price": "free"
// }

[
    {},
    {},
    {}
]
