let centiseconds = 0;
let timerInterval = null;

function updateTimerDisplay() {
    let seconds = Math.floor(centiseconds / 100);
    let centiSecs = centiseconds % 100;

    // Format as 3 digits for seconds and 2 digits for centiseconds
    let secondsFormatted = String(seconds).padStart(3, '0');
    let centisecondsFormatted = String(centiSecs).padStart(2, '0');

    document.getElementById("timer").innerText = `${secondsFormatted}:${centisecondsFormatted}`;
}

function startTimer() {
    if (!timerInterval) {
        timerInterval = setInterval(() => {
            centiseconds++;
            if (centiseconds >= 999 * 100 + 59) {
                stopTimer();
                centiseconds = 999 * 100 + 59;
            }
            updateTimerDisplay();
        }, 10); // 10 milliseconds = 1 centisecond
    }
}

function stopTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
}

function resetTimer() {
    stopTimer();
    centiseconds = 0;
    updateTimerDisplay();
}

updateTimerDisplay();
