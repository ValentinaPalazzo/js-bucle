function escribirPiramideInversa() {
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
    
    for (let i = numero; i >= 1; i--) {
        for (let j = 0; j < i; j++) {
            piramide += i;
        }
        
        piramide += "\n";
    }

    alert(piramide);
}

escribirPiramideInversa();
