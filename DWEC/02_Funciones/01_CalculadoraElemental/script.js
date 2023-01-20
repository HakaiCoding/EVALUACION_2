// a. Calculadora elemental
// Se pedirá mediante prompt la operación a realizar que debe ser un valor de
// entre los siguientes: “sumar”, “restar”, “multiplicar” y “dividir”. Se utilizará una
// función.
// A continuación, se piden dos números también con prompt. Cada número se
// pide mediante la misma función que comprueba que se trata de un número
// antes de devolverlo.
// Calcularemos la operación mediante una función flecha. El resultado
// devuelto se visualiza mediante alert().
// Modifica el programa tratando de convertir las funciones en funciones
// anónimas.
// Indica que tipo de función te parece más adecuado en cada caso.

let operador = "";

//FUNCION QUE PIDE EL TIPO DE OPERADOR A UTILIZAR
function tipoOperador(){
    tipo = String(prompt("¿Que tipo de cálculo deseas realizar? suma, resta, multiplicar o divir"));
    operador = tipo;
    return operador;
}

//FUNCION QUE PIDE UN NÚMERO Y COMPRUEBA SI ES UN NÚMERO
function pedirNumero(){
    let num = Number(prompt("Ingresa un número"));
    while(!Number(num)){
        num = Number(prompt("Número no válido. Ingresa un número"));
    }
    return num;
}

//FUNCION FLECHA QUE HACE LA OPERACIÓN
let calcular = (a, b) => {
    if(operador === "suma"){
        resultado = a + b;
    }
    else if(operador === "resta"){
        resultado = a - b;
    }
    else if(operador === "multiplicar"){
        resultado = a * b;
    }
    else if(operador === "dividir"){
        resultado = a / b ;
    }
    else{
        resultado = "El operador no es válido";
    }

    return resultado;
}

//LLAMADAS A FUNCIONES Y ALERT CON RESULTADO
tipoOperador();
calcular(pedirNumero(), pedirNumero());
alert(`${resultado}`);