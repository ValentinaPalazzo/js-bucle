function insertarGuiones() {

    let texto = prompt("Por favor, ingresa una cadena de texto:");

    if (texto === null) {
        alert("Operación cancelada.");
        return;
    }

    let textoConGuiones = "";
    for (let i = 0; i < texto.length; i++) {
        textoConGuiones += texto[i];
        if (i < texto.length - 1) {
            textoConGuiones += "-";
        }
    }

    alert("El texto con guiones es: " + textoConGuiones);
}

insertarGuiones();
