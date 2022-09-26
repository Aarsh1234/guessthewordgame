player1_name=localStorage.getItem("Player1_name");
player2_name=localStorage.getItem("Player2_name");

document.getElementById("player1_name").innerHTML=player1_name + " : ";
document.getElementById("player2_name").innerHTML=player2_name + " : ";

player1_score=0;
player2_score=0;

document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;

document.getElementById("player_question").innerHTML="Question Turn - " + player1_name;
document.getElementById("player_answer").innerHTML="Answer Turn - " + player2_name;

function Send(){
    get_word=document.getElementById("word").value;
    word=get_word.toLowerCase();
    console.log("word in lower case" + word);

    CharAt1=word.charAt(1);
    console.log(CharAt1);

    length_divide=Math.floor(word.length/2);
    CharAt2=word.charAt(2);
    console.log(CharAt2);

    length_1 =word.length-1;
    CharAt3=word.charAt(length_1);
    console.log(CharAt3);

    remove_1=word.replace(CharAt1, "_");
    remove_2=remove_1.replace(CharAt2, "_");
    remove_3=remove_2.replace(CharAt3, "_");
    console.log(remove_3);

    Question_word="<h4 id='word_display'>Q." + remove_3 +"</h4>";
    inputbox="<br>Answer : <input type='text' id='input_check_box'>";
    check_button="<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row=Question_word + inputbox + check_button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("word").value="";
}
Question_turn="player1";
Answer_turn="player2";
function check()
{
    get_answer=document.getElementById("input_check_box").value;
    answer=get_answer.toLowerCase();
    console.log("answer in lc - " +answer);
    if(answer==word)
    {
        if(Answer_turn=="player1")
        {
            player1_score=player1_score + 1;
            document.getElementById("player1_score").innerHTML= player1_score;
        }
        else
        {
            player2_score=player2_score + 1;
            document.getElementById("player2_score").innerHTML= player2_score;
        }
    }
    if(Question_turn=="player1")
    {
        Question_turn="player2";
        document.getElementById("player_question").innerHTML="Question Turn - " + player2_name;

    }
    else
    {
        Question_turn="player1";
        document.getElementById("player_question").innerHTML="Question Turn - " + player1_name;
        
    }
    if(Answer_turn=="player1")
    {
        Answer_turn="player2";
        document.getElementById("player_answer").innerHTML="Answer Turn - " + player2_name;

    }
    else
    {
        Answer_turn="player1";
        document.getElementById("player_answer").innerHTML="Answer Turn - " + player1_name;
        
    }
    document.getElementById("Output").innerHTML="";
}