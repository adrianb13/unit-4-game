
$(document).ready(function() {

var randomNumber = "";
var crystalNumbers = [];
var crystal1 = "";
var counter1 = 0;
var crystal2 = "";
var counter2 = 0;
var crystal3 = "";
var counter3 = 0;
var crystal4 = "";
var counter4 = 0;
var yourScore = 0;

var wins = 0;
var losses = 0;


var randomNumber = (Math.floor(Math.random() * 102) + 19);
console.log(randomNumber);
$("#randomNumber").text(randomNumber);

for (i=0; i<2; i++) {
    crystalNumbers[i] = (Math.floor(Math.random() * 12) +1);
    crystalNumbers.push(crystalNumbers[i]);
}
crystalNumbers.push(Math.floor(Math.random() * 5) *2 +1);

var crystal1 = crystalNumbers[0];
    crystal1 = parseInt(crystal1);
var crystal2 = crystalNumbers[1];
    crystal2 = parseInt(crystal2);
var crystal3 = crystalNumbers[2];
    crystal3 = parseInt(crystal3);
var crystal4 = crystalNumbers[3];
    crystal4 = parseInt(crystal4);
    
    

$("#crystal1").on("click", function() {
    counter1 += crystal1;
    yourScore = counter1+counter2+counter3+counter4
    $("#totalScore").text(yourScore);
    randomNumber = parseInt(randomNumber);
    yourScore = parseInt(yourScore);

    winOrLose();
    console.log(yourScore);
    }); 

$("#crystal2").on("click", function() {
    counter2 += crystal2;
    yourScore = counter1+counter2+counter3+counter4
    $("#totalScore").text(yourScore);
    randomNumber = parseInt(randomNumber);
    yourScore = parseInt(yourScore);

    winOrLose();
    console.log(yourScore);
    }); 

$("#crystal3").on("click", function() {
    counter3 += crystal3;
    yourScore = counter1+counter2+counter3+counter4
    $("#totalScore").text(yourScore);
    randomNumber = parseInt(randomNumber);
    yourScore = parseInt(yourScore);

    winOrLose();
    console.log(yourScore);
    }); 

$("#crystal4").on("click", function() {
    counter4 += crystal4;
    yourScore = counter1+counter2+counter3+counter4
    $("#totalScore").text(yourScore);
    randomNumber = parseInt(randomNumber);
    yourScore = parseInt(yourScore);

    winOrLose();
    console.log(yourScore);
    console.log(counter4);

    });

function winOrLose () {
    if(yourScore > randomNumber) {
        alert("You Lose");
        losses = losses + 1;
        $("#losses").text(losses);
        console.log(losses);
        resetAll()
        yourScore = 0;
        counter1 = 0;
        counter2 = 0;
        counter3 = 0;
        counter4 = 0;
    } else if (yourScore === randomNumber) {
        alert("You Win");
        wins = wins + 1;
        $("#wins").text(wins);
        console.log(wins);
        resetAll();
        yourScore = 0;
        counter1 = 0;
        counter2 = 0;
        counter3 = 0;
        counter4 = 0;
      }
};

function resetAll () {
    var randomNumber = "";
    var crystalNumbers = [];
    var crystal1 = "";
    var crystal2 = "";
    var crystal3 = "";
    var crystal4 = "";
    var yourScore = 0;
    var randomNumber = (Math.floor(Math.random() * 102) + 19);
    console.log(randomNumber);
    $("#randomNumber").text(randomNumber);

    for (i=0; i<2; i++) {
        crystalNumbers[i] = (Math.floor(Math.random() * 12) +1);
        crystalNumbers.push(crystalNumbers[i]);
    }
    crystalNumbers.push(Math.floor(Math.random() * 5) *2 +1);

    var crystal1 = crystalNumbers[0];
        crystal1 = parseInt(crystal1);
    var crystal2 = crystalNumbers[1];
        crystal2 = parseInt(crystal2);
    var crystal3 = crystalNumbers[2];
        crystal3 = parseInt(crystal3);
    var crystal4 = crystalNumbers[3];
        crystal4 = parseInt(crystal4);
    $("#totalScore").text(yourScore);
    console.log(yourScore)
};
  

});