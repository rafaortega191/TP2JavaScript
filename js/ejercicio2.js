let nota = prompt("Introduce tu nota");
if (Number(nota) == nota) {
  if (nota > 0 && nota <= 10) {
    if (nota < 3) {
      document.write("Muy deficiente");
    } else if (nota < 5) {
      document.write("Insuficiete");
    } else if (nota <= 6) {
      document.write("Suficiente");
    } else if (nota == 7) {
      document.write("Bien");
    } else if (nota <= 9) {
      document.write("Notable");
    } else if (nota = 10) {
      document.write("Sobresaliente");
    }
  } else {
    document.write("Nota erronea");
  }
} else {
  if (nota != undefined) {
    document.write("Introduce un numero valido");
  }
}
