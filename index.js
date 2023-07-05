// Punto 1
/*function calcularSuperficie(ancho, alto) {
    var superficie = ancho * alto;
    return superficie;
  }
  var ancho = prompt("Ingrese el ancho del rectángulo:");
  var alto = prompt("Ingrese el alto del rectángulo:");
  ancho = parseFloat(ancho);
  alto = parseFloat(alto);
  if (!isNaN(ancho) && !isNaN(alto)) {
    var resultado = calcularSuperficie(ancho, alto);
    document.write("La superficie del rectángulo es: " + resultado);
  } else {
    document.write("Los valores ingresados no son válidos.");
  }*/
  

// Punto 2
 /* function convertidor(velocidadKilometros) {
    var velocidadMetros = velocidadKilometros * 1000;
    return velocidadMetros;
  }
  function convertidor(velocidadKilometros) {
    var velocidadMillas = velocidadKilometros * 0.621371;
    return velocidadMillas;
  }
  var velocidadKilometros = parseFloat(prompt("Ingrese la velocidad en kilómetros:"));
  if (!isNaN(velocidadKilometros)) {
    var velocidadMetros = convertidor(velocidadKilometros);
    var velocidadMillas = convertidor(velocidadKilometros);
    document.write("La velocidad en metros es: " + velocidadMetros + " metros.<br>");
    document.write("La velocidad en millas es: " + velocidadMillas + " millas.");
  } else {
    document.write("El valor ingresado no es válido.");
  }
  */

// Punto 3
// Función para calcular la circunferencia de un círculo
/* function calcularCircunferencia(radio) {
    var circunferencia = 2 * Math.PI * radio;
    return circunferencia;
  }
  var radio = parseFloat(prompt("Ingresa el valor del radio:"));
  var circunferencia = calcularCircunferencia(radio);
  document.write("La circunferencia es: " + circunferencia); */

  // Función para calcular el cubo de un número
/* function calcularCubo(numero) {
    var cubo = numero ** 3;
    return cubo;
  }
  var numero = parseFloat(prompt("Ingresa un número para calcular su cubo:"));
  var cubo = calcularCubo(numero);
  document.write("El cubo del número es: " + cubo); */

// Punto 4
// Solicitar al usuario que ingrese un nombre
/* var nombre = prompt("Ingrese un nombre:");

if (isNaN(nombre)) {
  document.write("Nombre: " + nombre);
  document.write("<br>Es un nombre válido.");
} else {
  document.write("Ingrese un nombre válido");
} */
// Después de solicitar al usuario que ingrese un nombre utilizando prompt, verificamos si el nombre ingresado es un número utilizando isNaN(nombre). Si isNaN(nombre) devuelve true, significa que el nombre no es un número y se muestra en el navegador junto con el mensaje "Es un nombre válido". Si isNaN(nombre) devuelve false, significa que el nombre es un número y se muestra en el navegador el mensaje "Ingrese un nombre válido".

// Punto 5
/* function realizarOperacionesBasicas(numero1, numero2) {
    document.write("Suma: " + (numero1 + numero2) + "<br>");
    document.write("Resta: " + (numero1 - numero2) + "<br>");
    document.write("Multiplicación: " + (numero1 * numero2) + "<br>");
    document.write("División: " + (numero1 / numero2) + "<br>");
  }
  var numero1 = parseFloat(prompt("Ingrese el primer número:"));
  var numero2 = parseFloat(prompt("Ingrese el segundo número:"));
  realizarOperacionesBasicas(numero1, numero2); */

// Punto 6
/* function celsiusToFahrenheit(celsius) {
    var fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
  }
  function determinarDescripcionClima(temperatura) {
    if (temperatura <= 0 || temperatura <= 32) {
      return "Nos congelamos";
    } else if (temperatura >= 5 && temperatura <= 15 || temperatura >= 33 && temperatura <= 50) {
      return "Está haciendo frío";
    } else if (temperatura >= 16 && temperatura <= 25 || temperatura >= 51 && temperatura <= 77) {
      return "Está templado el día";
    } else {
      return "Tiene fiebre o es el apocalipsis";
    }
  }
  var temperatura = parseFloat(prompt("Ingrese la temperatura:"));
  var fahrenheit = celsiusToFahrenheit(temperatura);
  document.write("Temperatura en Fahrenheit: " + fahrenheit + "°F <br>");
  var descripcionClima = determinarDescripcionClima(temperatura);
  document.write("Descripción del clima: " + descripcionClima); */

