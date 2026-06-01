//primitive
//7 types:strings,number,boolean,null,undefined,symbol,bigint

const score =100
const scorevalue=100.3

const isloggedin=false
const outsidetemp=null;
let useremail;

const id=Symbol('123')
const anotherid=Symbol('123')

console.log(id===anotherid);

const bignumber=123456787654334567n

//by reference(non primitive)
//array,objects,functions 

const heros=["yatharth","arya","prashant"]
let myobj={
    name:"yatharth",
    age:22,
}

const myfunction=function(){
    console.log( "helo world")
}

//+++++++++++++++++++++++++++++++++++++
//stack(primitive) ,heap(non-primitve)

let x="hello"
let y=x
y="kuchbhi"
console.log(x);
console.log(y);

let userone ={
    email:"user@gmail.com",
    upi:"user@ybl"
}
 let usertwo=userone
 usertwo.email="yatharth@gmail.com"
 console.log(usertwo)
console.log(userone)
