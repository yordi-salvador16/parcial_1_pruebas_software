// ventas.test.js
const procesarVentas = require('./ventas'); // Ajusta la ruta al archivo de tu función

test('Procesa la venta de producto', () => {
  const resultados = procesarVentas();
  expect(resultados[0]).toBe('Venta de Producto: Procesando pago.');
});

test('Procesa la venta de servicio', () => {
  const resultados = procesarVentas();
  expect(resultados[1]).toBe('Venta de Servicio: Programando cita.');
});

test('Procesa la venta de suscripción', () => {
  const resultados = procesarVentas();
  expect(resultados[2]).toBe('Venta de Suscripción: Activando suscripción.');
});

test('No hay tipos de venta no reconocidos en el rango válido', () => {
  const resultados = procesarVentas();
  expect(resultados).not.toContain('Tipo de venta no reconocido.');
});
test('No hay tipos de venta mayores a 3', () => {
    const resultados = procesarVentas();
    expect(resultados).toHaveLength(3); // Verifica que solo hay 3 resultados
  });
  