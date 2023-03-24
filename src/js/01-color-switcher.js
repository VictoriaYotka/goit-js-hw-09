const bodyEl = document.body;
const startBtnEl = document.querySelector('button[data-start]');
const stopBtnEl = document.querySelector('button[data-stop]');

startBtnEl.classList.add('btn', 'start_btn');
stopBtnEl.classList.add('btn', 'stop_btn');

startBtnEl.addEventListener('click', colorSwitchHandler);
stopBtnEl.addEventListener('click', stopColorSwitchHandler);

stopBtnEl.disabled = true;

let switchInterval = null;

function colorSwitchHandler() {
  startBtnEl.disabled = true;
  stopBtnEl.disabled = false;

  switchBodyColor();

  switchInterval = setInterval(switchBodyColor, 1000);
}

function stopColorSwitchHandler() {
  startBtnEl.disabled = false;
  stopBtnEl.disabled = true;

  clearInterval(switchInterval);
}

function switchBodyColor() {
  bodyEl.style.backgroundColor = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
