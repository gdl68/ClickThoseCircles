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
}






