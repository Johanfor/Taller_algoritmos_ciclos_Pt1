function calcularFactorial(numero) {
    if (numero < 0) {
        return "El factorial no está definido para números menores de 0";
    }
    let factorial = 1; 
    for (let i = 1; i <= numero; i++) { 
        factorial *= i; 
    }
    return factorial; 
}
let numero = 9; 
let resultadoFactorial = calcularFactorial(numero);
console.log(`El factorial de ${numero} es: ${resultadoFactorial}`); 