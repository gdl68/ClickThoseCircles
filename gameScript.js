var circle = document.getElementById('circle');
var score = document.getElementById('score');
var combo = document.getElementById('combo');
var field = document.getElementById('gameWindow');
var CLICK_VALUE = 300;


circle.onclick = function () {
    combo.innerHTML = parseInt(combo.innerHTML) + 1;
    score.innerHTML = parseInt(score.innerHTML) + CLICK_VALUE * (combo.innerHTML / 4);
    circle.style.bottom = Math.random() * 80 + 10 + "%";
    circle.style.left = Math.random() * 80 + 10 + "%";
};

var currentTime = new Date();
var currentTimeElem = document.getElementById("currentTime");

setInterval(function () {
    currentTimeElem.innerHTML = "Time: " + currentTime.getHours() + ":"
        + currentTime.getMinutes() + ":" + currentTime.getSeconds();
    currentTime.setSeconds(currentTime.getSeconds() + 1);
}, 1000);


var playTime = new Date(0, 0, 0, 0, 0, 0);
var playTimeElem = document.getElementById("playTime");

setInterval(function () {
    playTimeElem.innerHTML = "Playtime: " + playTime.getHours() + ":" +
        playTime.getMinutes() + ":" + playTime.getSeconds();
    playTime.setSeconds(playTime.getSeconds() + 1);
}, 1000);



var circleSizeInput = document.getElementById("circleSize");

circleSizeInput.onblur = function () {
    circle.style.width = circleSizeInput.value + "px";
    circle.style.height = circleSizeInput.value + "px";
};


var circleColorInput = document.getElementById("circleColor");

circleColorInput.onblur = function () {
    circle.style.backgroundColor = circleColorInput.value;
}




