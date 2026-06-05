//constructor se singleton banega
//literal se singleton nahi banega

//Object.create ,this is the way to make object using connstructor
const mysym=Symbol("key1")
const JSuser={
    name:"yatharth",
    "fullname":"yatharthrohida",
    age:18,
    [mysym]:"mykey1",//if you wanna refer symbol you use square brackets
    location:"udaipur",
    email:"yatharth@gmail.com",
    isloggedin:false,
}

console.log(JSuser.email)
console.log(JSuser["name"])
console.log(JSuser["fullname"])
console.log(JSuser[mysym])

JSuser.email="yatharthhHHHHHH@gmail.com"
//Object.freeze(JSuser)
console.log(JSuser)

JSuser.greeting=function(){
    console.log("hello Js user");
}
console.log(JSuser.greeting());

JSuser.greeting2=function(){
    console.log(`hello Js user ,${this.name}`);
}
console.log(JSuser.greeting2())
 