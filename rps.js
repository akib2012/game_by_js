// Day 07 Learn To Build Beginner-Friendly JavaScript Projects 

function rockPaperScissors(){
    console.log("rock paper scissors");
    const userChoisePromt = prompt("Enter rock ,paper and scissors");
    let userChoise = userChoisePromt.toLowerCase();

    let computerChoise;
    computerChoise = Math.floor(Math.random() * 3) + 1;

    if(computerChoise === 1){
        computerChoise = "rock";

    }
    else if(computerChoise === 2){
        computerChoise = "paper";
    }
    else{
        computerChoise = "scissors";
    }
    console.log("user selceted",userChoise);
    console.log("computerb  selected", computerChoise);

    if(
        (userChoise === "rock" && computerChoise === "scissors") ||
        (userChoise === "paper" && computerChoise === "rock")||
        (userChoise === "scissors" && computerChoise === "paper")

    ){
       console.log("TOU is WIN, YEAAA!!!"); 
    }
    else if(userChoise === computerChoise){
        console.log("The game is TIE");
    }
    else if(
        (userChoise === "rock" && computerChoise === "paper") ||
        (userChoise === "paper" && computerChoise === "scissors")||
        (userChoise === "scissors" && computerChoise === "rock")

    ){
        console.log("computer Win!!");
    }
    else{
        console.log("please cheek the input this i do not understand!!");
    }


}


rockPaperScissors();