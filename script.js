function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('show');
}

// Añadir un listener para cerrar el menú al hacer clic fuera de él (opcional)
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
 
  function changeContent(imagePath, title, content) {
    document.getElementById('left-image').src = imagePath;
    document.getElementById('title').innerText = title;
    document.getElementById('description').innerHTML = content; // Usa innerHTML para interpretar HTML
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

// Función whatsapp
(function() {
    emailjs.init("CPlHCPmFSQXzJ332c"); 
})();


// Mostrar y ocultar el modal
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

document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

     // Muestra tan solo una alerta
     alert("Formulario enviado (simulación). Integra EmailJS o tu backend para enviar al correo.");
     contactAlert.style.display = "none";
 });
 
 function openModal() {
     document.getElementById("whatsappModal").style.display = "flex";
 }
 
 //cerar el modal
 function closeModal() {
     document.getElementById("whatsappModal").style.display = "none";
 }
 
 // Enviar mensaje al whasapp
 function sendMessage(event) {
     event.preventDefault();
 
     // Obtener los datos del formulario
     const name = document.getElementById("name").value;
     const email = document.getElementById("email").value;
     const message = document.getElementById("message").value;
 
     
     const whatsappMessage = `Hola, soy ${name}. Mi correo es ${email}. Mi consulta es: ${message}`;
      
     const phoneNumber = "642643599";
 
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
 
    window.open(whatsappURL, "_blank");
 
    closeModal();
 }

