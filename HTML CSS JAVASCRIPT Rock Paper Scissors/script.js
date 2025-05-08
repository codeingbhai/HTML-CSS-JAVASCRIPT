const playerScoreEl = document.getElementById('playerScore');
const computerScoreEl = document.getElementById('computerScore');
const resultEl = document.getElementById('result');
const choiceBtns = document.querySelectorAll('.choice-btn');
const resetBtn = document.getElementById('resetBtn');
const player_hend = document.getElementById('player-hend');
const computer_hend = document.getElementById('computer-hend');

let playerScore = 0;
let computerScore = 0;
const moveImage = {
    rock: 'IMAGE/rock.png',
    paper: 'IMAGE/paper.png',
    scissors: 'IMAGE/scissors.png'
}

choiceBtns.forEach(button =>{
    button.addEventListener('click',() =>{
        const playerChoice= button.getAttribute('data-choice');
        playerGame(playerChoice);
    })
});

resetBtn.addEventListener('click', () => {
    playerScore = 0;
    computerScore = 0;
    playerScoreEl.textContent = '0';
    computerScoreEl.textContent = '0';
    resultEl.innerHTML = 'Choose your move!';
});

function playerGame(playerChoice){
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    player_hend.src= moveImage[playerChoice];
    computer_hend.src= moveImage[computerChoice];

    let result = "";
    if (playerChoice === computerChoice) {
        result = "It's a tie!";
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        result = "You win!";
        playerScore++;
    } else {
        result = "Computer wins!";
        computerScore++;
    }
    

     resultEl.innerHTML = `
     You chose <strong>${playerChoice}</strong><br>
     Computer chose <strong>${computerChoice}</strong><br>
     <span class="result-text">${result}</span>
 `;
 

 playerScoreEl.textContent = playerScore;
 computerScoreEl.textContent = computerScore;
 
 resultEl.classList.add('move');
 setTimeout(() => resultEl.classList.remove('move'), 500);

}