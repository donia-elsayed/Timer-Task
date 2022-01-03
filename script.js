var startTime = parseInt(prompt("Please Enter The Count You Want to Start With?"));
var count = document.getElementById("count-down");
var timeLeft = startTime * 60;
countdown(timeLeft);
var setTime = setInterval(function () {
    timeLeft--;
    countdown(timeLeft);
    if (timeLeft <= 0) {
        clearInterval(setTime);
        alert("time Out");
    }
}, 1000);
function countdown() {
    var minutes = Math.floor((timeLeft / 60));
    var seconds = timeLeft % 60;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    count.innerHTML = minutes + ":" + seconds;
    
}

