let randomnumber=parseInt(Math.random()*100+1);
const submit=document.querySelector('#subt')
const userInput=document.querySelector('.guess-input')
const guessSlot=document.querySelector('#previous-guesses')
const remaining=document.querySelector('#lastResult')
const lowOrHi=document.querySelector('#lowOrHi')
const startOver=document.querySelector('.resultParas')

const p=document.createElement('p')

let previousGuesses=[]
let numGuesses=1
let playGame=true

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault()
        const userGuess=parseInt(userInput.value)
        console.log(userGuess)
        validateGuess(userGuess)
    })
}

function validateGuess(guess){
 //it validates the guesses if it lies between 1 and 100    
   if(isNaN(guess)){
    alert('Please enter a valid number')
   }
   else if(guess<1 || guess>100){
    alert('Please enter a number between 1 and 100')
   }else{
     previousGuesses.push(guess)
     if(numGuesses===11){
        displayGuesses(guess)
        displayMessage(`Game Over! The number was ${randomnumber}`)
        endGame()
     }else{
        displayGuesses(guess)
        checkGuess(guess)
     }   
}
}
function checkGuess(guess){
 //almost same as validate guess but it checks if the guess is correct or not and also checks if the user has won or lost the game

    if(guess===randomnumber){
        displayMessage('Congratulations! You guessed the number!')
        endGame()
    }
    else if(guess<randomnumber){
        displayMessage('Your guess is too low!')
        
    }else if(guess>randomnumber){
        displayMessage('Your guess is too high!')
        
    }
    
  
}

function displayGuesses(guess){
 //it displays the previous guesses and also the remaining guesses
 userInput.value=''
 guessSlot.innerHTML+=`${guess} `
 numGuesses++
 remaining.innerHTML=`Guesses Remaining: ${11-numGuesses}`
}
function displayMessage(message){
 //it displays the message if the guess is low or high
 lowOrHi.innerHTML=`<h2>${message}</h2>`
}

function newGame(){
 //it resets the game and starts a new game
const newGameButton=document.querySelector('#newGame')
newGameButton.addEventListener('click',function(e){
    randomnumber=parseInt(Math.random()*100+1)
    previousGuesses=[]
    numGuesses=1
    playGame=true
    guessSlot.innerHTML=''
    remaining.innerHTML=`Guesses Remaining: ${11-numGuesses}`
   
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)
})
}
function endGame(){
 //it ends the game and displays the message if the user has won or lost the game
 userInput.value=''
 userInput.setAttribute('disabled','')
 p.classList.add('button')
 p.innerHTML=`<h2 id="newGame">Start New Game</h2>`
 startOver.appendChild(p)
 playGame=false
 newGame()
}