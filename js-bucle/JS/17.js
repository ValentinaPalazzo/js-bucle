function encontrarPrimeraVocal() {
    
    let texto = prompt("Por favor, ingresa una cadena de texto:");

    if (texto === null) {
        alert("Operación cancelada.");
        return;
    }
    texto = texto.toLowerCase();

    const vocales = "aeiou";
    let posicion = -1;

    for (let i = 0; i < texto.length; i++) {
        if (vocales.includes(texto[i])) {
            posicion = i;
            break;
        }
    }

    if (posicion !== -1) {
        alert(`La primera vocal '${texto[posicion]}' está en la posición ${posicion + 1}.`);
    } else {
        alert("No se encontraron vocales en el texto.");
    }
}

encontrarPrimeraVocal();
