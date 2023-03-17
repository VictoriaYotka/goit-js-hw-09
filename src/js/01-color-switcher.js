const bodyEl = document.body;
const startBtnEl = document.querySelector('button[data-start]');
const stopBtnEl = document.querySelector('button[data-stop]');

startBtnEl.addEventListener('click', colorSwitchHandler);
stopBtnEl.addEventListener('click', stopColorSwitchHandler);

function colorSwitchHandler() {
  startBtnEl.disabled = true;
  stopBtnEl.disabled = false;

  switchInterval = setInterval(() => {
    bodyEl.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function stopColorSwitchHandler() {
  startBtnEl.disabled = false;
  stopBtnEl.disabled = true;

  clearInterval(switchInterval);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
