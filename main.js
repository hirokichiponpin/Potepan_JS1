const pushStart = document.getElementById('start')
const pushStop = document.getElementById('stop')
const pushReset = document.getElementById('reset')
const timeMeasure = document.getElementById('time')

let startTime;
let stopTime = 0;
let timeOut;

function displayTime() {
    const currentTime = new Date(Date.now() - startTime + stopTime);
    const hour = ('0' + currentTime.getUTCHours()).slice(-2);
    const minute = ('0' + currentTime.getMinutes()).slice(-2);
    const second = ('0' + currentTime.getSeconds()).slice(-2);
    const milliSecond = ('0' + currentTime.getMilliseconds()).slice(-2);

    time.textContent = `${hour}:${minute}:${second}:${milliSecond}`
    timeout = setTimeout(displayTime, 10);
}

let startMeasurement = function() {
    pushStart.disabled = true;
    pushStop.disabled = false;
    pushReset.disabled = true;
    startTime = Date.now();
    displayTime();
}


let stopMeasurement = function() {
    pushStart.disabled = false;
    pushStop.disabled = true;
    pushReset.disabled = false;
    clearTimeout(timeout);
    stopTime += (Date.now() - startTime);
}

let resetMeasurement = function() {
    pushStart.disabled = false;
    pushStop.disabled = true;
    pushReset.disabled = true;
    time.textContent = '00:00:00:00';
    stopTime = 0;
}

