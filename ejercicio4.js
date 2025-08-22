//4. Algoritmo para contar ocurrencias de 'a' en un texto//
function contarOcurrenciasA(texto, letra) {
    let contador = 0; 
    for (let i = 0; i < texto.length; i++) { 
        if (texto[i].toLowerCase() === letra.toLowerCase()) { 
            contador++; 
        }
    }   
    return contador;
}
let texto = "Análisis de algoritmos y programación orientada a objetos";    
let letra = 'a';
let resultado = contarOcurrenciasA(texto, letra);
console.log(`La letra '${letra}' aparece ${resultado} veces en el texto.`);