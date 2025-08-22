//3. Algoritmo para generar la tabla de un numero dado por argumento en una función//
function generarTabla(numero) {
    console.log(`Tabla del ${numero}:`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}   
generarTabla(3); // Puedes cambiar el número para generar su tabla de multiplicar