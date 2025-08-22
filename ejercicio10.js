//10. Desarrolla una función que genere el total de las tablas de multiplicar dado un numero entero//
function generarTablasMultiplicar(numero) {
    let tablas = [];
    for (let i = 1; i <= 10; i++) {
        tablas.push(`${numero} x ${i} = ${numero * i}`);
    }
    return tablas;
}   
let numeroTabla = 5; // Cambia este número para generar la tabla de multiplicar deseada
let tablasMultiplicar = generarTablasMultiplicar(numeroTabla);
console.log(`Tabla de multiplicar del ${numeroTabla}:`);