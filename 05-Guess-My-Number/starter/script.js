'use strict';

// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "correct number!";
// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 10;
// document.querySelector(".guess").value = 8
// console.log(document.querySelector(".guess").value);

let secretNumber = Math.trunc(Math.random()*20) + 1;
// console.log(secretNumber);
let guessedNumber = Number(document.querySelector(".guess").value);
let score = 20;
let highscore = 0;

const changeMessage = function(identifier, message){
    document.querySelector(identifier).textContent = message;
}

document.querySelector(".check").addEventListener("click", function(){
    if(score > 0){
        guessedNumber = Number(document.querySelector(".guess").value);
        if(!guessedNumber){
            changeMessage(".message", "Pls enter a number first...");
        }
        else if(guessedNumber === secretNumber){
            changeMessage(".message", "Correct answer '''");
            document.querySelector("body").style.backgroundColor = "green";
            document.querySelector(".number").style.width = "30rem";
            changeMessage(".number", secretNumber);
            if(highscore < score){
                highscore = score;
                changeMessage(".highscore", highscore);
            }
        }
        else {
            changeMessage(".message", guessedNumber > secretNumber ? "Too high >>>" : "Too Low <<<");
            score--;
            changeMessage(".score", score);
        }
    }
    else {
        changeMessage(".message", "You lost the game ~~ start again");
    }
})

document.querySelector(".again").addEventListener("click", function(){
    changeMessage(".message", "give it a try again..");
    document.querySelector("body").style.backgroundColor = "#222222";
    document.querySelector(".number").style.width = "15rem";
    changeMessage(".number", "?");
    document.querySelector('.guess').value = '';
    changeMessage(".score", "20");
    score = 20;
    secretNumber = secretNumber = Math.trunc(Math.random()*20) + 1;
    console.log(secretNumber);
})