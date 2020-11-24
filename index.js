var name = prompt("Enter your name:");
alert("Do you want to start");

window.onscroll = function() {myFunction()};

var header = document.getElementById('countdown');
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}


const startingmiute = 15;
let time = startingmiute*60;

const coundownEl = document.getElementById('countdown');

setInterval(updateCountdown,1000);

function updateCountdown() {
    const minutes = Math.floor(time/60);
    let seconds = time % 60;

    seconds = seconds < 15 ? '0'+ seconds : seconds;

    coundownEl.innerHTML = `${name}, you have  "${minutes}:${seconds}" time left.`;
    time--;
}