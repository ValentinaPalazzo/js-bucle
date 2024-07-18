function contarVocales() {
    // Solicitar la cadena de texto al usuario
    let texto = prompt("Por favor, ingresa una cadena de texto:");

    
    if (texto === null) {
        alert("Operación cancelada.");
        return;
    }

    texto = texto.toLowerCase();

    const vocales = "aeiou";

    let contador = 0;

    for (let i = 0; i < texto.length; i++) {
        if (vocales.includes(texto[i])) {
            contador++;
        }
    }

    alert("El número de vocales en el texto es: " + contador);
}

contarVocales();
