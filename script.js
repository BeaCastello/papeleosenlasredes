function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('show');
}

document.addEventListener('click', (e) => {
    const menuHamburguesa = document.getElementById('menu-hamburguesa');
    const navLinks = document.getElementById('nav-links');

    if (!menuHamburguesa.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('show');
    }
});

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

// Rotación imagen servicios 
function toggleCardEffect(card) {
    if (!card.classList.contains('clicked')) {
        card.classList.add('clicked');
    } else {
        card.classList.remove('clicked');
    }
}
// Enlace con emailjs

(function () {
    emailjs.init("zbgwQc95PFCFL9D6Y");
})();

document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    emailjs.sendForm('service_e4rgq0q', 'template_bjg3pgj', this)
        .then(function () {
            alert('Correo enviado con éxito!');
        }, function (error) {
            alert('Error al enviar el correo: ' + JSON.stringify(error));
        });
});


// Alerta 
const alertBtn = document.getElementById('alertBtn');
const imageAlert = document.getElementById('imageAlert');

alertBtn.addEventListener('click', function () {
    imageAlert.style.display = 'block'; // A dar click muestra la imagen
});

// Se oculta la imagen cuando el cursor está fuera del botón o de la imagen
document.addEventListener('mousemove', function (event) {
    const isOutsideBtn = !alertBtn.contains(event.target);
    const isOutsideAlert = !imageAlert.contains(event.target);

    if (isOutsideBtn && isOutsideAlert) {
        imageAlert.style.display = 'none';
    }
});


// Función para mostrar el banner si no hay una cookie de aceptación
window.onload = function () {
    if (!getCookie("cookiesAccepted")) {
        document.getElementById("cookieBanner").style.display = "block";
    }
};

// Función para aceptar las cookies y ocultar el banner
function acceptCookies() {
    setCookie("cookiesAccepted", "true", 365); // Guarda la aceptación por 1 año
    document.getElementById("cookieBanner").style.display = "none";
}

// Función para crear una cookie
function setCookie(name, value, days) {
    let date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    let expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

// Función para leer una cookie
function getCookie(name) {
    let nameEQ = name + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let cookieArray = decodedCookie.split(';');
    for (let i = 0; i < cookieArray.length; i++) {
        let cookie = cookieArray[i].trim();
        if (cookie.indexOf(nameEQ) === 0) {
            return cookie.substring(nameEQ.length, cookie.length);
        }
    }
    return null;
}

