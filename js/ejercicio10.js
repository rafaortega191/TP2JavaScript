let i, j;

let filas = Number(prompt("Introduce numero de filas"));

let colum = Number(prompt("Introduce numero de columnas"));

let res = filas * colum;

document.write("<table border>");

for (i = 0; i < filas; i++) {
  document.write("<tr>");

  for (j = 0; j < colum; j++) {
    document.write("<td>");

    document.write(res);

    res--;

    document.write("</td>");
  }

  document.write("</tr>");
}

document.write("</table>");
