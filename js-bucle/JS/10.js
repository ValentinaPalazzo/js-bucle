function crearTabla() {
  let filas = parseInt(prompt("Introduce el número de filas:"));
  let columnas = parseInt(prompt("Introduce el número de columnas:"));

  if (isNaN(filas) || isNaN(columnas) || filas <= 0 || columnas <= 0) {
    alert("Introduce números válidos para filas y columnas.");
    return;
  }

  let totalCeldas = filas * columnas;
  let contador = totalCeldas;

  let tablaHTML = "<table border='1'>";

  for (let i = 0; i < filas; i++) {
    tablaHTML += "<tr>";
    for (let j = 0; j < columnas; j++) {
      tablaHTML += `<td>${contador}</td>`;
      contador--;
    }
    tablaHTML += "</tr>";
  }

  tablaHTML += "</table>";

  document.write(tablaHTML);
}

crearTabla();
