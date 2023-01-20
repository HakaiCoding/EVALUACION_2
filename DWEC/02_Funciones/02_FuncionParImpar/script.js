// b. Función par impar
// Mostrar 500 números aleatorios comprendidos entre 1 y 10000. Haciendo
// uso de una función que recibe como parámetro el número aleatorio generado
// y devuelve un literal “par” o “impar”, según proceda, se muestra al lado de
// cada número si es par o impar. Una vez tratados todos los parámetros,
// visualizamos un mensaje que indica si se han generado más números pares
// o más impares. Haremos uso para ello de otra función. Haz uso del tipo de
// función que sea más recomendable en cada caso. (flecha, anónima o
// tradicional)

let par = 0;
let impar = 0;

//FUNCION QUE GENERA 500 NUMEROS ALEATORIOS ENTRE 1 Y 10000
function randomNum(){
    for(let i=1; i<500; i++){
        let num = Math.floor(Math.random() * 10000) + 1;
        console.log(parImpar(num));
    }
}



//FUNCION QUE COMPRUEBA SI UN NUMERO ES PAR O IMPAR
function parImpar(num){
    if(num % 2 === 0){
        mensaje = "par";
        par++
    }
    else{
        mensaje = "impar";
        impar++
    }
    return `${num} es ${mensaje}`;
}


//FUNCION QUE CUENTA NUMEROS PARES E IMPARES
function contParImpar(){
    if(par > impar){
        mensaje = "Se han generado más números pares";
    }
    else if(par < impar){
        mensaje = "Se han generado más números impares";
    }
    else{
        mensaje = "Se han generado la misma cantidad de números pares e impares";
    }

    return alert(mensaje);
}

//LLAMADA A LAS FUNCIONES
randomNum();
contParImpar();
