let player1_score = 0;
let player2_score = 0;
let p1_exit = false;
let p2_exit = false;

const rollDice = () => Math.floor(Math.random() * 6) + 1;

const updateScore = (player, score) => {
    document.getElementById(`score${player}`).innerText = `Score: ${score}`;
};

const displayMessage = (player, message) => {
    document.getElementById(`message${player}`).innerText = message;
};

const resetGame = () => {
    document.getElementById('roll1').disabled = false; // Enable Player 1's roll button
    document.getElementById('roll2').disabled = true; // Disable Player 2's roll button initially

    player1_score = 0;
    player2_score = 0;
    p1_exit = false;
    p2_exit = false;
    updateScore(1, player1_score);
    updateScore(2, player2_score);
    displayMessage(1, '');
    displayMessage(2, '');
    document.getElementById('restartModal').style.display = 'none'; // Hide the modal
};

document.getElementById('roll1').addEventListener('click', () => {
    if (p1_exit || p2_exit) return; // Prevent further actions if the game has ended

    document.getElementById('roll1').disabled = true; // Disable Player 1's roll button after rolling
    document.getElementById('roll2').disabled = false; // Enable Player 2's roll button

    const score = rollDice();
    player1_score += score;
    updateScore(1, player1_score);
    displayMessage(1, `Player 1 rolled: ${score}`);
    if (player1_score >= 20) {
        displayMessage(1, "CONGRATULATIONS, PLAYER 1 WINS!");
        p1_exit = true;
        document.getElementById('restartModal').querySelector('p').innerText = "CONGRATULATIONS, PLAYER 1 WINS!";
        document.getElementById('restartModal').style.display = 'block'; // Show the modal
    }
});

document.getElementById('quit1').addEventListener('click', () => {
    if (p1_exit || p2_exit) return; // Prevent further actions if the game has ended

    displayMessage(1, "PLAYER 1 Quits!");
    displayMessage(2, "CONGRATULATIONS, PLAYER 2 WINS!");
    p1_exit = true;
    document.getElementById('restartModal').querySelector('p').innerText = "CONGRATULATIONS, PLAYER 2 WINS!";
    document.getElementById('restartModal').style.display = 'block'; // Show the modal
});

document.getElementById('roll2').addEventListener('click', () => {
    if (p1_exit || p2_exit) return; // Prevent further actions if the game has ended

    document.getElementById('roll2').disabled = true; // Disable Player 2's roll button after rolling
    document.getElementById('roll1').disabled = false; // Enable Player 1's roll button

    const score = rollDice();
    player2_score += score;
    updateScore(2, player2_score);
    displayMessage(2, `Player 2 rolled: ${score}`);
    if (player2_score >= 20) {
        displayMessage(2, "CONGRATULATIONS, PLAYER 2 WINS!");
        p2_exit = true;
        document.getElementById('restartModal').querySelector('p').innerText = "CONGRATULATIONS, PLAYER 2 WINS!";
        document.getElementById('restartModal').style.display = 'block'; // Show the modal
    }
});

document.getElementById('quit2').addEventListener('click', () => {
    if (p1_exit || p2_exit) return; // Prevent further actions if the game has ended

    displayMessage(2, "PLAYER 2 Quits!");
    displayMessage(1, "CONGRATULATIONS, PLAYER 1 WINS!");
    p2_exit = true;
    document.getElementById('restartModal').querySelector('p').innerText = "CONGRATULATIONS, PLAYER 1 WINS!";
    document.getElementById('restartModal').style.display = 'block'; // Show the modal
});

// Add event listener for the restart button
document.getElementById('restartButton').addEventListener('click', resetGame);

document.getElementById('closeModal').addEventListener('click', resetGame);

const toggleMode = () => {
    document.body.classList.toggle('night-mode'); // Toggle the night-mode class
};

document.getElementById('modeToggle').addEventListener('click', toggleMode);

resetGame();
