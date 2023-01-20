//DOM
let form = document.getElementById("formulario");
let userDni = document.getElementById("dni");
let userName = document.getElementById("nombre");
let userDob = document.getElementById("fecha");
let userChild = document.getElementById("hijos");
let userEmail = document.getElementById("email");
let userWeb = document.getElementById("web");
let userPass = document.getElementById("password");

let resetButton = document.getElementById("reset");
let sendButton = document.getElementById("send");



//VALIDACIONES
let nameValidation = /^[a-zA-Z\s]+$/;
let dniValidation = /^[0-9]{8}[A-Z]$/;
let numberValidation = /^([0-9]|10)$/;
let passwordValidation = /^[a-zA-Z0-9!@#$%^&*]{8,10}$/;
let emailValidation = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
let webValidation = /^http:\/\//;
let ageValidation = /^[0-9]{4}\-[0-9]{2}\-[0-9]{2}$/;


//EVENTOS

resetButton.addEventListener("click", function (event) {
    if(!confirm("¿Estas seguro de que quieres borrar los datos?")){
        event.preventDefault();
    } 
});

//EVENTO PERDIDA FOCO (ROJO NO PASA, VERDE PASA)
userDni.addEventListener("blur", function (event) {
    if (!dniValidation.test(userDni.value)) {
        userDni.style.border = "2px solid red";
    }
    else{
        userDni.style.border = "2px solid green";
    }
});

userName.addEventListener("blur", function (event) {
    if (!nameValidation.test(userName.value)) {
        userName.style.border = "2px solid red";
    }
    else{
        userName.style.border = "2px solid green";
    }
});

userChild.addEventListener("blur", function (event) {
    if (!numberValidation.test(userChild.value)) {
        userChild.style.border = "2px solid red";
    }
    else{
        userChild.style.border = "2px solid green";
    }
});




//////////
form.addEventListener("submit", function (event) {
    if(userDni.value !== "" && userName.value !== "" && userDob.value !== "" && userChild.value !== "" && userWeb.value !== "" && userEmail.value !== ""){
        if(nameValidation.test(userName.value)){
            alert("Nombre correcto");
        }
        else{
            alert("Nombre incorrecto");
        }

        if(dniValidation.test(userDni.value)){
            alert("DNI correcto");
        }
        else{
            alert("DNI incorrecto");
        }

        //AAAA-MM-DD
        if(ageValidation.test(userDob.value)){
            // convertir las fechas a objetos Date
            let userDate = new Date(userDob.value);
            let actualDate = Date.now();
              
            // restar las fechas y obtener la diferencia en milisegundos
            let diff = actualDate - userDate;
              
            // convertir la diferencia a días
            let years = diff / (1000 * 60 * 60 * 24 * 365);

            console.log(years);         
            if(years >= 18){
                alert("Mayor de edad");
            }
            else{
                alert("Menor de edad");
            } 
            alert("Fecha correcta");
        }
        else{
            alert("Fecha incorrecta");
        }

        if(numberValidation.test(userChild.value)){
            alert("Numero de hijos correcto");
        }
        else{
            alert("Numero de hijos incorrecto");
        }

        if(emailValidation.test(userEmail.value)){
            alert("Email correcto");
        }
        else{
            alert("Email incorrecto");
        }

        if(webValidation.test(userWeb.value)){
            alert("Web correcta");
        }
        else{
            alert("Web incorrecta");
        }

        if(passwordValidation.test(userPass.value)){
            alert("Contraseña correcta");
        }
        else{
            alert("Contraseña incorrecta");
        }
    }
    else{  
        event.preventDefault();
        alert("Rellena todos los campos");
    }

});