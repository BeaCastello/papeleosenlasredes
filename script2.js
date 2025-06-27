// Enlace con emailjs

(function () {
    emailjs.init({publicKey:"Oyh2uTXc5UaZPqt7o"});
})();

document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    emailjs.sendForm("service_9xutcqf","template_rzjqc3b", this)
        .then(function () {
            alert('Correo enviado con éxito!');
        }, function (error) {
            alert('Error al enviar el correo: ' + JSON.stringify(error));
        });
});