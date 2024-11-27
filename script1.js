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

// Obtener el contador del almacenamiento local

function updateVisitCounter() {
    
    let visits = localStorage.getItem('visitCounter');
  
    
    if (!visits) {
      visits = 0;
    } else {
      visits = parseInt(visits);
    }
  
   
    visits += 1;
    
    document.getElementById('counter').textContent = visits;  
  
    localStorage.setItem('visitCounter', visits);
  }
   
  updateVisitCounter();

