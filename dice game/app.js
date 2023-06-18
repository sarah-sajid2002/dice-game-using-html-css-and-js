let w1 = document.getElementsByClassName("one");
let w2 = document.getElementsByClassName("two");
let toss = document.getElementsByClassName("toss")

let no_1 = document.getElementById("no_1")
let no_2 = document.getElementById("no_2")

let res = document.getElementById("results")

function random_no(){
    let no =Math.floor(Math.random() * 10);
    return no;
}

document.getElementById("roll").addEventListener("click" , function(){
    let player1 = document.getElementById("player1").value;
    let player2 = document.getElementById("player2").value;

    let player_1_Score = random_no();
    let player_2_Score = random_no();

    no_1.innerHTML = player_1_Score;
    no_2.innerHTML = player_2_Score;

    let result = " ";


    if(player_1_Score > player_2_Score){
        result = player1 + " won the match";
        res.innerHTML = result;
    }
    else if(player_1_Score < player_2_Score){
        result = player2 + " won the match"
        res.innerHTML = result;
    }
    else{
        result = "tie"
        res.innerHTML = result;
    }

})
