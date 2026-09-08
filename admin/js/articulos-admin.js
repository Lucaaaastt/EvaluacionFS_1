const catalogo = document.getElementById("catalogo");
let url_imagenes = ["r2", "aoe2", "eldenring", "got", "witcher3"]

for (let i = 1; i <= 5; i++) {
  const articulo = document.createElement("article");
  articulo.className = "caluga";

  articulo.innerHTML = `
    <div class="contenedor-img">
        <img
            src="/images/${url_imagenes[i-1]}.webp"
            alt="Articulo ${i}"
            class="imagen_aju"
        />
    </div>

    <div class="info-producto">
        <h3 class="tituloJuego">Articulo ${i}</h3>
        <span class="precioJuego">$64.990</span>

        <div class="stock-producto">
            <button class="btn-stock btn-menos">-</button>
            <p id="producto-${i}" class="id-producto">${i}</p>
            <button class="btn-stock btn-mas">+</button>
        </div>

        <button class="btn-guardar" onclick="console.log('Se guardo el stock del articulo con la ID:', ${i})">
            GUARDAR
        </button>
    </div>
`;

  catalogo.appendChild(articulo);
}
