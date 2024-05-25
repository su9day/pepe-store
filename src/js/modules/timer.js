const timer = document.getElementById('timer');
const endTime = new Date();
endTime.setMinutes(endTime.getMinutes() + 10);

const getTimeRemaining = (endTime) => {
  const currentTime = new Date();
  const t = Date.parse(endTime) - Date.parse(currentTime);

  const seconds = Math.floor((t / 1000) % 60);
  const minutes = Math.floor((t / 1000 / 60) % 60);

  return {
    total: t,
    minutes: minutes,
    seconds: seconds,
  };
};

const initTimer = (endTime) => {
  let timerInterval = setInterval(() => {
    const t = getTimeRemaining(endTime);
    const minutes = t.minutes < 10 ? `0${t.minutes}` : t.minutes;
    const seconds = t.seconds < 10 ? `0${t.seconds}` : t.seconds;
    timer.innerHTML = `${minutes}:${seconds}`;

    if (t.total <= 0) {
      clearInterval(timerInterval);
      timer.innerHTML = '00:00';
    }
  }, 1000);
};
if (timer) {
  initTimer(endTime);
}
