const navbar = document.getElementById("navbar");
const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");

// Cambio la transparencia del menú al hacer scroll
window.addEventListener("scroll", function() {
    if (window.scrollY > 50) {
        navbar.classList.add("transparent");
    } else {
        navbar.classList.remove("transparent");
    }
});


hamburger.addEventListener("click", function() {
    navLinks.classList.toggle("active");
});

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

