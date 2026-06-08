const user={
    username:"yatharth",
    price:999,

    welcomemessage:function(){
        console.log(`${this.username},welcome to website`);
        console.log(this);
    }
}

// user.welcomemessage()
// user.username="kuch to hai"
// user.welcomemessage()
// console.log(this)

// function one(){
//     let username="yatharth"
//     console.log(this.username)
// }
// one()

// const one = function(){
//     let username="yatharth"
//     console.log(this.username)
// }
// one()

const one =()=>{
     let username="yatharth"
    console.log(this)
}
// one()

//arrow function basic syntax
const addtwo=(num1,num2)=>{
    return num1+num2//explicit return
}
//console.log(addtwo(2,3))

//const add_two=(num1,num2)=>num1+num2 //implicit return
const add_one=(num1,num2)=>({username:"yatharth"})
console.log(add_one(2,3))
//if we use curly braces we have to write return keyword 
//if parenthesis are used return keyword are not used