function encontrarMayor() {
  let edades = [];
  let nombres = [];

  for (let i = 1; i <= 3; i++) {
    let nombre = prompt(`Introduce el nombre ${i}:`);
    let edad = parseInt(prompt(`Introduce la edad de ${nombre}:`));

    if (isNaN(edad)) {
      alert("Introduce una edad válida.");
      i--;
    } else {
      nombres.push(nombre);
      edades.push(edad);
    }
  }

  let mayorEdad = Math.max(...edades);
  let indiceMayor = edades.indexOf(mayorEdad);

  alert(
    `La persona con la mayor edad es ${nombres[indiceMayor]} con ${mayorEdad} años.`
  );
}

encontrarMayor();
