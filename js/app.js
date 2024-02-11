let misProductos = [
    {
        id: 1,
        nombre:"Cadena",
        precio: 13.99,
        descipcion: "Comprate la mejor cadena del mundo",
        img:"img/cadena.jpg",
        cant: 0
    },

    {
        id:2,
        nombre:"Casco",
        precio: 59.99,
        descipcion: "Comprate el mejor casco del mundo",
        img:'img/casco.jpg',
        cant: 0
        },
    
     {
        id:3,
        nombre:"Inflador",
        precio: 5.99,
        descipcion: "Comprate el mejor Inflador del mundo",
        img:"img/inflador800x800.jpg",
        cant: 0
    },
        
    {
        id:4,
        nombre:"Lentes",
        precio: 29.99,
        descipcion: "Comprate el mejor Lente del mundo",
        img:"img/lentes.jpg",
        cant: 0
    },
    
    {
        id:5,
        nombre:"Timbre",
        precio: 7.99,
        descipcion: "Comprate el mejor timbre del mundo",
        img:"img/timbre.jpg",
        cant: 0
    },

    {
        id:6,
        nombre:'Velocimetro',
        precio: 59.99,
        descipcion: "Comprate el mejor velocimetro del mundo",
        img:"img/velocimetro800x800.jpg",
        cant: 0
    }
]

let carritoLocalStorage = JSON.parse(localStorage.getItem("carrito"))
let carrito

carritoLocalStorage ? carrito = carritoLocalStorage : carrito = []

let main = document.createElement("main")
main.classList.add("mi-main")
document.body.append(main)

for (const producto of misProductos) {
    let div = document.createElement("div")
    div.classList.add("card")
    div.innerHTML = `
    <div class="contenedor-img">
        <img class = "img-product" src=${producto.img} alt=${producto.nombre}>
    </div>
    <h2>${producto.nombre}</h2>
    <p class="price"> $ ${producto.precio}</p>
    <button class="btn-comprar">Agregar al carrito</button>
    `
    main.append(div)
}

//
function buscarIndice(array, nombreProducto){
    let index = array.findIndex( (e)=>
        e.nombre === nombreProducto 
    )
    
    return index;
}

//

let items = document.getElementsByClassName("btn-comprar")
    for (const item of items) {
        item.addEventListener("click",(e)=>{
            let elementoCompleto = e.target.parentElement
            let nombreDelProducto = elementoCompleto.querySelector("h2").textContent
            let itemBuscado = misProductos.find( (e)=>
                e.nombre === nombreDelProducto
            )

            ////
            let indice = buscarIndice(carrito,nombreDelProducto)
            console.log(indice)
            if(indice>=0){
                carrito[indice].cant++
                console.log("index")
                localStorage.clear()
                localStorage.setItem("carrito",JSON.stringify(carrito))
            }else{
                itemBuscado.cant++;
                carrito.push(itemBuscado)
                localStorage.setItem("carrito",JSON.stringify(carrito))
                console.log(carrito)
            }

            Toastify({

                text: "Producto agregado",
                duration: 1000,
                position: "center"
                
                }).showToast();
            ///

            /*
            carrito.push(itemBuscado)
            localStorage.setItem("carrito",JSON.stringify(carrito))
            console.log(carrito)
            */
        })
    }































/*

let carrito = []

function item (nombre,precio){
    this.nombre = nombre
    this.precio = precio
}

let addProduct = document.getElementsByClassName("btn-comprar")
let miCarrito = document.getElementById("miCarrito")

for (const x of addProduct) {
    x.addEventListener("click",(e)=>{
        let producto = e.target.parentElement
        let price = producto.querySelector(".price").textContent
        let arraySeparador = price.split(" ")
        let precioInt = parseFloat(arraySeparador[1])
        let name= producto.querySelector("h2").textContent
        newItem = new item(name,precioInt)
        carrito.push(newItem)
        console.log(carrito)
    })
}



*/

/*
miCarrito.addEventListener("click",()=>{

    if(carrito.length==0){
        let AddNode = document.createElement("div")
        AddNode.innerHTML = `<p>El carrito esta Vacio</p> `
        document.body.appendChild(AddNode)
    }else{
        for (const x of carrito) {
            let AddNode = document.createElement("div")
            AddNode.classList.add("plegable-item")
            AddNode.innerHTML = 
            `
            <p> ${x.nombre} </p>
            <p> $ ${x.precio}</p>
            <i class="bi bi-x-circle"></i>
            `
            document.body.appendChild(AddNode)
        }
        let importeAPagar = carrito.reduce( (total,unElemento) => total + unElemento.precio,0)
        console.log(importeAPagar)
        let AddNode = document.createElement("div")
        AddNode.classList.add("plegable-item")
        AddNode.innerHTML = 
        `
        <p> Total a Pagar: $ ${importeAPagar}</p>
        `
        document.body.appendChild(AddNode)
    }
})

*/