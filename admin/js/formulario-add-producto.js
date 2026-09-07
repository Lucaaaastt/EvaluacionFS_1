const formulario = document.getElementById("formProducto");

formulario.addEventListener("submit", function (event) {
  event.preventDefault();

  const datos = {
    nombre: document.getElementById("nombre").value,
    precio: Number(document.getElementById("precio").value),
    stock: Number(document.getElementById("stock").value),
    categoria: document.getElementById("categoria").value,
    plataforma: document.getElementById("plataforma").value,
    descripcion: document.getElementById("descripcion").value,
    imagen: document.getElementById("imagen").value,
  };

  console.log("Producto creado:", datos);
});
