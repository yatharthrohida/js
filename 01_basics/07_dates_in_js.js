//dates

let mydate=new Date()
// console.log(mydate)
// console.log(mydate.toString())
// console.log(mydate.toISOString())
// console.log(mydate.toJSON())
// console.log(mydate.toLocaleDateString())
// console.log(mydate.toLocaleString())

//console.log(typeof mydate)

let mycreateddate = new Date(2026,0,23 ,5,3)
//console.log(mycreateddate.toLocaleString())
//let mynewcreateddate = new Date("2026-01-23")
//console.log(mynewcreateddate.toLocaleString())

let mytimestamp = Date.now()

//console.log(mytimestamp)
//console.log(mycreateddate.getTime())
//console.log(Math.floor(Date.now()/1000))
let newdate=new Date()
console.log(newdate.getDay())
console.log(newdate.getMonth())

//`${newdate.getDay()} and the time`

newdate.toLocaleString('default',{
    weekday:"long",
})







