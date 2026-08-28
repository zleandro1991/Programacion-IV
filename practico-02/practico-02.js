// ==========================================
// PRÁCTICO 2: OPERADORES Y CONDICIONALES
// ==========================================

console.log("=== 1. OPERADORES ARITMÉTICOS ===");
let a = 10;
let b = 3;
console.log(`Suma (${a} + ${b}):`, a + b); // 13[cite: 4]
console.log(`Resta (${a} - ${b}):`, a - b); // 7[cite: 4]
console.log(`Multiplicación (${a} * ${b}):`, a * b); // 30[cite: 4]
console.log(`División (${a} / ${b}):`, a / b); // 3.333...[cite: 4]
console.log(`Módulo/Resto (${a} % ${b}):`, a % b); // 1[cite: 4]


console.log("\n=== 2. COMPARACIONES Y COERCIÓN ===");
/* 
  Análisis de los casos pedidos:
  - "5" == 5 -> true (convierte el string a número por coerción)[cite: 4]
  - "5" === 5 -> false (compara valor Y tipo estricto, string vs number)[cite: 4]
  - 0 == false -> true (false se convierte numéricamente a 0)[cite: 4]
  - null == undefined -> true (por especificación de JavaScript, ambos representan ausencia de valor)[cite: 4]
  - null === undefined -> false (son de tipos diferentes: object vs undefined)[cite: 4]
*/
console.log(`"5" == 5:`, "5" == 5);
console.log(`"5" === 5:`, "5" === 5);
console.log(`0 == false:`, 0 == false);
console.log(`null == undefined:`, null == undefined);
console.log(`null === undefined:`, null === undefined);


console.log("\n=== 3. IF / ELSE (VOTACIÓN) ===");
let edad = 18;
if (edad >= 16) {
    console.log("Puede votar");
} else {
    console.log("No puede votar");
}


console.log("\n=== 4. IF / ELSE IF / ELSE (TEMPERATURA) ===");
let temperatura = 20;
if (temperatura < 15) {
    console.log("Hace frío");
} else if (temperatura >= 15 && temperatura <= 25) {
    console.log("Clima templado");
} else {
    console.log("Hace calor");
}


console.log("\n=== 5. OPERADOR TERNARIO (STOCK) ===");
let stock = 5;
let disponibilidad = stock > 0 ? "Disponible" : "Sin stock";
console.log(`Disponibilidad del producto: ${disponibilidad}`);


console.log("\n=== 6. SWITCH (ESTACIONES - HEMISFERIO SUR) ===");
let mes = 4; // Abril (Otoño)
switch (mes) {
    case 12:
    case 1:
    case 2:
        console.log("Verano");
        break;
    case 3:
    case 4:
    case 5:
        console.log("Otoño");
        break;
    case 6:
    case 7:
    case 8:
        console.log("Invierno");
        break;
    case 9:
    case 10:
    case 11:
        console.log("Primavera");
        break;
    default:
        console.log("Mes inválido");
}


console.log("\n=== 7. TRIÁNGULOS (LADOS A, B, C) ===");
let ladoA = 5;
let ladoB = 5;
let ladoC = 5;

if (ladoA === ladoB && ladoB === ladoC) {
    console.log("El triángulo es Equilátero (todos sus lados son iguales)");
} else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
    console.log("El triángulo es Isósceles (dos lados iguales y uno distinto)");
} else {
    console.log("El triángulo es Escaleno (todos sus lados son distintos)");
}