const box1 = document.getElementById('box1');
const box2 = document.getElementById('box2');


//EVENTOS PARA BOX1
box1.addEventListener('dragstart', function(event) {
  event.dataTransfer.setData('text/plain', this.id);
  this.style.opacity = 0.5;
});

box1.addEventListener('dragend', function(event) {
  this.style.opacity = 1;
});


//EVENTOS PARA BOX2
box2.addEventListener('dragenter', function(event) {
  event.preventDefault();
  this.classList.add('over');
});

box2.addEventListener('dragleave', function(event) {
  this.classList.remove('over');
});

box2.addEventListener('dragover', function(event) {
  event.preventDefault();
});

box2.addEventListener('drop', function(event) {
  event.preventDefault();
  this.classList.remove('over');
  const data = event.dataTransfer.getData('text/plain');
  this.textContent = '¡Lo has conseguido!';
  document.getElementById(data).remove();
  this.style.backgroundColor = 'yellow';
});