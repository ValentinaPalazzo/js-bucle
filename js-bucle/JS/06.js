function escribirPiramide() {
  let piramide = "";

  for (let i = 1; i <= 30; i++) {
    for (let j = 0; j < i; j++) {
      piramide += i;
    }

    piramide += "\n";
  }

  alert(piramide);
}

escribirPiramide();
