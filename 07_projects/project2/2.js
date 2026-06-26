const form=document.querySelector("form")

// we cant put this value height here cause when page loads it will get empty value thats why we have to get this value when we submit
//  const height=parseInt(document.querySelector('#height').value)

form.addEventListener('submit',function(e){
    e.preventDefault()
    const height=parseInt(document.querySelector('#height').value)
    const weight=parseInt(document.querySelector('#weight').value)
    const results=(document.querySelector('#results'))

    //checks
    if(height===''|| height<0||isNaN(height)){
        results.innerHTML="please give a valid height";
        results.style.color="red";
    }else if(weight===''|| weight<0||isNaN(weight)){
         results.innerHTML="please give a valid weight";
        results.style.color="red";
    }else{
        const bmi=(weight / ((height*height)/10000)).toFixed(2)
        //show the result
        results.innerHTML=`<span>${bmi}</span>`;
    }
});