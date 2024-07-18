function convertirTextoMayusculas() {
  let texto = prompt("Por favor, ingresa un texto:");

  if (texto === null) {
    alert("Operación cancelada.");
    return;
  }

  let textoMayusculas = texto.toUpperCase();

  alert("El texto en mayúsculas es: " + textoMayusculas);
}

convertirTextoMayusculas();
