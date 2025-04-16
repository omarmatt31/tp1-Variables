const numero = parseInt(prompt("Ingrese un número"));

let fraseResultado = "";

if (!(numero % 2)) {
    fraseResultado = "El " + numero + " es divisible por 2";
}
if (!(numero % 3)) {
    fraseResultado = "El " + numero + " es divisible por 3";
}
if (!(numero % 5)) {
    fraseResultado = "El " + numero + " es divisible por 5";
}
if (!(numero % 7)) {
    fraseResultado = "El " + numero + " es divisible por 7";
}
if (!(numero % 2) && !(numero % 3)) {
    fraseResultado = "El " + numero + " es divisible por 2 y por 3";
}
if (!(numero % 2) && !(numero % 5)) {
    fraseResultado = "El " + numero + " es divisible por 2 y por 5";
}
if (!(numero % 2) && !(numero % 7)) {
    fraseResultado = "El " + numero + " es divisible por 2 y por 7";
}
if (!(numero % 3) && !(numero % 5)) {
    fraseResultado = "El " + numero + " es divisible por 3 y por 5";
}
if (!(numero % 3) && !(numero % 7)) {
    fraseResultado = "El " + numero + " es divisible por 3 y por 7";
}
if (!(numero % 5) && !(numero % 7)) {
    fraseResultado = "El " + numero + " es divisible por 5 y por 7";
}
if (!(numero % 2) && !(numero % 3) && !(numero % 5)) {
    fraseResultado = "El " + numero + " es divisible por 2, 3 y por 5";
}
if (!(numero % 2) && !(numero % 3) && !(numero % 7)) {
    fraseResultado = "El " + numero + " es divisible por 2, 3 y por 7";
}
if (!(numero % 2) && !(numero % 5) && !(numero % 7)) {
    fraseResultado = "El " + numero + " es divisible por 2, 5 y por 7";
}
if (!(numero % 3) && !(numero % 5) && !(numero % 7)) {
    fraseResultado = "El " + numero + " es divisible por 3, 5 y por 7";
}
if (!(numero % 2) &&!(numero % 3) && !(numero % 5) && !(numero % 7)) {
    fraseResultado = "El " + numero + " es divisible por 2, 3, 5 y por 7";
}

document.writeln(fraseResultado);
