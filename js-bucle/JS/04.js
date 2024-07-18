function sumarNumeros() {
  let suma = 0;
  let entrada;

  while (true) {
    entrada = prompt(
      "Por favor, ingresa un número (pulsa 'Cancelar' para terminar):"
    );

    if (entrada === null) {
      break;
    }
    
    entrada = Number(entrada);

    if (isNaN(entrada)) {
      alert("Introduce un número válido.");
    } else {
      
      suma += entrada;
    }
  }
  
  alert("La suma total de los números introducidos es: " + suma);
}

sumarNumeros();
