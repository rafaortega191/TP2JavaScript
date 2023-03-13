let cadena = prompt("Introduce un Texto:");
    let numchar = cadena.length;
    let j;
    let car;
    let salida = "";
    for (j = 0; j < numchar; j++) {
        car = cadena.charAt(j);
        salida = car + salida;
    }
    document.write(salida);