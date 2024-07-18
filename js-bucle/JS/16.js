function invertirTexto() {
  let texto = prompt("Por favor, ingresa una cadena de texto:");

  if (texto === null) {
    alert("Operación cancelada.");
    return;
  }

  let textoInvertido = "";
  for (let i = texto.length - 1; i >= 0; i--) {
    textoInvertido += texto[i];
  }

  alert("El texto invertido es: " + textoInvertido);
}

invertirTexto();
