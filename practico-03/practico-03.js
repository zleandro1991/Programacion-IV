// ==========================================
// PRÁCTICO 3: BUCLES E ITERACIÓN
// ==========================================

console.log("=== 1. NÚMEROS DEL 1 AL 20 (FOR) ===");
for (let i = 1; i <= 20; i++) {
    console.log(i);
}


console.log("\n=== 2. NÚMEROS PARES DEL 1 AL 30 (FOR) ===");
for (let i = 1; i <= 30; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}


console.log("\n=== 3. SUMA DEL 1 AL 100 (WHILE) ===");
let numero = 1;
let suma = 0;
while (numero <= 100) {
    suma += numero;
    numero++;
}
console.log(`La suma total del 1 al 100 es: ${suma}`);


console.log("\n=== 4. CUENTA REGRESIVA (DO-WHILE) ===");
let cuenta = 5;
do {
    console.log(cuenta);
    cuenta--;
} while (cuenta >= 0);
console.log("¡Despegue!");


console.log("\n=== 5. NÚMEROS DEL 1 AL 20 SALTEANDO MÚLTIPLOS DE 3 (CONTINUE) ===");
for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0) {
        continue; // Salta los múltiplos de 3
    }
    console.log(i);
}


console.log("\n=== 6. PRIMER NÚMERO DIVISIBLE POR 7 Y 3 A LA VEZ (BREAK) ===");
for (let i = 1; i <= 100; i++) {
    if (i % 7 === 0 && i % 3 === 0) {
        console.log(`El primer número divisible por 7 y 3 entre 1 y 100 es: ${i}`);
        break; // Corta el bucle apenas lo encuentra
    }
}


console.log("\n=== 7. TABLA DE MULTIPLICAR DEL 1 AL 5 (BUCLES ANIDADOS) ===");
for (let i = 1; i <= 5; i++) {
    console.log(`--- Tabla del ${i} ---`);
    for (let j = 1; j <= 5; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
}


console.log("\n=== 8. VERIFICAR SI UN NÚMERO ES PRIMO ===");
let numPrimo = 29; // Podes cambiar este número para probar
let esPrimo = true;

if (numPrimo <= 1) {
    esPrimo = false;
} else {
    for (let i = 2; i < numPrimo; i++) {
        if (numPrimo % i === 0) {
            esPrimo = false;
            break; // Si encontramos un divisor, ya no es primo, cortamos.
        }
    }
}

if (esPrimo) {
    console.log(`El número ${numPrimo} ES primo.`);
} else {
    console.log(`El número ${numPrimo} NO es primo.`);
}