// Punto 7
/* function calcularIMC(peso, altura) {
    var imc = peso / (altura * altura);
    return imc;
  }
  function determinarCategoriaPeso(imc) {
    if (imc < 18.5) {
      return "Bajo peso, debe ir al nutricionista";
    } else if (imc >= 18.5 && imc <= 24.9) {
      return "Normal";
    } else if (imc >= 25.0 && imc <= 29.9) {
      return "Sobrepeso";
    } else {
      return "Obeso, debe ir al nutricionista";
    }
  }
  var peso = parseFloat(prompt("Ingrese su peso en kg:"));
  var altura = parseFloat(prompt("Ingrese su altura en metros:"));
  var imc = calcularIMC(peso, altura);
  document.write("Índice de Masa Corporal : " + imc + "<br>");
  var categoriaPeso = determinarCategoriaPeso(imc);
  document.write("Categoría del peso: " + categoriaPeso); */

// Punto 8
/* function pedirNombre() {
    var nombre = prompt("Por favor, ingresa tu nombre:");
    return nombre;
  }
  function mostrarBienvenida(nombre) {
    document.write("¡Bienvenido, " + nombre + "!");
  }
  var nombreUsuario = pedirNombre();
  mostrarBienvenida(nombreUsuario); */

// Punto 9
/*function pedirPreciosProductos() {
    var precios = [];
    var n = parseInt(prompt("Ingrese la cantidad de productos:"));
    for (var i = 1; i <= n; i++) {
      var precio = parseFloat(prompt("Ingrese el precio del producto " + i + ":"));
      precios.push(precio);
    }
    return precios;
  }
   function calcularTotalAPagar(precios) {
    var subtotal = 0;
    for (var i = 0; i < precios.length; i++) {
      subtotal += precios[i];
    }
    var iva = subtotal * 0.19;
    var totalAPagar = subtotal + iva;
  
    return totalAPagar;
  }
  function mostrarResultados(precios, totalAPagar) {
    document.write("<h2>Precio de cada producto:</h2>");
    for (var i = 0; i < precios.length; i++) {
      document.write("<p>Producto " + (i + 1) + ": $" + precios[i] + "</p>");
    }
    document.write("<p>Subtotal: $" + precios.reduce((a, b) => a + b, 0) + "</p>");
    document.write("<p>Total a pagar: $" + totalAPagar + "</p>");
  }
  var preciosProductos = pedirPreciosProductos();
  var totalAPagar = calcularTotalAPagar(preciosProductos);
  mostrarResultados(preciosProductos, totalAPagar); */

// Punto 10
/*function diasAnios(anio,mes,dia){
  let fechaActual = new Date();
  let ultimoDiaAnio = new Date(anio,(mes-1),dia);
  let milDias = (1000*60*60*24);
  let restoDias = (ultimoDiaAnio - fechaActual) / milDias;
  return Math.floor(restoDias);
}
let ano = parseInt(prompt("Digite año actual"));
let mes = parseInt(prompt("Digite mes a calcular"));
let dia = parseInt(prompt("Digite dia a calcular"));
let resDias = diasAnios(ano,mes,dia);
document.write("faltan"+resDias+"dias para la fecha digitada <br>");
document.write("faltan"+( Math.floor(resDias/7 ))+"semana para la llegada a la fecha digitada");*/

// Punto 11
/* function solicitarProductos() {
    var numProductos = parseInt(prompt("Ingrese el número de productos:"));
    var productos = [];
    for (var i = 0; i < numProductos; i++) {
      var nombre = prompt("Ingrese el nombre del producto " + (i+1) + ":");
      var valor = parseFloat(prompt("Ingrese el valor del producto " + (i+1) + ":"));
      productos[i] = { nombre: nombre, valor: valor };
    }
    return productos;
  }
  function imprimirProductos(productos) {
    var totalMercado = 0;
    for (var i = 0; i < productos.length; i++) {
      var producto = productos[i];
      var cantidad = parseInt(prompt("Ingrese la cantidad del producto " + producto.nombre + ":"));
      var subtotal = cantidad * producto.valor;
      totalMercado += subtotal;
      document.write((i+1) + " - " + producto.nombre + " $" + producto.valor.toFixed(2) + " x " + cantidad + " = $" + subtotal.toFixed(2) + "<br>");
    }
    document.write("-----------------------------------<br>");
    document.write("Total Mercado: $" + totalMercado.toFixed(2));
  }
  var listaProductos = solicitarProductos();
  imprimirProductos(listaProductos); */
  