// Ejercico 3 Minicalculadora
// Para realizar esta calculadora diseñamos una función de orden superior que recibe 2
// números solicitados con prompt y la operación que se desea realizar con ellos. Esta
// operación (+ - * o /) se llevará a cabo mediante el uso de una función callback y también se
// preguntará al usuario mediante prompt, la operación que desea realizar.


let num1 = Number(prompt("Ingresa primer número"));
let num2 = Number(prompt("Ingresa segundo número"));
let operator = prompt("Que tipo de operación quieres realizar? +(suma) -(resta) *(multiplicar) /(dividir)");



function calcular(num1, num2, callback){
    console.log(callback(num1, num2));  
}

function sum(num1, num2){
    return num1 + num2;
}

function res(num1, num2){
    return num1 - num2;
}

function mul(num1, num2){
    return num1 * num2;
}

function div(num1, num2){
    return num1 / num2;
}


if(operator === "+"){
    calcular(num1, num2, sum);
}
else if(operator === "-"){
    calcular(num1, num2, res);  
}
else if(operator === "*"){
    calcular(num1, num2, mul);
}
else{
    calcular(num1, num2, div);
}

