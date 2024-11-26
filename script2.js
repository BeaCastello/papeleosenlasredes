// Inicializar el contador
let visitCount = localStorage.getItem('visitCount');

// Si no existe un contador previo, inicializar a 1
if (!visitCount) {
  visitCount = 1;
} else {
  visitCount = parseInt(visitCount) + 1; // Incrementar el contador
}

// Guardar el nuevo valor en localStorage
localStorage.setItem('visitCount', visitCount);

// Mostrar el contador en el elemento con id "visit-counter"
document.getElementById('visit-counter').textContent = visitCount;
