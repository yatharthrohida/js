//if
// const isuserloggedin=true
// const temp=41
// if(temp<50){
// console.log("less than 50")
// }else{
//     console.log("temp is greater than 50")
// }

//<,>,<=,>=,==,!=,=== also checks the  type,!==

// const score=200
// if(score>100){
//     let power="fly"
//     console.log(`user power ${power}`)
// }

//console.log(`userpower: ${score}`)


const balance=1000
// if(balance>500) console.log("test"),
// console.log("test2");

// if(balance<500){
//    console.log("less than 500")
// }else if(balance <900){
//     console.log("less than 750")
// }else{
//     console.log("less than 1000")
// }


const userloggedin=true
const debitcard=false
const loggedinfromgoogle=false
const loggedinfromemail=true

if(userloggedin && debitcard ){
 console.log("allow to buy course");
}else if(userloggedin && !debitcard){
  console.log("no debitcard gareeb")
}

if(loggedinfromgoogle||loggedinfromemail){
    console.log("user logged in")
}
