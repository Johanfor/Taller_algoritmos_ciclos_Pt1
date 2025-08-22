/*9. Desarrolla una función que genere y devuelva los primeros N términos de la serie de Fibonacci*/
function generarFibonacci(n) {
    let fibonacci = [];
    let a = 0, b = 1;
    for (let i = 0; i < n; i++) {
        fibonacci.push(a);
        let temp = a;
        a = b;
        b = temp + b;
    }
    return fibonacci;
}   
let N = 2; 
let serieFibonacci = generarFibonacci(N);   
console.log(`Los primeros ${N} términos de la serie de Fibonacci son: ${serieFibonacci.join(', ')}`);
