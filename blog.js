const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio',
                 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
  const dias = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];

  const hoy = new Date();
  const diaSemana = dias[hoy.getDay()];
  const diaMes = hoy.getDate();
  const mes = meses[hoy.getMonth()];
  const año = hoy.getFullYear();

  const fechaTexto = `${diaSemana.charAt(0).toUpperCase() + diaSemana.slice(1)}, ${diaMes} de ${mes} de ${año}`;
  document.getElementById('fecha-actual').textContent = fechaTexto;
