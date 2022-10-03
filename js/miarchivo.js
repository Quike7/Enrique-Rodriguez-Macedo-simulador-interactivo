
/* var total = a 0 a partitr de los productos selccionados (checkbox) 
iremos sumando o restando el valor del producto y mostraremos e iremos visualizando el total */

var total=0;

function sumar(valor) {
total += valor;
document.formulario.total.value=total;
}

function restar(valor) {
total-=valor;
document.formulario.total.value=total;
}