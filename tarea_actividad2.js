var mes = 10

mes = parseInt(prompt("para saber la estación del año ingrese el mes en formato numérico\nEjemplo:\n1   = Enero\n12 = Diciembre"))

if (mes === 12 || mes === 1 || mes === 2) {
  alert("es invierno");
} else if (mes >=3 && mes <=5) {
  alert("es primavera");
} else if (mes >=6 && mes <=8) {
  alert("es verano");
} else if (mes >=9 && mes <=11) {
  alert("es otoño");
} else {
  alert("Valor no válido");
} alert("22000674 Marvin Everardo Chum García");