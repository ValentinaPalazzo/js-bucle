function puedeConducir() {
  let edad;
  let esNumeroValido = false;

  while (!esNumeroValido) {
    edad = prompt("Por favor, ingresa tu edad:");
    edad = Number(edad);

    if (isNaN(edad)) {
      alert("La entrada no es un número válido. Por favor, intenta de nuevo.");
    } else {
      esNumeroValido = true;
    }
  }

  if (edad > 18) {
    alert("Ya puedes conducir.");
  } else {
    alert("Aún no puedes conducir.");
  }
}

puedeConducir();
