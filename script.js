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
function rotateSelectedImage(image) {
    if (!image.classList.contains('clicked')) {
        image.classList.add('clicked');
        setTimeout(() => {
            image.classList.remove('clicked'); // Remueve la clase después de la animación para que pueda girar de nuevo
        }, 500); // 500ms debe coincidir con la duración de la animación CSS
    }
}



