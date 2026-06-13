const prog=["js","rb","py","java","cpp"]
const values = prog.forEach((item)=>{
   // console.log(item);
    return item 
})
//for each doesnt return any value
console.log(values);

const mynums=[1,2,3,4,5,6,7,8,9,10]
//const newnums=mynums.filter((num)=>num>4)//filter returns a value
//console.log(newnums)
//filter is used mostly everywhere 


//if we scope on filter we can manually tellit to return
const newNums=mynums.filter((num)=>{
    return num>4
})
console.log(newNums)


const newnums=[]

mynums.forEach((num)=>{
    if(num>4){
        newnums.push(num)
    }
})
console.log(newnums)
