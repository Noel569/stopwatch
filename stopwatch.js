let appendMinutes = document.getElementById("minutes");
let appendSeconds = document.getElementById("seconds");
let appendHundredths = document.getElementById("hundredths");
let resetButton = document.getElementById("reset");
let startButton = document.getElementById("start");
let stopButton = document.getElementById("stop");
let saveButton = document.getElementById("save");
let animateCircle = document.getElementById("animateCircle");
let interval;

let circumference = animateCircle.getTotalLength();

let minutes = 00;
let seconds = 00;
let hundredths = 00;

function startTimer() {
    hundredths++;

    if (hundredths < 9) {
        appendHundredths.innerHTML = "0" + hundredths;
    }
    if (hundredths > 9) {
        appendHundredths.innerHTML = hundredths;
    }
    if (hundredths > 99) {
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        hundredths = 0;
        appendHundredths.innerHTML = "0" + 0;
    }
    if (seconds > 9) {
        appendSeconds.innerHTML = seconds;
    }
    if (seconds > 59) {
        minutes++;
        appendMinutes.innerHTML = "0" + minutes;
        seconds = 0;
        appendSeconds.innerHTML = "0" + 0;
    }
    if (minutes > 9) {
        appendMinutes.innerHTML = minutes;
    }

    animateCircle.style.strokeDashoffset = circumference - ((hundredths + seconds * 100) / 6000) * circumference;
}

startButton.onclick = function() {
    interval = setInterval(startTimer, 10);
    startButton.style.display = "none";
    stopButton.style.display = "block";
}

stopButton.onclick = function() {
    clearInterval(interval);
    stopButton.style.display = "none";
    startButton.style.display = "block";
}

resetButton.onclick = function() {
    clearInterval(interval);
    stopButton.style.display = "none";
    startButton.style.display = "block";
    hundredths = "00";
    seconds = "00";
    minutes = "00";
    appendHundredths.innerHTML = hundredths;
    appendSeconds.innerHTML = seconds;
    appendMinutes.innerHTML = minutes;
    animateCircle.style.strokeDashoffset = circumference;
}

saveButton.onclick = function() {
    console.log(appendMinutes.innerHTML + ":" + appendSeconds.innerHTML + "," + appendHundredths.innerHTML);
}