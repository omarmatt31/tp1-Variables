const numero = parseInt(prompt("Ingrese el primer número"))
if(!(numero%2)){
    document.writeln("El ", numero, " es divisible por 2.")
}else {
    document.writeln("El ", numero, " no es divisible por 2.")
}