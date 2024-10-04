function agregarAlCarrito(nombre, precio) {
    alert(`Has agregado ${nombre} al carrito por S/ ${precio}.00`);
}

function actualizarPrecio(mandil, precio) {
    const precioElemento = document.getElementById(`precio-${mandil}`);
    if (precio) {
        precioElemento.innerText = `S/ ${precio}`;
    } else {
        precioElemento.innerText = 'S/ 0.00';
    }
}
