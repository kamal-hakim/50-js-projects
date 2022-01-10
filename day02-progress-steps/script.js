const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

var currentActive = 1;

next.addEventListener('click', () => {  
  if (currentActive == circles.length) {
    currentActive = circles.length;
  } else {
    currentActive++;
  }
  update();  
});

prev.addEventListener('click', () => {  
  if (currentActive <= 1) {
    currentActive = 1;
  } else {
    currentActive--;
  }
  update();  
})

function update() {
  circles.forEach((circle, idx) => {    
    if ((idx + 1) == currentActive) circle.classList.add('active');
  });
  
  progress.style.width = (currentActive - 1) / (circles.length -1 ) * 100 + '%';
  
  if (currentActive == circles.length) {
    next.disabled = true;
  } else {
    next.disabled = false;
  }

  if (currentActive > 1) {
    prev.disabled = false;
  } else {
    prev.disabled = true;
  }
}