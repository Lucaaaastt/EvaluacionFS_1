// Cargar el carrito
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

// Elementos del HTML
const botonesComprar = document.querySelectorAll('.btn-comprar');
const popCompra = document.getElementById('pop-compra');
const cerrarCompra = document.getElementById('cerrar-compra');
const btnAceptarCompra = document.getElementById('btn-aceptar-compra');
const mensajeCompra = document.getElementById('mensaje-compra');

// Elementos del pop-up Carrito
const btnVerCarrito = document.getElementById('btn_carrito');
const popCarrito = document.getElementById('pop-carrito');
const cerrarCarrito = document.getElementById('cerrar-carrito');
const listaCarrito = document.getElementById('lista-carrito');
const totalCarrito = document.getElementById('total-carrito');
const btnVaciar = document.getElementById('btn-vaciar');
const cantCarrito = document.getElementById('cant_carrito');

// Funcion para listar y calcular el total
function actualizarCarrito() {
    if (listaCarrito) listaCarrito.innerHTML = '';
    let total = 0;

    carrito.forEach((item) => {
        if (listaCarrito) {
            const li = document.createElement('li');
            li.textContent = `${item.nombre} - $${item.precio.toLocaleString('es-CL')}`;
            listaCarrito.appendChild(li);
        }
        total += item.precio;
    });

    if (totalCarrito) totalCarrito.textContent = total.toLocaleString('es-CL');
    if (cantCarrito) cantCarrito.textContent = carrito.length;
}

// Dibujar el carrito al cargar la página
actualizarCarrito();

// Evento COMPRAR
botonesComprar.forEach(boton => {
    boton.addEventListener('click', (e) => {
        e.preventDefault();

        const nombre = boton.getAttribute('data-nombre') || "Juego";
        const precio = parseInt(boton.getAttribute('data-precio')) || 0;

        // Guardar en el arreglo y en localStorage
        carrito.push({ nombre, precio });
        localStorage.setItem('carrito', JSON.stringify(carrito));

        // Actualizar vista del carrito y mostrar aviso flotante
        actualizarCarrito();
        if (mensajeCompra) mensajeCompra.textContent = `¡Agregaste "${nombre}" al carrito!`;
        if (popCompra) popCompra.classList.remove('oculto');
    });
});

// Cerrar aviso de compra
if (cerrarCompra) cerrarCompra.addEventListener('click', () => popCompra && popCompra.classList.add('oculto'));
if (btnAceptarCompra) btnAceptarCompra.addEventListener('click', () => popCompra && popCompra.classList.add('oculto'));

// Abrir y cerrar la ventana del carrito
if (btnVerCarrito) {
    btnVerCarrito.addEventListener('click', (e) => {
        e.preventDefault();
        if (popCarrito) popCarrito.classList.remove('oculto');
    });
}

if (cerrarCarrito) cerrarCarrito.addEventListener('click', () => popCarrito && popCarrito.classList.add('oculto'));

// Vaciar todo el carrito
if (btnVaciar) {
    btnVaciar.addEventListener('click', () => {
        carrito = [];
        localStorage.removeItem('carrito');
        actualizarCarrito();
    });
}