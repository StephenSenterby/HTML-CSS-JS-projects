//Digital Clock
function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    document.getElementById('digital-clock').textContent = `${hours}:${minutes}:${seconds}`;

    //Date display
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() +1).padStart(2, '0');
    const year = now.getFullYear();
    document.getElementById('date-display').textContent = `${day}/${month}/${year}`;
}
setInterval(updateClock, 1000);
updateClock();

//Stopwatch
let stopwatchInterval;
let elapsedTime = 0;
let running = false;

const stopwatchDisplay = document.getElementById('stopwatch');
const lapList = document.getElementById('laps');

function formatTime(ms){
    const totalSeconds = Math.floor(ms /1000);
    const hours = String(Math.floor(totalSeconds /3600)).padStart(2, '0');
    const minutes = String(Math.floor((totalSeconds %3600) /60)).padStart(2, '0');
    const seconds = String(totalSeconds %60).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
}

function updateStopwatch(){
    stopwatchDisplay.textContent = formatTime(elapsedTime);
}

document.getElementById('start').addEventListener('click', () => {
  if (!running) {
    running = true;
    const startTime = Date.now() - elapsedTime;
    stopwatchInterval = setInterval(() => {
      elapsedTime = Date.now() - startTime;
      updateStopwatch();
    }, 100);
  }
});

document.getElementById('pause').addEventListener('click', () =>{
    if(running){
        running = false;
        clearInterval(stopwatchInterval);
    }
});

document.getElementById('reset').addEventListener('click', () =>{
    running = false;
    clearInterval(stopwatchInterval);
    elapsedTime = 0;
    updateStopwatch();
    lapList.innerHTML = '';//Clears Laps
});

document.getElementById('laps').addEventListener('click', () => {
  if (running) {
    const li = document.createElement('li');
    li.textContent = formatTime(elapsedTime);
    lapsList.appendChild(li);
  }
});

// THEME TOGGLE
document.getElementById('theme-toogle').addEventListener('click', () => {
  document.body.classList.toggle('dark');
}); 
