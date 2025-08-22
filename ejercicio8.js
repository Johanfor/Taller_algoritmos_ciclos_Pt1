/*8. Escribe una función que calcule la potencia de un número (base^exponente) utilizando un ciclo for, 
sin usar el operador de potencia **.*/
function calcularPotencia(base, exponente) {
    let resultado = 1;
    for (let i = 0; i < exponente; i++) {
        resultado *= base;
    }
    return resultado;
}   
let base = 3;
let exponente = 5;
let resultadoPotencia = calcularPotencia(base, exponente);
console.log(`La potencia del número ${base} elevado a exponente ${exponente} = ${resultadoPotencia}`);
