/* POP UP REGISTRO */

const popRegistro = document.getElementById('pop-registro');
const btnRegistro = document.getElementById('btn-registro');
const cerrarRegistro = document.getElementById('cerrar-registro');
const formRegistro = document.getElementById('form-registro');

// Abrir el pop-up
btnRegistro.addEventListener('click', function(e) {
    e.preventDefault();
    popRegistro.classList.remove('oculto');
});

// Cerrar el pop-up
cerrarRegistro.addEventListener('click', function() {
    popRegistro.classList.add('oculto');
});

// Validar correo al enviar el formulario
formRegistro.addEventListener('submit', function(e) {
    e.preventDefault();

    const correo = document.getElementById('reg-correo').value;
    const dominiosValidos = ["duoc.cl", "gmail.com", "hotmail.com"];

    const esValido = dominiosValidos.some(dominio => correo.includes(dominio));

    if (esValido) {
        alert('Cuenta creada correctamente');
        popRegistro.classList.add('oculto');
    } else {
        alert('Correo no válido. Usa duoc.cl, gmail.com o hotmail.com');
    }
});

/* FIN POP UP REGISTRO */