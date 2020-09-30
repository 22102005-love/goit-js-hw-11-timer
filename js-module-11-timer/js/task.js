const refs = {
  daysSpan: document.querySelector("[data-value='days']"),
  hoursSpan: document.querySelector("[data-value='hours']"),
  minetsSpan: document.querySelector("[data-value='mins']"),
  secondSpan: document.querySelector("[data-value='secs']"),
};

let intervalId = null;
intervalId = setInterval(() => {
  const targetDate = new Date("Oct 17, 2020");
  const currentTime = Date.now();
  const time = targetDate - currentTime;
  updateTimer(time);
}, 1000);

function updateTimer(time) {
  const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
  const hours = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  );
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
  refs.daysSpan.textContent = `${days}:`;
  refs.hoursSpan.textContent = `${hours}:`;
  refs.minetsSpan.textContent = `${mins}:`;
  refs.secondSpan.textContent = `${secs}`;
}
function pad(value) {
  return String(value).padStart(2, 0);
}
