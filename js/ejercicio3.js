let resultado = "";

do {
  let cadena = prompt("Introduce el texto");

  if (resultado == "") {
    resultado = resultado + cadena;
  } else {
    resultado = resultado + "-" + cadena;
  }
} while (confirm("Desea seguir?"));

document.write(resultado);
