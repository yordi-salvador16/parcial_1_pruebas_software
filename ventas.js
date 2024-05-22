// ventas.js
function procesarVentas() {
    let tipoVenta = 1; // Inicializa el tipo de venta
    let resultados = [];
  
    do {
      switch (tipoVenta) {
        case 1:
          resultados.push('Venta de Producto: Procesando pago.');
          break;
        case 2:
          resultados.push('Venta de Servicio: Programando cita.');
          break;
        case 3:
          resultados.push('Venta de Suscripción: Activando suscripción.');
          break;
        default:
          resultados.push('Tipo de venta no reconocido.');
          break;
      }
      tipoVenta++; // Incrementa el tipo de venta para eventualmente salir del bucle
    } while (tipoVenta <= 3); // Condición para el bucle do...while
  
    return resultados; // Retorna los resultados
  }
  
  module.exports = procesarVentas;
  