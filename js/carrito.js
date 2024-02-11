
let carrito = JSON.parse(localStorage.getItem("carrito"))

if (carrito.length) {
    let contenedorCarrito = document.createElement("div")
    contenedorCarrito.classList.add("contenedor-carrito")
    document.body.append(contenedorCarrito)
    for (const item of carrito) {
        let div = document.createElement("div")
        div.classList.add("item-carrito")
        div.innerHTML = `
            <img src=${item.img} alt=${item.nombre} class="imagen-carrito">
            <h2>${item.nombre}</h2>
            <p>${item.descipcion}</p>
            <p> Cant: ${item.cant}</p>
            <p> $ ${item.precio}</p>
            <i class="bi bi-trash3 icono-eliminar"></i>
        `
        contenedorCarrito.append(div)
    }
    let carritoVacioMensaje = document.querySelector(".mensaje-carrito-vacio")
    carritoVacioMensaje.classList.add("disable")
    document.body.append(carritoVacioMensaje)

    let precioTotal = 0
    for (const elemento of carrito) {
        precioTotal = (elemento.precio * elemento.cant) + precioTotal
    }

    let agregarPrecioTotal = document.createElement("div")

    agregarPrecioTotal.innerHTML = `
        <hr class="linea-separadora">
        <div class="totalAPagar">
            <p class="total-texto">Total a Pagar:</p>
            <p class="total">$ ${precioTotal}</p>
        </div>
    `
    document.body.append(agregarPrecioTotal)
}

let eliminarItem = document.querySelectorAll(".icono-eliminar")
for (const item of eliminarItem) {
    item.addEventListener("click", (e) => {
        let elementoAEliminar = e.target.parentElement
        let nombreProducto = elementoAEliminar.querySelector("h2").textContent
        let index = carrito.findIndex((e) =>
            e.nombre === nombreProducto
        )
      
        Swal.fire({
            title: "Eliminar producto?",
            text: "El producto se eliminara de tu carrito",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Eliminar"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Eliminado!",
                    text: "El producto ha sido eliminado del carrito",
                    icon: "success"
                });
            }
        });

        setTimeout( () =>{
            carrito.splice(index, 1)
            localStorage.clear()
            localStorage.setItem("carrito", JSON.stringify(carrito))
            location.reload()
        },3000 )

    })
}