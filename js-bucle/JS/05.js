function calcularLetraDNI() {
    const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
    let numeroDNI;
    let esNumeroValido = false;


    while (true) {
        numeroDNI = prompt("Por favor, ingresa un número de DNI (pulsa 'Cancelar' para terminar):");

        if (numeroDNI === null) {
            break;
        }

        numeroDNI = Number(numeroDNI);

        if (isNaN(numeroDNI)) {
            alert("Introduce un número válido.");
        } else if (numeroDNI < 0 || numeroDNI > 99999999) {
            alert("El número debe estar entre 0 y 99999999.");
        } else {
            const resto = numeroDNI % 23;
            const letra = letras[resto];
            alert(`La letra correspondiente al DNI ${numeroDNI} es: ${letra}`);
        }
    }
}

calcularLetraDNI();
