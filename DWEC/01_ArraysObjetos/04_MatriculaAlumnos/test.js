let alumMat = String(prompt("Ingresar matrícula"));
regex = /^[A-Z]{1}[0-9]{3}$/;
checkMatricula = matriculas.includes(alumMat);
let flag = true;


while(flag === false){

    if(regex.test(alumMat) === false){
        alumMat = String(prompt("Matrícula inválida, ingresar una matrícula con el siguiente formato: A123"));
        checkMatricula = matriculas.includes(alumMat);
    }
    else if(checkMatricula === true){
        alumMat = String(prompt("Esa matrícula ya existe, ingresa una diferente"));
    }
    else{
        flag = false;
    }
}




///////////////////

let alumMat = String(prompt("Ingresar matrícula"));
regex = /^[A-Z]{1}[0-9]{3}$/;
while (regex.test(alumMat) === false) {
    alumMat = String(prompt("Matrícula inválida, ingresar una matrícula con el siguiente formato: A123"));
}
checkMatricula = matriculas.includes(alumMat);
while (checkMatricula === true) {
    alumMat = String(prompt("Esa matrícula ya existe, ingresa una diferente"));
    checkMatricula = matriculas.includes(alumMat);
}
matriculas.push(alumMat);