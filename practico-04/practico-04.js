// ==========================================
// PRÁCTICO 4: FUNCIONES
// ==========================================

console.log("=== 1. FUNCIÓN SALUDAR ===");
function saludar(nombre) {
    console.log(`Hola, ${nombre}, bienvenido/a`);
}
saludar("Leandro");


console.log("\n=== 2. ES MAYOR DE EDAD ===");
function esMayorDeEdad(edad) {
    if (edad >= 18) {
        return true;
    } else {
        return false;
    }
}
let resultadoEdad = esMayorDeEdad(35);
console.log(`¿Es mayor de edad? ${resultadoEdad}`); // true


console.log("\n=== 3. ÁREA DE UN RECTÁNGULO ===");
// Como función tradicional
function calcularAreaRectanguloTradicional(base, altura) {
    return base * altura;
}
console.log("Área (tradicional):", calcularAreaRectanguloTradicional(5, 3));

// Como arrow function corta
const calcularAreaRectanguloArrow = (base, altura) => base * altura;
console.log("Área (arrow function):", calcularAreaRectanguloArrow(5, 3));


console.log("\n=== 4. ES PAR ===");
const esPar = (numero) => numero % 2 === 0;
console.log(`¿El 4 es par? ${esPar(4)}`); // true
console.log(`¿El 7 es par? ${esPar(7)}`); // false


console.log("\n=== 5. SALUDAR CON HORA ===");
function saludarConHora(nombre, hora = 12) {
    if (hora >= 6 && hora < 12) {
        return `Buenos días, ${nombre}`;
    } else if (hora >= 12 && hora < 20) {
        return `Buenas tardes, ${nombre}`;
    } else {
        return `Buenas noches, ${nombre}`;
    }
}
console.log(saludarConHora("Leandro", 15)); // Con argumento de hora (tarde)
console.log(saludarConHora("Yanet"));     // Sin argumento (usa default 12, tarde)


console.log("\n=== 6. PROMEDIO Y ESTÁ APROBADO ===");
const promedio = (a, b, c) => (a + b + c) / 3;

const estaAprobado = (promedioNota) => {
    return promedioNota >= 6;
};

// Combinando ambas funciones
let notaFinal = promedio(7, 8, 9);
console.log(`Promedio obtenido: ${notaFinal}`);
console.log(`¿Está aprobado? ${estaAprobado(notaFinal)}`); // true


console.log("\n=== 7. ES PALÍNDROMO ===");
function esPalindromo(palabra) {
    // Pasamos a minúsculas para evitar problemas con mayúsculas
    let palabraMinuscula = palabra.toLowerCase();
    // Separamos en array, invertimos y volvemos a unir en un string
    let palabraInvertida = palabraMinuscula.split("").reverse().join("");
    
    return palabraMinuscula === palabraInvertida;
}

console.log(`¿'neuquen' es palíndromo? ${esPalindromo("neuquen")}`); // true
console.log(`¿'javascript' es palíndromo? ${esPalindromo("javascript")}`); // false