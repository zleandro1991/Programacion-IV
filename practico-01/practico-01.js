// ==========================================
// PRÁCTICO 1: FUNDAMENTOS DE JAVASCRIPT
// ==========================================

// 1. Declará dos variables, nombre y apellido, con tus datos, y mostralas por consola usando un template literal.
let nombre = "Oscar";
let apellido = "Zolórzano";
console.log(`1. Mi nombre completo es: ${nombre} ${apellido}`);


// 2. Declará una variable const llamada añoNacimiento y una let llamada edad. Calculá la edad aproximada.
const anioNacimiento = 1991; 
let anioActual = 2026;
let edad = anioActual - anioNacimiento;
console.log(`2. Nací en el año ${anioNacimiento} y tengo aproximadamente ${edad} años.`);


// 3. ¿Cuál de estas dos declaraciones usarías para guardar el nombre de una empresa que no va a cambiar?
// Respuesta: Usaría const porque el nombre de la empresa es una constante y no debe ser reasignado.
const empresa = "Acme";
console.log(`3. Empresa declarada con const: ${empresa}`);


// 4. Probá en la consola qué devuelve typeof para los siguientes valores:
console.log("4. Resultados de typeof:");
console.log(typeof "Hola");      // "string"
console.log(typeof 3.14);        // "number"
console.log(typeof true);        // "boolean"
console.log(typeof undefined);   // "undefined"
console.log(typeof null);        // "object" (rareza histórica de JS)


// 5. Escribí código que declare 3 variables (producto, precio, cantidad) y use un template literal para mostrar un mensaje.
let producto = "Café";
let precio = 500;
let cantidad = 3;
let total = precio * cantidad;

console.log(`5. Compraste ${cantidad} unidades de ${producto} por un total de $${total}`);


/* 
  6. Explicá con tus palabras la diferencia entre let y const, y por qué conviene usar const primero:
  - const se utiliza para valores que nunca van a cambiar a lo largo de la ejecución del programa. Si intentás 
    reasignarlos, JavaScript arrojará un error.
  - let se utiliza para variables cuyo valor sí necesita ser modificado o reasignado más adelante.
  - Conviene usar const por defecto para proteger las variables de cambios accidentales, y cambiar a let 
    únicamente cuando sepamos con seguridad que el valor va a variar.
*/