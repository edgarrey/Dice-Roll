const rollButton = document.querySelector('#roll')
const dieRolls = []
let textInput = document.querySelector('#inputtext')
const results = document.querySelector("#rolls")
let diceRoll = 


rollButton.addEventListener("click", function (textInput) {
   
   
   
    var iRandomNumber;
   
   iRandomNumber = Math.ceil(Math.random()*6);

   console.log(iRandomNumber)
})


results.addEventListener("click", function(){

})


var sum = dieRolls.reduce(function(a, b) {
    return a + b;
}, 0);