function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show'); // Muestra/oculta el menú
}

// Cerrar el menú automáticamente al hacer clic en cualquier enlace
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        const navLinks = document.querySelector('.nav-links');
        navLinks.classList.remove('show'); // Oculta el menú al hacer clic en un enlace
    });
});



// Función para mostrar/ocultar texto Inmigación

function toggleText() {
    const additionalText = document.getElementById('additional-text');
    if (additionalText.style.display === 'block') {
        additionalText.style.display = 'none';
    } else {
        additionalText.style.display = 'block';
    }
}









  (function() {
    emailjs.init("CPlHCPmFSQXzJ332c"); 
})();


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


// EmailJS
const contactButton = document.getElementById("contactButton");
const contactAlert = document.getElementById("contactAlert");
const closeButton = document.querySelector(".close-button");

contactButton.onclick = function() {
    contactAlert.style.display = "flex";
};

closeButton.onclick = function() {
    contactAlert.style.display = "none";
};

window.onclick = function(event) {
    if (event.target == contactAlert) {
        contactAlert.style.display = "none";
    }
};

// Enviar el formulario al correo
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    
    
    emailjs.sendForm('service_e4rgq0q', 'template_bjg3pgj', this)
        .then(() => {
            alert('Mensaje enviado exitosamente');
            contactAlert.style.display = "none";
        }, (error) => {
            alert('Error al enviar el mensaje: ' + JSON.stringify(error));
        }); 
});

