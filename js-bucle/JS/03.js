function concatenarCadenas() {
  let cadenas = [];
  let entrada;

  // Bucle para solicitar cadenas de texto hasta que se pulse "Cancelar"
  while (true) {
    entrada = prompt(
      "Por favor, ingresa una cadena de texto (pulsa 'Cancelar' para terminar):"
    );

    // Verificar si el usuario pulsó "Cancelar"
    if (entrada === null) {
      break;
    }

    // Añadir la cadena ingresada al array
    cadenas.push(entrada);
  }

  // Concatenar todas las cadenas con un guión
  let resultado = cadenas.join("-");

  // Mostrar el resultado
  alert("Cadenas concatenadas: " + resultado);
}

// Llamar a la función
concatenarCadenas();
