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


const feeds = [
  {
    nombre: "ABC",
    imagen: "imagenes/Periódico_ABC.jpg",
    rss: "https://www.abc.es/rss/feeds/abc_Espana.xml"
  },
  {
    nombre: "El Mundo",
    imagen: "imagenes/Periódico_El Mundo.png",
    rss: "https://e00-elmundo.uecdn.es/elmundo/rss/espana.xml"
  },
  {
    nombre: "El País",
    imagen: "imagenes/Periódico_El Pais.jpg",
    rss: "https://feeds.elpais.com/mrss-s/pages/ep/site/elpais.com/section/internacional/portada"
  },
  {
    nombre: "El Periódico",
    imagen: "imagenes/Periódico_El Periódico.png",
    rss: "https://www.elperiodico.com/es/cds/rss/?id=board.xml"
  },
  {
    nombre: "La Razón",
    imagen: "imagenes/Periódico_La Razón.png",
    rss: "https://www.larazon.es/rss/espana.xml"
  },
  {
    nombre: "La Vanguardia",
    imagen: "imagenes/Periódico_La Vanguardia.png",
    rss: "https://www.lavanguardia.com/rss/home.xml"
  },
 
];

const slidesContainer = document.getElementById("slidesContainer");

async function fetchNews() {
  slidesContainer.innerHTML = "";
  for (let feed of feeds) {
    try {
      const res = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(feed.rss)}`);
      const data = await res.json();
      const noticia = data.items[0];

      const slide = document.createElement("div");
      slide.className = "slide";
      slide.innerHTML = `
        <img src="${feed.imagen}" alt="${feed.nombre}">
        <div class="info">
          <h3 style="margin-top: 2px; margin-bottom: 0px;">${feed.nombre}</h3>
          <p><strong>Titular:</strong> ${noticia.title} <br></br></p>
          <a href="${noticia.link}" target="_blank">Ir a ${feed.nombre} →</a>
        </div>`;
      slidesContainer.appendChild(slide);
    } catch (err) {
      console.error("Error con el feed de " + feed.nombre, err);
    }
  }
}

// Hace un llamado Inicial
fetchNews();

//  Para que se actualice cada 24 horas
setInterval(fetchNews, 86400000); 


const prevBtn = document.querySelector('.nav.prev');
const nextBtn = document.querySelector('.nav.next');
let index = 0;
const slidesToShow = 3;

function updateSlider() {
  const slideWidth = document.querySelector('.slide').offsetWidth;
  // slidesContainer.style.transform = `translateX(-${index * slideWidth * slidesToShow}px)`;
  var finalCount = document.body.clientWidth < 768 ? (document.body.clientWidth < 480 ? 1 : 2) : slidesToShow;
  slidesContainer.style.transform = `translateX(-${index * slideWidth * finalCount}px)`;
}

prevBtn.addEventListener('click', () => {
  if (index > 0) {
    index--;
    updateSlider();
  }
});

nextBtn.addEventListener('click', () => {
  var finalCount = document.body.clientWidth < 768 ? (document.body.clientWidth < 480 ? 1 : 2) : slidesToShow;
  const maxIndex = Math.ceil(slidesContainer.children.length / finalCount) - 1;
  if (index < maxIndex) {
    index++;
    updateSlider();
  }
});

window.addEventListener('resize', updateSlider);

// Conectando con el whatsapp
const whatsappContainer = document.getElementById('whatsapp-container');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        whatsappContainer.classList.add('visible');
    } else {
        whatsappContainer.classList.remove('visible');
    }
});
