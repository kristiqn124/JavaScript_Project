var second = 00;
var tens = 00;
var minutes = 00;
var isOn = false;
var appendTens = document.getElementById('tens');
var appendSeconds = document.getElementById('seconds');
var appendMinutes = document.getElementById('minutes')
var Start = document.getElementById('btn-Start');
var Stop = document.getElementById('btn-Stop');
var Reset = document.getElementById('btn-Reset');
var interval;


function startTimer() {
    tens++;
    if (tens < 9) {
        appendTens.innerHTML = "0" + tens;
    }
    if (tens > 9) {
        appendTens.innerHTML = tens;
    }
    if (tens > 99) {
        second++;
        appendSeconds.innerHTML = "0" + second;
        tens = 0;
        appendTens.innerHTML = "0" + 0;
    }
    if (second > 9) {
        appendSeconds.innerHTML = second;
    }
    if (second > 59) {
        minutes++;
        appendMinutes.innerHTML = '0' + minutes;
        second = 0;
        appendSeconds.innerHTML = "0" + 0;
    }
    if (minutes > 9) {
        appendMinutes.innerHTML = second;
    }
    
};

function start() {
    if (isOn === false) {
        interval = setInterval(startTimer);
        isOn = true;

    }
};

function stop() {
    if (isOn === true) {
        clearInterval(interval);
        isOn = false;
    }
};

function reset() {
    clearInterval(interval);
    tens = "00";
    second = "00";
    minutes = "00"
    appendMinutes.innerHTML = minutes;
    appendSeconds.innerHTML = second;
    appendTens.innerHTML = tens;
    isOn = false;
};

Start.addEventListener('click', start);
Stop.addEventListener('click', stop);
Reset.addEventListener('click', reset);
