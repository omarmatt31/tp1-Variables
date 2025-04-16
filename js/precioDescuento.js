const precio= Number(prompt("Ingrese el precio del producto: "))
const precioConDescuento=precio*0.85
if(precioConDescuento>1000){
    document.writeln('El precio final es: $'+ precioConDescuento)
}