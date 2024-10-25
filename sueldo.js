let nombre = "Winona";
let apellido = "Muñoz";
let sueldoActual = 50000;
let porcentajeAumento = 25;

let calculoAumento = sueldoActual*porcentajeAumento/100;
let nuevoSueldo = sueldoActual + (sueldoActual*porcentajeAumento/100);


console.log("Hola, estimad@ " + nombre + " " + apellido);
console.log("En base a su sueldo actual: $" + sueldoActual);
console.log("Ha recibido un aumento del " + porcentajeAumento + "%: $" + calculoAumento);
console.log("Y su nuevo sueldo es: $" + nuevoSueldo);
