function escribirNumeros() {
  let resultado = "";
  let lineCounter = 0;

  for (let i = 1; i <= 500; i++) {
    if (i % 4 === 0 && i % 9 === 0) {
      resultado += `${i} (Múltiplo de 4 y de 9)\n`;
    } else if (i % 4 === 0) {
      resultado += `${i} (Múltiplo de 4)\n`;
    } else if (i % 9 === 0) {
      resultado += `${i} (Múltiplo de 9)\n`;
    } else {
      resultado += `${i}\n`;
    }

    if (i % 5 === 0) {
      resultado += "————————————————————-\n";
    }

    lineCounter++;

    if (lineCounter >= 20) {
      alert(resultado);
      resultado = "";
      lineCounter = 0;
    }
  }

  if (resultado.length > 0) {
    alert(resultado);
  }
}

escribirNumeros();
