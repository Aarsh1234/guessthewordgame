function Add_user()
{
    Player1_name=document.getElementById("Player_1_name_input").value;
    Player2_name=document.getElementById("Player_2_name_input").value;

    localStorage.setItem("Player1_name", Player1_name);
    localStorage.setItem("Player2_name", Player2_name);
    
    window.location.replace("game_page.html");
}