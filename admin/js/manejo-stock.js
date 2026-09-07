const botonesMas = document.querySelectorAll(".btn-mas");
const botonesMenos = document.querySelectorAll(".btn-menos");

botonesMas.forEach((boton) => {
  boton.addEventListener("click", () => {
    const producto = boton.parentElement.querySelector(".id-producto");
    producto.textContent = Number(producto.textContent) + 1;
  });
});

botonesMenos.forEach((boton) => {
  boton.addEventListener("click", () => {
    const producto = boton.parentElement.querySelector(".id-producto");
    const stock = Number(producto.textContent);

    if (stock > 0) {
      producto.textContent = stock - 1;
    }
  });
});
