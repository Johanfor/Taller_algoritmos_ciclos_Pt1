/*7. Implementa una función que calcule la suma de los cuadrados 
de los primeros N números naturales.*/
function sumaCuadradosNaturales(n) {
    let suma = 0;
    for (let i = 1; i <= n; i++) {
        suma += i * i;
    }
    return suma;
}   
let N = 2; 
let resultadoSumaCuadrados = sumaCuadradosNaturales(N);
console.log(`La suma de los cuadrados de los primeros ${N} números naturales es: ${resultadoSumaCuadrados}`);