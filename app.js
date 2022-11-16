const pcCard = document.querySelector('.item-card-pc');
const rockCard = document.querySelector('.rk');
const paperCard = document.querySelector('.pp');
const scissorCard = document.querySelector('.sc');
const messenger = document.querySelector('.message');
const scoreCard = document.querySelector('.scorecard');

cards = ['Rock', 'Paper', 'Scissor'];

function computerSel() {
    return cards[Math.floor(Math.random() * cards.length)];
}

function checkWin(op1, op2) {

    var result = '';
    pcCard.innerHTML = op2;
    
    if (op1 == op2) {
        result = 'Draw';
    } else if ((op1 == 'Rock' && op2 =='Scissor') || (op1 == 'Paper' && op2 == 'Rock') || (op1 == 'Scissor' && op2 =='Paper')){
        result = 'Win';
    } else {
        result = 'Loose';
    }
    
    return result;
}

function updateScore(p,c) {
    scoreCard.innerHTML = 'PLAYER - ' + p + '<br>COMPUTER - ' + c;
}

function sendMessage(str) {
    messenger.innerHTML = str;
}

function compdisplay(str) {
    pcCard.innerHTML = str;
}

var playerSelection = '';
var computerSelecection = '';
var playerScore = 0;
var pcScore = 0;

function playRound(player) {

    if (playerScore >= 5 || pcScore >= 5) {
        alert('New Game Started');
        playerScore = 0;
        pcScore = 0;
    }
    
    playerSelection = player.innerHTML;

    computerSelecection = computerSel();
    compdisplay(computerSelecection);

    if (checkWin(playerSelection,computerSelecection) == 'Win') {
        sendMessage("You won the move!");
        playerScore ++;
        console.log('won');
    } else if (checkWin(playerSelection,computerSelecection) == 'Draw'){
        sendMessage("It was a Draw");
    } else {
        sendMessage("You lost!");
        console.log('lost');
        pcScore++;

    }

}

rockCard.addEventListener('click', () => {
    playRound(rockCard);
    updateScore(playerScore, pcScore);
});
paperCard.addEventListener('click', () => {
    playRound(paperCard);
    updateScore(playerScore, pcScore);
});
scissorCard.addEventListener('click', () => {
    playRound(scissorCard);
    updateScore(playerScore, pcScore);
});


