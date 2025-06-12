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


// Slider
const container = document.querySelector('.slider-container');
const prevBtn = document.querySelector('.nav.prev');
const nextBtn = document.querySelector('.nav.next');
const slides = document.querySelectorAll('.slide');
const slidesToShow = 3;

let index = 0;
const totalGroups = Math.ceil(slides.length / slidesToShow);

function updateSlider() {
  const slideWidth = slides[0].offsetWidth;
  container.style.transform = `translateX(-${index * slideWidth * slidesToShow}px)`;
}

prevBtn.addEventListener('click', () => {
  if (index > 0) {
    index--;
    updateSlider();
  }
});

nextBtn.addEventListener('click', () => {
  if (index < totalGroups - 1) {
    index++;
    updateSlider();
  }
});

window.addEventListener('resize', updateSlider);
