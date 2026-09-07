const form = document.getElementById("loginForm");
const mensaje = document.getElementById("mensaje");

const correoAdmin = "admin@ejemplo.com";
const contrasenaAdmin = "123456";

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const correo = document.getElementById("correo").value;
    const contrasena = document.getElementById("contrasena").value;

    if (correo === correoAdmin && contrasena === contrasenaAdmin) {

        localStorage.setItem("estadoSesion", "Admin");

        mensaje.textContent = "Inicio de sesión correcto.";
        console.log("Estado:", localStorage.getItem("estadoSesion"));

    } else {

        // Usuario no autenticado
        localStorage.setItem("estadoSesion", "SinSesion");

        mensaje.textContent = "Correo o contraseña incorrectos.";
    }
});