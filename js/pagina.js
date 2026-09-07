/* POP UP REGISTRO */
const popRegistro = document.getElementById("pop-registro");
const btnRegistro = document.getElementById("btn-registro");
const cerrarRegistro = document.getElementById("cerrar-registro");
const formRegistro = document.getElementById("form-registro");

/* POP UP INICIAR SESION */
const popInicioSesion = document.getElementById("pop-iniciarSesion");
const btnInicioSesion = document.getElementById("btn-login");
const cerrarIniSesion = document.getElementById("cerrar-login");
const formLogin = document.getElementById("form-iniciarSesion");

let usuarios = [
  { user: "admin", email: "admin@duoc.cl", pass: "admin123", rol: "admin" },
  { user: "pepe", email: "pepe@gmail.com", pass: "1234", rol: "usuario" },
];

// Abrir el pop-up de registro
btnRegistro.addEventListener("click", function (e) {
  e.preventDefault();
  popRegistro.classList.remove("oculto");
});

// Cerrar el pop-up de registro
cerrarRegistro.addEventListener("click", function () {
  popRegistro.classList.add("oculto");
});

// Abrir el pop-up de login
btnInicioSesion.addEventListener("click", function (e) {
  e.preventDefault();
  popInicioSesion.classList.remove("oculto");
});

// Cerrar el pop-up de login
cerrarIniSesion.addEventListener("click", function () {
  popInicioSesion.classList.add("oculto");
});

// Validar correo al enviar el formulario de registro
formRegistro.addEventListener("submit", function (e) {
  e.preventDefault();

  const correo = document.getElementById("reg-correo").value;
  const dominiosValidos = ["duoc.cl", "gmail.com", "hotmail.com"];
  const esValido = dominiosValidos.some((dominio) => correo.includes(dominio));

  if (esValido) {
    alert("Cuenta creada correctamente");
    popRegistro.classList.add("oculto");
  } else {
    alert("Correo no válido. Usa duoc.cl, gmail.com o hotmail.com");
  }
});

/* FIN POP UP REGISTRO */
