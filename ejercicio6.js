/*6. Escribe una función que reciba un array de números y devuelva un nuevo array
 que contenga solo los números pares*/
function filtrarNumerosPares(numeros) { 
    let numerosPares = []; 
    for (let i = 0; i < numeros.length; i++) { 
        if (numeros[i] % 2 === 0) { 
            numerosPares.push(numeros[i]); 
        }
    }   
    return numerosPares; 
}
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16, 18, 20]; 
let resultadoPares = filtrarNumerosPares(numeros);
console.log(`Los números pares son: ${resultadoPares.join(', ')}`); 