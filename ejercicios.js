// 🔢 Reto 1: Generador de Números Primos
// 📄 Descripción:

// Tu misión esta semana es escribir una función en JavaScript que identifique y devuelva todos los números primos menores que un número entero dado n.

// Un número primo es un número natural mayor que 1, que solo puede dividirse exactamente por 1 y por sí mismo. Algunos ejemplos de números primos son: 2, 3, 5, 7, 11...

// 🚀 Instrucciones:

// La función debe recibir un número entero positivo n como argumento.
// La función debe devolver un array con todos los números primos menores que n.
// Compartir link del repositorio con el reto resuelto por este canal de texto.

function encontrarPrimos(n) {
    const primos = [];
    for (let i = 2; i < n; i++) {
        let esPrimo = true;
        for (let j = 2; j * j <= i; j++) {
            if (i % j === 0) {
                esPrimo = false;
                break;
            }
        }
        if (esPrimo) primos.push(i);
    }
    return primos;
}

function mostrarPrimos() {
    const numero = parseInt(document.getElementById("numero").value);

    const primos = encontrarPrimos(numero);
    alert("Números primos menores que " + numero + ": " + primos.join(", "));
}


// 🧠 RETO DE LÓGICA DE PROGRAMACIÓN - SEMANA 2
// 🔢 Reto 2: Generador de Secuencia de Fibonacci
// 📄 Descripción:

// Tu misión esta semana es escribir una función en JavaScript que genere la secuencia de Fibonacci hasta un número dado n. En esta ocasión, la función deberá generar los números de Fibonacci que sean menores o iguales a n.

// La secuencia de Fibonacci comienza con los números 0 y 1, y cada número siguiente es la suma de los dos anteriores. Algunos términos de la secuencia son: 0, 1, 1, 2, 3, 5, 8, 13...

// 🚀 Instrucciones:

// La función debe recibir un número entero positivo n como argumento.
// La función debe devolver un array con todos los números de la secuencia de Fibonacci menores o iguales a n.
// Si n es menor que 0, la función debe devolver un array vacío.
// Compartir link del repositorio con el reto resuelto por este canal de texto.

// 💡 Tips:

// La secuencia de Fibonacci crece rápidamente, así que piensa en una forma eficiente de calcularla para valores más grandes de n.
// Puedes usar un bucle while o un for para ir generando los términos de la secuencia, asegurándote de detenerte una vez que el siguiente término exceda n.
// Haz pruebas con valores pequeños y grandes de n para verificar que la función funcione correctamente.

// Función para generar la secuencia de Fibonacci
function generarFibonacci(n) {
    if (n < 0) return [];
    let fibonacci = [0, 1];
    while (true) {
        let siguiente = fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
        if (siguiente > n) break;
        fibonacci.push(siguiente);
    }
    return n === 0 ? [0] : fibonacci;
}

// Manejar el formulario y mostrar el resultado
document.getElementById('fibonacci-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío del formulario
    const numeroFibonacci = parseInt(document.getElementById('numeroFibonacci').value, 10);
    const resultado = generarFibonacci(numeroFibonacci);
    alert(`Secuencia de Fibonacci: ${resultado.join(', ')}`);
});