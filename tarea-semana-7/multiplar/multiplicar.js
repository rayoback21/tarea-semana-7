//Multiplicacion usando sumas
let multiplicador=prompt("Ingrese el Multiplicador: ");
let multiplicando=prompt("Ingrese el Multiplicando: ");
function multiplicarConSumas(multiplicando, multiplicador) {
    // Manejar el caso de multiplicador igual a 0
    if (multiplicador === 0) {
        return 0;
    }

    // Inicializar el resultado en 0
    let resultado = 0;

    // Utilizar un bucle para sumar el multiplicando al resultado
    for (let i = 0; i < multiplicador; i++) {
        resultado = sumar(resultado, multiplicando);
    }

    return resultado;
}

// Función auxiliar para sumar dos números
function sumar(a, b) {
    while (b !== 0) {
        // Encuentra el acarreo y realiza la suma sin acarreo
        let acarreo = a & b;
        a = a ^ b;
        b = acarreo << 1;
    }

    return a;
}

// Ejemplo de uso
let resultadoMultiplicacion = multiplicarConSumas(multiplicador,multiplicando);
alert(resultadoMultiplicacion); 
