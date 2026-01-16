    // Load score safely
    let score = JSON.parse(localStorage.getItem('score'));
    if (!score || score.wins === undefined) {
        score = { wins: 0, losses: 0, ties: 0 };
    }

    document.querySelector('.js-score').innerHTML=
    `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
    

    function playGame(playerMove) {
        const computerMove = pickcomputerMove();
        let result = '';

        if (playerMove === 'scissors') { 
            if (computerMove === 'rock') {
                result = 'you lose';
            } else if (computerMove === 'paper') {
                result = 'you win';
            } else {
                result = 'tie';
            }
        } 
        else if (playerMove === 'paper') {
            if (computerMove === 'rock') {
                result = 'you win';
            } else if (computerMove === 'paper') {
                result = 'tie';
            } else {
                result = 'you lose';
            }
        } 
        else if (playerMove === 'rock') {
            if (computerMove === 'rock') {
                result = 'tie';
            } else if (computerMove === 'paper') {
                result = 'you lose';
            } else {
                result = 'you win';
            }
        }

        // Update score
        if (result === 'you win') {
            score.wins++;
        } else if (result === 'you lose') {
            score.losses++;
        } else {
            score.ties++;
        }
        updateSoreButton();

        document.querySelector('.js-result').innerHTML=result;
        document.querySelector('.js-moves').innerHTML=
    `You
    <img src="${playerMove}.png" class="move-icon">
    <img src="${computerMove}.png" class="move-icon">
    computer`;

        // Save updated score
        localStorage.setItem('score', JSON.stringify(score));

       /*  alert(`you picked ${playerMove}. computer picked ${computerMove}. ${result}
Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`); */
    }

    function updateSoreButton(){
        document.querySelector('.js-score').innerHTML=
    `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
    }

    function pickcomputerMove() {
        const randomNumber = Math.random();
        
        if (randomNumber < 1/3) {
            return 'rock';
        } else if (randomNumber < 2/3) {
            return 'paper';
        } else {
            return 'scissors';
        }
    }