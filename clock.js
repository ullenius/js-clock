"use strict";
function time() {

    var now = new Date();
    var time = now.getHours();
    time = padZeroes(time);

    var minutes = now.getMinutes();
    minutes = padZeroes(minutes);

    var seconds = now.getSeconds();
    seconds = padZeroes(seconds);
    time = time.concat(":", minutes, ":", seconds);
    return time;
}

function padZeroes(number) {

    var result = number.toString();
    if (number < 10)
        result = "0" + number;
    return result;
}

function updateClock() {

    var clock = document.getElementById("time");
    clock.textContent = time();
}
setInterval(updateClock, 1000);
