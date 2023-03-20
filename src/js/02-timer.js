import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const dateInputEl = document.querySelector('#datetime-picker');
const btnEl = document.querySelector('button');
const daysCounterEl = document.querySelector('.value[data-days]');
const hoursCounterEl = document.querySelector('.value[data-hours]');
const minutesCounterEl = document.querySelector('.value[data-minutes]');
const secondsCounterEl = document.querySelector('.value[data-seconds]');

btnEl.addEventListener('click', timerStartHandler);

btnEl.disabled = true;

let timerInterval = null;
let selectedDate = null;
let isStarted = false;

const fpSettingsObj = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (isStarted) {
      return;
    }

    selectedDate = selectedDates[0].getTime();

    if (counterDate() > 0) {
      btnEl.disabled = false;

      return selectedDate;
    }

    btnEl.disabled = true;
    window.alert('Please choose a date in the future');
  },
};

flatpickr(dateInputEl, fpSettingsObj);

function timerStartHandler() {
  btnEl.disabled = true;
  isStarted = true;

  timerInterval = setInterval(() => {
    const timer = convertMs(counterDate());

    daysCounterEl.textContent = addLeadingZero(timer.days);
    hoursCounterEl.textContent = addLeadingZero(timer.hours);
    minutesCounterEl.textContent = addLeadingZero(timer.minutes);
    secondsCounterEl.textContent = addLeadingZero(timer.seconds);
  }, 1000);

  setTimeout(() => {
    clearInterval(timerInterval);
  }, counterDate());
}

function currentDate() {
  return new Date().getTime();
}

function counterDate() {
  return selectedDate - currentDate();
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}
