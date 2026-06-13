const email=[]

if(email){
    console.log("got user email")
}else{
    console.log("dont have user email")
}

//falsy values
//false,0,-0,bigInt 0n, "",null,undefined,NaN

//everything else is truthy values
//some truthy values : "0" 0 in a string,'false' in a string," ",[] ,function(){}

// if(email.length===0){
//     console.log("array is empty");
// }
const emptyobj={}

if(Object.keys(emptyobj).length===0){
    console.log("obj is empty")
}

//nullish coalescing operator(??) :null and undefined

let val1;
val1=5 ?? 10
let val2=null??10
let val3=undefined??15
console.log(val1)

let val4=null??10??20
console.log(val4)

//terniary operator

// condition ? true : false/
const price=100
price>120 ?  console.log("price is greater than 120"):console.log("price is less than 120")
