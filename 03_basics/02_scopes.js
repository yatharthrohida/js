var c=300

if(true){
    let a = 10
const b = 20
var c = 30
}

// console.log(a)
//console.log(b)
console.log(c)

function one(){
    const username = "yatharth"

    function two(){
        const website = "youtube"
        console.log(username)
    }


    two()
}

one()

if(true){
    const username= "yatharth"
    if(username==="yatharth"){
        const website=" youtube"
        //console.log(username + website)
    }
   // console.log(website)
}
//console.log(username)


//++++++++++intresting+++++++++++

console.log(addone(5)) //you can write this before writing the actual function 
function addone(num){
return num+1
}

// you cant add addtwo(5) before this function cause its declared through a variable
const addtwo = function(num){
    return num+2
}
addtwo(5)  
 