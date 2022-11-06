const precioTotal = 200;

function calculoPrecio (){
 let cantidadTicks = document.getElementById("cantidad").value;
 //console.log("cantidad "+cantidadTicks);
 let categoria = document.getElementById("categoria").value;
//console.log("categoria "+categoria);
let total = (cantidadTicks*precioTotal) - (cantidadTicks * (precioTotal*categoria/100)) ;
console.log("Total :"+total);
document.getElementById('totalTickets').value = 'Total a Pagar: $ '+ total;
if (cantidadTicks < 0){
    alert("Solo se permiten cantidades mayores a cero");
    document.getElementById('totalTickets').value = 'Total a Pagar: $ '
    document.getElementById('cantidad').value = null;
}
}