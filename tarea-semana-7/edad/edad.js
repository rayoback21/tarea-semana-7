
let edad;
let añoNaci= prompt("Ingrese su Año de Nacimiento: ");
let añoActual=2023;

function calcularEdad(edad,añoNaci,añoActual) {
    if (añoNaci<añoActual) {
        return edad=añoActual-añoNaci;
    }else{
        return console.log("Año Incorrecto");
    }
     
}

let resultado=calcularEdad(edad,añoNaci,añoActual);
alert(resultado);


