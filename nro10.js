console.log("Ejercicio nro 10");

// 10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.

const nroCapicua = (nro = undefined) => {
  if (!nro) {
    alert("No ingresaste un número");
  } else {
    let letra = nro.split("");
    let letraInvertida = letra.reverse();
    let nroInvertido = letraInvertida.join("");
    alert(nro === nroInvertido);
  }
};

let nro = prompt("Ingrese un número: ");
nroCapicua(nro);
