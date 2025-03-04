// carrito.js
let carrito = [];

document.querySelectorAll(".producto button").forEach((btn, index) => {
    btn.addEventListener("click", () => {
        let producto = btn.parentElement.querySelector("h3").textContent;
        let precio = btn.parentElement.querySelector("p").textContent;

        carrito.push({ producto, precio });
        actualizarCarrito();
    });
});

function actualizarCarrito() {
    let listaCarrito = document.getElementById("lista-carrito");
    listaCarrito.innerHTML = "";

    carrito.forEach((item, index) => {
        let li = document.createElement("li");
        li.textContent = `${item.producto} - ${item.precio}`;
        listaCarrito.appendChild(li);
    });

    if (carrito.length === 0) {
        listaCarrito.innerHTML = "<li>No hay productos en el carrito.</li>";
    }
}

document.getElementById("vaciar-carrito")?.addEventListener("click", () => {
    carrito = [];
    actualizarCarrito();
});
