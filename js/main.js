/*function displayDate() {
    document.getElementById("fecha y hora").innerHTML = Date();
  }
*/
var meses = [
    "Enero", "Febrero", "Marzo",
    "Abril", "Mayo", "Junio", "Julio",
    "Agosto", "Septiembre", "Octubre",
    "Noviembre", "Diciembre"
  ]
  
  var date = new Date();
  var dia = date.getDate();
  var mes = date.getMonth();
  var yyy = date.getFullYear();
  var fecha_formateada = dia + ' de ' + meses[mes] + ' de ' + yyy;
  function displayDate (){ 
  document.getElementById('fecha y hora').innerHTML = "Fecha: " + fecha_formateada;
  alert(fecha_formateada);
  }
