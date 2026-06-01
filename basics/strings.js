const name ="hitesh" 
const repocount = 50

//console.log(name + repocount + "value")

//console.log(`hello my name is ${name} and my repo count is ${repocount}`);

//another way to declare a string
const gamename =new String(`yatharth-rohida-hello`)

// console.log(gamename[0])
// console.log(gamename.__proto__);
// console.log(gamename.length)
// console.log(gamename.toUpperCase());
// console.log(gamename.charAt(2))
// console.log(gamename.indexOf('r'))

const newstring=gamename.substring(0,4)
//last value does not include and you cant give negative values in substring
//console.log(newstring);

const anotherstring=gamename.slice(-8,4)
//console.log(anotherstring)

const newstring1="    yatharth     "
console.log(newstring1);
console.log(newstring1.trim());
//theres also trim start and trim end , trim works on both whitespaces and line terminator

const url="https://yatharth.com/yatharth%20rohida"
console.log(url.replace('%20','-'))
console.log(url.includes('yath')) 
console.log(gamename.split('-'))

