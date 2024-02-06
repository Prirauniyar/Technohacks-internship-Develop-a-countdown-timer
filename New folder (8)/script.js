let timer;
let secondsRemaining;
let isRunning = false;

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        const inputMinutes = prompt("Enter countdown minutes:");
        secondsRemaining = parseInt(inputMinutes) * 60;

        timer = setInterval(updateTimer, 1000);
    }
}

function stopTimer() {
    isRunning = false;
    clearInterval(timer);
}

function resetTimer() {
    stopTimer();
    updateDisplay(0);
}

function updateTimer() {
    if (secondsRemaining > 0) {
        secondsRemaining--;
        updateDisplay(secondsRemaining);
    } else {
        stopTimer();
        alert("Countdown complete!");
    }
}

function updateDisplay(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;

    document.getElementById('timer').innerText = formattedTime;
}
