function generarNumerosAleatorios() {
  let cantidad = parseInt(
    prompt("¿Cuántos números aleatorios deseas generar?")
  );

  if (isNaN(cantidad) || cantidad <= 0) {
    alert("Introduce un número válido.");
    return;
  }

  for (let i = 0; i < cantidad; i++) {
    let numeroAleatorio = Math.floor(Math.random() * 99) + 1;

    alert("El número aleatorio generado es: " + numeroAleatorio);
  }
}

generarNumerosAleatorios();
