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

