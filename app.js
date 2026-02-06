
const addButton = document.querySelector(".button")
const showDisplay = document.querySelector(".display")

function mainfnc(){
   let number = 0
   return function(){
      number++
      console.log(number)
   }
}  
let increment = mainfnc();

/*function display(){
    showDisplay = number.value
}*/

addButton.addEventListener('click', increment)

