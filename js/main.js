// Function to change the player name
function editNames() {
   var player1 = prompt("Change Player1 name");
   var player2 = prompt("Change player2 name");

    document.querySelectorAll("p")[0]
                    .innerHTML = player1;
                      
    document.querySelectorAll("p")[1]
                    .innerHTML = player2;
                    
    document.querySelector("h1").innerHTML = "Start The Game!";
}


// For Dice One
function oneRollTheDice(){
    var randomDiceNum1 = Math.floor((Math.random()*6 ) + 1);
    var randomDiceImg = "dice" + randomDiceNum1 + ".png";
    var pathOfImage = "images/" + randomDiceImg;
    var image1 = document.querySelectorAll("img")[1];
    image1.setAttribute("src", pathOfImage);


    if(randomDiceNum1 === 6){
        document.querySelector(".winner").style.visibility = "visible";
    }
    else{
        document.querySelector(".winner").style.visibility = "hidden";
    }

    
}

// For Dice Two
function twoRollTheDice(){
    var randomDiceNum2 = Math.floor((Math.random()*6 ) + 1);
    var randomDiceImg = "dice" + randomDiceNum2 + ".png";
    var pathOfImage = "images/" + randomDiceImg;
    var image2 = document.querySelectorAll("img")[2];
    image2.setAttribute("src", pathOfImage);


    if(randomDiceNum2 === 6){
        document.querySelector(".winner").style.visibility = "visible";
    }
    else{
        document.querySelector(".winner").style.visibility = "hidden";
    }   
}

