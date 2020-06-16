var player1Name = "Player 1" ;
var player2Name = "Player 2" ;

//-----------------------PLAYER NAME CHANGER----------------------------------------------
function editName(){

  player1Name = prompt("Enter Player 1 Name:");

  if(player1Name === ""){
    alert("No Name Entered.");
    player1Name = prompt("Enter Player 1 Name:");
    document.getElementById("player1").innerHTML= player1Name;
  }
  else{
    document.getElementById("player1").innerHTML= player1Name;
  }

  player2Name = prompt("Enter Player 2 Name:");

  if(player2Name === ""){
    alert("No Name Entered.");
    player2Name = prompt("Enter Player 2 Name:");
    document.getElementById("player2").innerHTML= player2Name;

  }
  else{
    document.getElementById("player2").innerHTML= player2Name;
  }


}

function dice(){


  //----------------------FOR FIRST DICE-----------------------------------

  var randomNumber1 = Math.floor(Math.random()*6) + 1;

  var randomImage = "dice" + randomNumber1 + ".png";

  var randomImageSource = "images/" + randomImage;

  var image1 = document.querySelectorAll("img")[0];

  image1.setAttribute("src", randomImageSource);
  //-----------------------FOR SECOND DICE-------------------------------

  var randomNumber2 = Math.floor(Math.random()*6) + 1 ;

  var randomImage2 = "dice" + randomNumber2 +".png" ;

  var randomImageSource2 = "images/" + randomImage2 ;

  var image2 = document.querySelectorAll("img")[1];

  image2.setAttribute("src", randomImageSource2);

  //---------------COMPARING AND GIVING RESULTS-------------------------------------------

  if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = (player1Name + " won 👏 .");
  }
  else if(randomNumber1 === randomNumber2){
    document.querySelector("h1").innerHTML = "Draw !";
  }
  else{
    document.querySelector("h1").innerHTML = (player2Name + " won 👏 .");
  }

}
