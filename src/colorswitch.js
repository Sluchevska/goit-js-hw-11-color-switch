import './sass/main.scss'

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
const bodyRef = document.querySelector('body');
const startBtn = document.querySelector("[data-action='start']");
const stopBtn = document.querySelector("[data-action='stop']");

startBtn.addEventListener('click', () => {
  random.start()
});
stopBtn.addEventListener('click', () => {
  random.stop()
});

class Random {
  constructor({ onClick }) {
    this.intervalID = null;
    this.isActive = false;
    this.onClick = onClick;
  }
  start() {
    if (this.isActive) {
      return
    }
    this.isActive = true;
    this.intervalID = setInterval(function () {
    const randomIntegerFromInterval = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
         
    };
    
    bodyRef.style.backgroundColor = colors[randomIntegerFromInterval(0,6)]
  },1000)
  }
  stop() {
  clearInterval(this.intervalID);
  this.isActive = false
}
}

const random = new Random({
  onClick: setInterval})
