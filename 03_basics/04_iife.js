//immediately invoked function expression(IIFE)

(function chai(){
    console.log(`DB CONNECTED`)
})();//here the semicolon is important
 
((name)=>{
 console.log(`DB CONNeECTED TWO ${name}`)
})(`yatharth`)