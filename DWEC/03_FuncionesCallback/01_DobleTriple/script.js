let number = Number(prompt("Ingresa número"));


function calcular(num, callback){
    alert(callback(num));    
}

function doble(num){
    return num * 2;
}

function triple(num){
    return num * 3
}


// calcular(Number(prompt("Ingresa número")), doble);
// calcular(Number(prompt("Ingresa número")), triple);

