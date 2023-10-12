let score = 0;
let gameInterval;
let gamePaused = false;
let totalMilliseconds = 0;

const startButton = document.getElementById("startButton");
const pauseButton = document.getElementById("pauseButton");
const restartButton = document.getElementById("restartButton");
const scoreDisplay = document.getElementById("score");
const timeDisplay = document.getElementById("time");

startButton.addEventListener("click", startGame);
pauseButton.addEventListener("click", pauseGame);
restartButton.addEventListener("click", restartGame);

function startGame() {
    if (!gamePaused) {
        score = 0;
        totalMilliseconds = 0;
        updateTimerDisplay();
    }
    startButton.disabled = true;
    pauseButton.disabled = false;
    restartButton.disabled = true;
    pauseButton.style.backgroundColor = "#007BFF";
    gameInterval = setInterval(updateTimer, 10); 
    gamePaused = false;
}

function updateTimer() {
    totalMilliseconds += 10; 
    updateTimerDisplay();
}

function updateTimerDisplay() {
    const milliseconds = totalMilliseconds % 1000;
    const totalSeconds = Math.floor(totalMilliseconds / 1000);
    const seconds = totalSeconds % 60;
    const totalMinutes = Math.floor(totalSeconds / 60);
    const minutes = totalMinutes % 60;
    const hours = Math.floor(totalMinutes / 60);

    timeDisplay.textContent = `Time: ${hours}h ${minutes}m ${seconds}s ${milliseconds}ms`;
}

function pauseGame() {
    clearInterval(gameInterval);
    startButton.disabled = false;
    pauseButton.disabled = true;
    restartButton.disabled = false;
    pauseButton.style.backgroundColor = "#007123";
    gamePaused = true;
}

function restartGame() {
    clearInterval(gameInterval);
    startButton.disabled = false;
    pauseButton.disabled = true;
    restartButton.disabled = true;
    pauseButton.style.backgroundColor = "#007123";
    score = 0;
    totalMilliseconds = 0;
    scoreDisplay.textContent = "Score: 0";
    updateTimerDisplay();
    gamePaused = false;
}

