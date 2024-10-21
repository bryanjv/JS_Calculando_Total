let precio = 400000;

let cantidad = 0;

const precioSpan = document.querySelector(".precio-inicial");
const cantidadSpan = document.querySelector(".cantidad");
const valorTotalSpan = document.querySelector(".valor-total");
const btnSumar = document.querySelectorAll("button")[0];

precioSpan.innerHTML = precio;

function actualizarTotal() {
  const total = precio * cantidad;
  valorTotalSpan.innerHTML = total;
}

btnSumar.addEventListener("click", () => {
  cantidad++;
  cantidadSpan.innerHTML = cantidad;
  actualizarTotal();
});

btnRestar.addEventListener("click", () => {
  if (cantidad > 0) {
    cantidad--;
    cantidadSpan.innerHTML = cantidad;
    actualizarTotal();
  }
});
