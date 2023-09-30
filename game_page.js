player1_name = localStorage.getItem("play1");
player2_name = localStorage.getItem("play2");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Turno de Pergunta - " + player1_name;
document.getElementById("player_answer").innerHTML = "Tuerno de Resposta - " + player2_name;

function send()
{
get_word = document.getElementById("word").value;
word = get_word.toLowerCase();
console.log("word in toLowerCase =" + word);

charAt1 = word.charAt(1);
console.log(charAt1);

length_divide_2 = Math.floor(word.length/2);
charAt2 = word.charAt(length_divide_2);
console.log(charAt2);

length_minus_1 = word.length - 1;
charAt3 = word.charAt(length_minus_1);
console.log(charAt3);

remove_charAt1 = word.replace(charAt1, "_");
remove_charAt2 = remove_charAt1.replace(charAt2, "_");
remove_charAt3 = remove_charAt2.replace(charAt3, "_");
console.log(remove_charAt3);

question_word = "<h4 id= 'word_display'> P."+remove_charAt3+"</h4>";
input_box ="<br>Resposta : <input type='text' id='input_check_box'>";
check_button = "<br><br><button class='btn-info' onclick='check()'>Chercar</button>";
row = question_word + input_box + check_button ;
document.getElementById("output").innerHTML = row;
document.getElementById("word").value = "";
}

questionTurn = "player1";
answerTurn = "player2";

function check()
{ 
getAnswer = document.getElementById("input_check_box").value;
answer = getAnswer.toLowerCase();
console.log("resposta em caixa baixa -" + answer);
if(answer == word)
{
    if(answerTurn == "player1")
    {
        player1_score++;
        document.getElementById("player1_score").innerHTML = player1_score;
    }
 else
    
{
    player2_score++;
        document.getElementById("player2_score").innerHTML = player2_score;
}
}
if(questionTurn == "player1")
{
    questionTurn = "player2"
        document.getElementById("player_question").innerHTML = "Turno de Pergunta: " +player2_name;
}
else
{
    questionTurn = "player1"
        document.getElementById("player_question").innerHTML = "Turno de Pergunta: " +player1_name;
}
if(answerTurn == "player1")
{
    answerTurn = "player2"
        document.getElementById("player_answer").innerHTML = "Turno de Resposta: " +player2_name;
}
else
{
    answerTurn = "player1"
        document.getElementById("player_answer").innerHTML = "Turno de Resposta: " +player1_name;
}

document.getElementById("output").innerHTML = "";










}