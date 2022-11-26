import { servicios } from "../services/servicios_cliente.js";


const agregarAlbum = (url,tittle,author,year,price,id) => {
    const div = document.createElement('div');
    const relleno = `
    <a href="/pages/obj.html?id=${id}">
    <div class="hijo" id=${id}>
        <img src="${url}" class="img_album">
        <h3 class="titulo_album">${tittle}</h3>
        <h3 class="autor_album">${author}</h3>
        <h4 class="anio_album">${year}</h4>
        <h3 class="precio_album">$${price}</h3>
    </div> </a>`
    div.innerHTML = relleno;
    return div;
}

const btnLupa = document.querySelector("[data-btn-lupa]");
const tituloBusqueda = document.getElementById("tituloBusqueda");

btnLupa.addEventListener("click", () =>{
    const busqueda = (document.querySelector("[data-buscador]")).value;
    tituloBusqueda.classList.remove("ocultador")
    const resultadosBusqueda = document.querySelector("[data-result]");
    resultadosBusqueda.innerHTML = '';

    console.log(busqueda);
    servicios.listaProductos().then((products) => {
    products.forEach(({url,tittle,author,year,price,id}) => {
        if(busqueda == tittle || busqueda ==author || busqueda ==year){
            const nuevoDiv = agregarAlbum(url,tittle,author,year,price,id);
            resultadosBusqueda.appendChild(nuevoDiv);
        }
        })
    }
)
})



