//for each is an inbuilt iterating function which calls a function

const prog=["js","rb","py","java","cpp"]

// prog.forEach(function (val){
//     console.log(val);
// })

//arrow function
prog.forEach((val)=>{
    console.log(val)
})

// function printme(item){
//     console.log(item);
// }
// prog.forEach(printme)

prog.forEach((item,index,arr)=>{
    console.log(item,index,arr)
})

const mycoding=[
    {
        languagename:"javascript",
        languagefilename:"js"
    },
    {
        languagename:"java",
        languagefilename:"java"
    },
    {
        languagename:"python",
        languagefilename:"py"
    },

]
mycoding.forEach((item)=>{
    console.log(item.languagename);
})