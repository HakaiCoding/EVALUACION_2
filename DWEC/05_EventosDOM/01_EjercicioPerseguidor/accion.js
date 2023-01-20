let holaDiv = document.getElementById("cHola");

window.addEventListener('mousemove', (evento)=>{
    holaDiv.style.marginLeft = evento.clientX + 'px';
    holaDiv.style.marginTop = evento.clientY + 'px';

})