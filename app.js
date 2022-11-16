const pcCard = document.querySelector('.item-card-pc');
const rockCard = document.querySelector('.rk');
const paperCard = document.querySelector('.pp');
const scissorCard = document.querySelector('.sc');

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

var playerSelection = '';

rockCard.addEventListener('click', () => {
    playerSelection = rockCard.innerHTML;
});
paperCard.addEventListener('click', () => {
    playerSelection = paperCard.innerHTML;
});
scissorCard.addEventListener('click', () => {
    playerSelection = scissorCard.innerHTML;
});

console.log(checkWin('Paper', 'asdf'));
