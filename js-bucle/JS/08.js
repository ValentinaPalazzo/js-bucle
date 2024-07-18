function escribirPiramideAscendente() {
    let numero;
    let piramide = "";

    while (true) {
        numero = prompt("Por favor, ingresa un número (máximo 50):");

        if (numero === null) {
            return; 
        }

        numero = Number(numero);

        if (isNaN(numero)) {
            alert("Introduce un número válido.");
        } else if (numero < 1 || numero > 50) {
            alert("El número debe estar entre 1 y 50.");
        } else {
            break; 
        }
    }

    for (let i = 1; i <= numero; i++) {
        for (let j = 1; j <= i; j++) {
            piramide += j;
        }

        piramide += "\n";
    }

    alert(piramide);
}

escribirPiramideAscendente();
