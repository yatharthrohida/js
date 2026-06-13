//array.reduce function
const array=[1,2,3,4,5]
const initialvalue=0;
const sumwithinitial=array.reduce((accumulator,currentvalue)=>accumulator+currentvalue,initialvalue)
console.log(sumwithinitial);

//using normal function
const mytotal=array.reduce(function (acc,currval){
    console.log(`acc:${acc} and currval: ${currval}`)
    return acc+currval
},3)
console.log(mytotal)