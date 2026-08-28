// ==========================================
// PRÁCTICO 5: ARRAYS Y MÉTODOS
// ==========================================

console.log("=== 1. ARRAY DE FRUTAS ===");
const frutas = ["manzana", "banana", "pera", "naranja", "frutilla"];
console.log("Primera fruta:", frutas[0]);
console.log("Última fruta:", frutas[frutas.length - 1]);
console.log("Cantidad total de elementos:", frutas.length);


console.log("\n=== 2. PUSH Y UNSHIFT ===");
const numerosP2 = [4, 8, 15, 16, 23, 42];
numerosP2.push(50);    // Agrega al final
numerosP2.unshift(1);  // Agrega al principio
console.log("Array modificado:", numerosP2);


console.log("\n=== 3. FOREACH (DÍAS DE LA SEMANA) ===");
const dias = ["lunes", "martes", "miércoles", "jueves", "viernes"];
dias.forEach((dia, indice) => {
    console.log(`Índice ${indice}: ${dia}`);
});


console.log("\n=== 4. MAP (10% DE DESCUENTO) ===");
const precios = [1200, 3400, 800, 5600, 2300];
// Aplicamos un 10% de descuento (multiplicar por 0.90)
const preciosConDescuento = precios.map((precio) => precio * 0.90);
console.log("Precios originales:", precios);
console.log("Precios con 10% off:", preciosConDescuento);


console.log("\n=== 5. FILTER (MAYORES DE EDAD) ===");
const edades = [15, 22, 8, 34, 17, 40, 12];
const mayoresDeEdad = edades.filter((edad) => edad >= 18);
console.log("Edades originales:", edades);
console.log("Mayores o iguales a 18:", mayoresDeEdad);


console.log("\n=== 6. FIND (PRIMER NÚMERO MAYOR A 8) ===");
const numerosP6 = [3, 7, 1, 9, 4, 12, 6];
const primerMayorA8 = numerosP6.find((num) => num > 8);
console.log("Primer número mayor a 8:", primerMayorA8);


console.log("\n=== 7. REDUCE (SUMA Y PROMEDIO DE NOTAS) ===");
const notas = [7, 5, 9, 6, 8];
const sumaNotas = notas.reduce((acumulador, actual) => acumulador + actual, 0);
const promedioNotas = sumaNotas / notas.length;
console.log(`Suma total: ${sumaNotas}`);
console.log(`Promedio: ${promedioNotas}`);


console.log("\n=== 8. FILTER Y MAP COMBINADOS (PRODUCTOS CON STOCK) ===");
const productos = [
    { nombre: "Teclado", precio: 15000, stock: 10 },
    { nombre: "Mouse", precio: 8000, stock: 0 },
    { nombre: "Monitor", precio: 120000, stock: 4 },
    { nombre: "Auriculares", precio: 25000, stock: 0 },
    { nombre: "Parlantes", precio: 18000, stock: 5 }
];

// 1. Filtramos los que tienen stock mayor a 0
// 2. Con map nos quedamos únicamente con la propiedad 'nombre'
const nombresConStock = productos
    .filter((producto) => producto.stock > 0)
    .map((producto) => producto.nombre);

console.log("Nombres de productos con stock:", nombresConStock);