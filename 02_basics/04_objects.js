// const instagramuser=new Object()
const instagramuser={}

instagramuser.id="123abc"
instagramuser.name="yath"
instagramuser.isloggedin=false

//console.log(instagramuser)

const regularuser={
    email:"some@gmail.com",
    fullname:{
       userfullname:{
           firstname:"yatharth",
           lastname:"rohida"
       }
    }
}
//console.log(regularuser.fullname.userfullname.firstname)

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
// const obj3={...obj1,...obj2}
const obj3=Object.assign({},obj1,obj2)//her i have taken an empty target object and added source objects to it
console.log(obj3)

const users=[
    {name:"y",
     age:18,
     year:2007
    },
    {name:"y",
     age:18,
     year:2007
    },
    {name:"y",
     age:18,
     year:2007
    }
]
  users[1].name
// console.log(instagramuser)

// console.log(Object.keys(instagramuser))
// console.log(Object.values(instagramuser))
// console.log(Object.entries(instagramuser))

console.log(instagramuser.hasOwnProperty("isloggedin"))



const course={
    coursename:"js in hindi",
    price:1000,
    coursecode:"js101"
}
//course.coursecode

const {coursecode}=course //or i can write const {coursecode:code}=course
console.log(coursecode)

//json
// {
//     "name":"yatharth",
//     "coursename":"js in hindi",
//     "price":"free"
// }

[
    {},
    {},
    {} 
]

