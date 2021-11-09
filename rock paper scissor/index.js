document.addEventListener("DOMContentLoaded",() => {
    let userScore = 0;
    let computerScore = 0;
    const choice = document.querySelectorAll(".option")
    const userScore_span = document.getElementById("user-result");
    const socre = document.querySelector(".scores-bored");
    const computerScore_span = document.getElementById("computer-result");
    const result_div = document.querySelector(".result");
    const rock = document.getElementById("rock");
    const paper = document.getElementById("paper");
    const s = document.getElementById("s");
    

    const elements = ["rock","paper","s"]; 
    
    
    let computer_guess = Math.floor(Math.random()*elements.length);   
    computer_guess = elements[computer_guess];
    
    function final(){
       
        rock.addEventListener("click",function(){
            if(computer_guess === "rock" ){
                result_div.innerHTML = "your opponte choose rock so,rock rock. Its a draw!";
            }else if (computer_guess === "paper") {
                result_div.innerHTML = "your opponte choose paper so,paper covers rock. You lose!";
                computerScore++;
                computerScore_span.innerHTML = computerScore;
           
            } else if (computer_guess === "s"){
                result_div.innerHTML = "your opponte choose scissors so,rock crushes scissors. You win"
                userScore++;
                userScore_span.innerHTML = userScore;
            }
        })

        paper.addEventListener("click",function(){
            if(computer_guess === "paper" ){
                result_div.innerHTML = "your opponte choose paper so,paper paper. Its a draw!";
            }else if (computer_guess === "s") {
                result_div.innerHTML = "your opponte choose scissors so,paper is cut by sicssor. You lose!";
                computerScore++;
                computerScore_span.innerHTML = computerScore;
           
            } else if (computer_guess === "rock"){
                result_div.innerHTML = "paper covers rock. You win!"
                userScore++;
                userScore_span.innerHTML = userScore;
            }
        })

        s.addEventListener("click",function(){
            if(computer_guess === "s" ){
                result_div.innerHTML = "your opponte choose scissors so,scissor scissor. Its a draw!";
            }else if (computer_guess === "rock") {
                result_div.innerHTML = "your opponte choose rock so,rock crushes scissor. You lose!";
                computerScore++;
                computerScore_span.innerHTML = computerScore;
           
            } else if (computer_guess === "paper"){
                result_div.innerHTML = " your opponte choose paper so,sicssor cuts paper. You win!"
                userScore++;
                userScore_span.innerHTML = userScore;
            }
            
        })
        console.log(computer_guess)
    
    }
    final()
    
     


  




})