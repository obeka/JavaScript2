/**
  In this week 's project you'll be making a Pomodoro Clock!
  A user can specify how many minutes the timer should be set, and with a click on the play button it starts counting down!If the user wants to pause the timer, they can do so by clicking the pause button.

  If the timer is running, the user can 't change the session length anymore
  Use at least 3 functions
  Display minutes and seconds
  If the timer finishes the timer should be replaced by the message: Time 's up!
 **/

//THIS PAGE IS NOW TABLET OR MOBILE FRIENDLY, MAIN FOCUS ON JAVASCRIPT!!!
//VARIABLES
const timeTo = document.querySelector('#time-to');
const spanM = document.querySelector('#spanM');
const spanS = document.querySelector('#spanS');
const playBtn = document.querySelector('#play');
const pauseBtn = document.querySelector('#pause');
const stopBtn = document.querySelector('#stop');
const arrowDown = document.querySelector('#arrow-down');
const arrowUp = document.querySelector('#arrow-up');
const clock = document.querySelector('.clock');
const timeUp = document.querySelector('.time-up');
const sound = new Audio('sound/alarm.mp3');

let timerVal = Number(timeTo.textContent);
let timerMilisecVal = timerVal * 60 * 1000; // milisecond value of the intended time to countdown

//FUNCTIONS

//used in playBtn event listener, starting the countdown
function countDownClock() {
  timerMilisecVal = timerVal * 60 * 1000; //after stop and resetting the timer, it calculates again.
  timeTo.classList.add('playing'); //with this class enabled, up and down buttons can't work, see below

  const timerInterval = setInterval(() => {
    //In case of pressing stop button or when the timer finishes
    if (stopBtn.classList.contains('d-none') || timerMilisecVal < 2000) {
      clearInterval(timerInterval);
    }
    //Sound effect when finished
    if (timerMilisecVal < 2000) {

      timeUpDisplay();
      sound.play();
    }
    //Calculating time each interval and changing timer display
    if (!timeTo.classList.contains('paused')) {
      timerMilisecVal -= 1000;
      const countdownTime = new Date(timerMilisecVal);
      let countdownMinute = countdownTime.getMinutes();
      let countdownSecond = countdownTime.getSeconds();
      spanM.textContent = leadingZero(countdownMinute);
      spanS.textContent = leadingZero(countdownSecond);
    };
  }, 100);
}

//play & stop buttons, used both playBtn and stopBtn event listeners
function playStopBtn() {
  playBtn.classList.toggle('d-none');
  stopBtn.classList.toggle('d-none');
}

//To have two decimal digit if seconds or minutes are one digit number like 10:2 => 10:02
function leadingZero(number) {
  return number < 10 ? '0' + number : number;
}

//timeup appear or dissappear, used in setInterval and stopBtn event listener
function timeUpDisplay() {
  clock.classList.toggle('d-none');
  timeUp.classList.toggle('d-none');
}

//arrow up and down functions, used in arrowUp and arrowDown buttons event listeners
function arrowChanges() {
  timeTo.textContent = timerVal;
  timerMilisecVal = timerVal * 60 * 1000 + 1000;
  spanM.textContent = leadingZero(timerVal);
  spanS.textContent = '00';
}

//EVENT LISTENERS
playBtn.addEventListener('click', function () {
  countDownClock();
  playStopBtn();
});

pauseBtn.addEventListener('click', function () {
  timeTo.classList.toggle('paused');
  pauseBtn.classList.toggle('fade');
});

stopBtn.addEventListener('click', function () {
  playStopBtn();
  timeTo.classList.remove('paused', 'playing'); // doing so, timer can start again and arrow can work again
  pauseBtn.classList.remove('fade');
  timerMilisecVal = timerVal * 60 * 1000 + 1000;
  if (!timeUp.classList.contains('d-none')) { // If timer finishes, stopBtn erases the 'TIME UP!' text and put the timer on screen again
    timeUpDisplay();
  }
  sound.pause();
});

arrowDown.addEventListener('click', function () {
  if (!timeTo.classList.contains('playing') && timerVal > 0) {
    timerVal -= 1;
    arrowChanges()
  }
});

arrowUp.addEventListener('click', function () {
  if (!timeTo.classList.contains('playing')) {
    timerVal += 1;
    arrowChanges()
  }
});