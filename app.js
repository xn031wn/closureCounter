
const addButton = document.querySelector(".button")
const showDisplay = document.querySelector(".display")
let number = 0

function mainfnc(){
   //let number = 0
   return function(){
      number++
      console.log(number)
   }
}  
let increment = mainfnc();

function display(){
    showDisplay.innerHTML = number
}

addButton.addEventListener('click', increment)

addButton.addEventListener('click', display)