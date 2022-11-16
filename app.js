const pcCard = document.querySelector('.item-card-pc');
const rockCard = document.querySelector('.rk');
const paperCard = document.querySelector('.pp');
const scissorCard = document.querySelector('.sc');
const messenger = document.querySelector('.message');

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

function sendMessage(str) {
    messenger.innerHTML = str;
}

function compdisplay(str) {
    pcCard.innerHTML = str;
}

var playerSelection = '';
var computerSelecection = '';

function playRound(player) {

    playerSelection = player.innerHTML;

    computerSelecection = computerSel();
    compdisplay(computerSelecection);

    if (checkWin(playerSelection,computerSelecection) == 'Win') {
        sendMessage("You won the move!");
        console.log('won');
    } else if (checkWin(playerSelection,computerSelecection) == 'Draw'){
        sendMessage("It was a Draw");
    } else {
        sendMessage("You lost!");
        console.log('lost');
 
    }  
}

rockCard.addEventListener('click', () => {
    playRound(rockCard);
});
paperCard.addEventListener('click', () => {
    playRound(paperCard);
});
scissorCard.addEventListener('click', () => {
    playRound(scissorCard);
});


