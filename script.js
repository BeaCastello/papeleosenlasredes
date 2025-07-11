//Botón leer más para la sección:¿Qué es un inmigrante?

function toggleContent() {
    const contentContainer = document.getElementById('content-container');
    const button = document.querySelector('.toggle-btn');

    if (contentContainer.style.display === 'flex') {
        contentContainer.style.display = 'none';
        button.textContent = 'Mostrar más';
    } else {
        contentContainer.style.display = 'flex';
        button.textContent = 'Mostrar menos';
    }
}

//¿Qué es un arraigo?

function changeContent(title, imageSrc, title1, description) {
    const titleElement = document.getElementById('title');
    const imageElement = document.getElementById('left-image');
    const titleElementDuplic = document.getElementById('title1');
    const descriptionElement = document.getElementById('description');


    // Actualiza el titulo
    titleElement.innerHTML = title;

    // Actualiza la imagen
    imageElement.src = imageSrc;
    imageElement.alt = title1;


    // Actualiza el título y la descripción
    titleElementDuplic.innerHTML = title1;
    descriptionElement.innerHTML = description;

    // Inserta el título nuevamente después de la imagen
    const duplicateTitle = document.createElement('h2');
    duplicateTitle.innerHTML = title1;
    duplicateTitle.className = 'roots-title';

    // Inserta el nuevo título antes de la descripción y después de la imagen
    if (textContainer.querySelector('.title1')) {
        textContainer.querySelector('.title1').remove();
    }
    duplicateTitle.classList.add('title1');
    textContainer.insertBefore(title1, descriptionElement);
}

// Carrusel services

function showSlide(index) {
    const slides = document.querySelectorAll(".slide");
    const pages = document.querySelectorAll(".page");

    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${-(index * 100)}%)`;
        pages[i].classList.remove("active");
    });
    pages[index].classList.add("active");
}

// Enlace con emailjs

(function () {
    emailjs.init({publicKey:"Oyh2uTXc5UaZPqt7o"});
})();

document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    emailjs.sendForm("service_9xutcqf","template_ysamtyl", this)
        .then(function () {
            alert('Correo enviado con éxito!');
        }, function (error) {
            alert('Error al enviar el correo: ' + JSON.stringify(error));
        });
});

// Conectando con el whatsapp
const whatsappContainer = document.getElementById('whatsapp-container');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        whatsappContainer.classList.add('visible');
    } else {
        whatsappContainer.classList.remove('visible');
    }
});








    
