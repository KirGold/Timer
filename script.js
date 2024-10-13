/*let timerId
let totalMilliseconds = 0

function startTimer(hours, minutes, seconds, milliseconds) {
    totalMilliseconds = (hours * 3600 + minutes * 60 + seconds) * 1000 + milliseconds;
    clearInterval(timerId)
    updateTimerDisplay()

    timerId = setInterval(function () {
        if (totalMilliseconds <= 0) {
            clearInterval(timerId);
            alert("Time end")
        } else {
            totalMilliseconds -= 100
            updateTimerDisplay()
        }
    }, 100)
}

function updateTimerDisplay() {
    let hours = Math.floor((totalMilliseconds / (1000 * 60 * 60)) % 24)
    let minutes = Math.floor((totalMilliseconds / (1000 * 60)) % 60)
    let seconds = Math.floor((totalMilliseconds / 1000) % 60)
    let milliseconds = totalMilliseconds % 1000

    document.getElementById("timer").innerText =
        `${hours < 10 ? '0' : ''}${hours}:` +
        `${minutes < 10 ? '0' : ''}${minutes}:` +
        `${seconds < 10 ? '0' : ''}${seconds}.` +
        `${milliseconds < 100 ? '0' : ''}${milliseconds < 10 ? '0' : ''}${milliseconds}`
}

document.getElementById("startBtn").addEventListener("click", function () {
    let hours = parseInt(document.getElementById("hours").value) || 0
    let minutes = parseInt(document.getElementById("minutes").value) || 0
    let seconds = parseInt(document.getElementById("seconds").value) || 0
    let milliseconds = parseInt(document.getElementById("milliseconds").value) || 0
    
    startTimer(hours, minutes, seconds, milliseconds);
});*/


let hours = 0
let minutes = 0
let seconds = 0
let milliseconds = 0
let timerId = null


function formatTime(value) {
    return value < 10 ? `0${value}` : value;
}
function formatMilliseconds(value) {
    if (value < 10) return `00${value}`;
    if (value < 100) return `0${value}`;
    return value;
}

//  Update display
function updateDisplay() {
    document.getElementById('display').textContent = 
        `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}.${formatMilliseconds(milliseconds)}`;
}

// Start
document.getElementById('start').addEventListener('click', function() {
    if (!timerId) { // If timer not started
        timerId = setInterval(function() {
            milliseconds += 10

            if (milliseconds >= 1000) {
                milliseconds = 0
                seconds++
            }

            if (seconds >= 60) {
                seconds = 0
                minutes++
            }

            if (minutes >= 60) {
                minutes = 0
                hours++
            }
            updateDisplay()
        }, 10)
    }
});

// Зупинка секундоміра
document.getElementById('stop').addEventListener('click', function() {
    clearInterval(timerId);
    timerId = null; // Очищаємо таймер
});

// Скидання лічильника
document.getElementById('reset').addEventListener('click', function() {
    clearInterval(timerId);
    timerId = null;
    hours = 0;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    updateDisplay(); // Оновлення після скидання
});