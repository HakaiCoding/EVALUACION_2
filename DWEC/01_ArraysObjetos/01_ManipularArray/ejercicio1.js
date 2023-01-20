//Creacion array de 10 elementos

let tabla = new Array(10);

//Rellenar el array con 10 numeros aleatorios

for (let i = 0; i < tabla.length; i++) {

    tabla[i] = Math.trunc(Math.random() * 100);
    console.log(tabla[i]); 
    
    if(tabla[i] === 50) {
        console.log(`En la posicion ${i+1} el valor es 50`);
    }
}

//Visualizar el número más grande dentro del array

let numMayor = 0;

for (let index in tabla) {
    if(tabla[index] > numMayor) {
        numMayor = tabla[index];
    }
}

console.log(`El número más grande dentro del array es ${numMayor}`);

//Ordenar el array de menor a mayor

let aux;

for (let i = 0; i < tabla.length; i++) {
    for (let j = 0; j < tabla.length; j++) {
        if(tabla[j]>tabla[j+1]){
            aux=tabla[j]; //Guardamos el número más grande en la variable aux
            tabla[j]=tabla[j+1]; //Guardamos el numero menor en el lugar correspondiente
            tabla[j+1]=aux; //Asignamos el auxiliar en el lugar correspondiente

       }
    }
}

console.table(tabla);

//Visualizar la media

let acum = 0

for (let index in tabla) {
    acum = acum + tabla[index];
}

let media = acum / tabla.length;
console.log(`La media es ${media}`);