//for in loop

const myobj={
    js:'javascript',
    cpp:'c++',
    rb:'ruby',
    swift:"swift by apple"
}
for(const key in myobj){
    console.log(`${key} shortcut is for ${myobj[key]}`)
}//this for in loops works for object and arrays

const prog=["js","rb","py","java","cpp"]
for(const key in prog){
    console.log(prog[key])
}
//for of loop prints values while for in loop prints key

const map=new Map()
map.set('IN',"india")
map.set('USA',"united states of america")
map.set('FR',"france")
for(const key in map){
    console.log(`${key} is small for ${map[key]}`)
}
//maps are not iteratable as for loops 