// Esta funcion retorna una diferencia entre
// la fecha actual menos la fecha que se le
// mande como parametro.
export function obtenerDiferenciaYear(year) {
    return new Date().getFullYear() - year;
}

// Esta funcion retorna un incremente segun 
// la marca.
export function calcularMarca(marca) {
    let incremento;

    switch (marca) {
        case 'europeo': {
            incremento = 1.30;
            break;
        }  
        case 'americano': {
            incremento = 1.15;
            break;
        }
        case 'asiatico': {
            incremento = 1.05;
            break;
        }
        default: {
            break;
        }   
    }
    return incremento;
}

// Esta funcion retorna si el porcentaje dependiendo
// de el plan, si es basico retorna el 20% sino el 50%.
export function obtenerPlan(plan) {
    return (plan === 'basico') ? 1.20 : 1.50;
}

// Muestra la primer letra en mayuscula
export function primerMayuscula(texto) {
    // charAt(0) = Selecciona la primer caracter del string
    // toUpperCase = Convierte el caracter en Mayuscula
    // slice = elimina la primer posicion
    return texto.charAt(0).toUpperCase() + texto.slice(1);
}