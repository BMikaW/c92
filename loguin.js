function addUser()
{
var player1= document.getElementById("player1NameInput").value;
var player2= document.getElementById("player2NameInput").value;

localStorage.setItem("play1", player1);
localStorage.setItem("play2", player2);

window.location.replace("game_page.html")
}