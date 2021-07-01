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

startBtn.addEventListener('click', randomColorSwitch);

function randomColorSwitch() {
    const randomIntegerFromInterval = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
         
    };
    
    bodyRef.style.backgroundColor = colors[randomIntegerFromInterval(0,6)]
    
    // bodyRef.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
  
    
    
};

