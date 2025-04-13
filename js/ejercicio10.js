const numero=parseInt(prompt("Ingrese un número"))

if(!(numero%2)){
    document.writeln("El ", numero, " es divisible por 2")
}else if(!(numero%3)){
    document.writeln("El ", numero, " es divisible por 3")
}else if(!(numero%5)){
    document.writeln("El ", numero, " es divisible por 5")
}else if(!(numero%7)){
    document.writeln("El ", numero, " es divisible por 7")
}