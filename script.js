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

function changeContent(imageSrc, newTitle, newText) {
    document.getElementById('left-image').src = imageSrc;
    document.getElementById('title').textContent = newTitle;
    document.getElementById('description').textContent = newText;
  }












