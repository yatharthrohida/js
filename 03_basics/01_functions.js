function saymyname(){
    console.log("y")
    console.log("a")
    console.log("t")
    console.log("h")
}
//saymyname()

function add2numbers(number1,number2){
let result=number1+number2
return result
}

// function add2nummbers(number1,number2){
// console.log(number1+number2)
// }
const result=add2numbers(3,5)
//console.log("result:",result);

function loginusermessage(username="sam"){
    if(username===undefined){
      console.log("please enter a username")
      return 
    }
   return `${username} just logged in`
}
//console.log(loginusermessage())

function calculatecartprice(val1,val2,...num1){
    return num1
}
//console.log(calculatecartprice(200,400,500,2000))

const user={
    username:"yath",
    price:199
}
function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleobject(user)

handleobject(
    {
username:"yath",
price:400
})

const mynewarr=[200,400,100,600]
function returnsecondvalue(arr){
    return arr[1];
}
let secondvalue=returnsecondvalue(mynewarr)
console.log(secondvalue)