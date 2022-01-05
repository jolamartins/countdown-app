function countdown() {
const endCountdown = new Date("december 3, 2022 00:00:00").getTime()
const startCountdown = new Date().getTime()

const timer = endCountdown - startCountdown;

const seconds = 1000;
const minutes = seconds * 60;
const hours= minutes * 60;
const days = hours * 24;

let timerDays = Math.floor(timer / days);
let timerHours = Math.floor((timer % days) / hours);
let timerMinutes = Math.floor((timer % hours) / minutes);
let timerSeconds = Math.floor((timer % minutes) / seconds);

timerDays = timerDays < 10 ? "0" + timerDays : timerDays;
timerHours = timerHours < 10 ? "0" + timerHours : timerHours;
timerMinutes = timerMinutes < 10 ? "0" + timerMinutes : timerMinutes;
timerSeconds = timerSeconds < 10 ? "0" + timerSeconds : timerSeconds;

document.getElementById("days").innerHTML = timerDays;
document.getElementById("hours").innerHTML = timerHours;
document.getElementById("minutes").innerHTML = timerMinutes;
document.getElementById("seconds").innerHTML = timerSeconds;

}

setInterval(countdown, 1000);