import { servicios } from '../services/servicios_cliente.js';


const agregarAlbum = (url,tittle,author,year,id) => {
    const div = document.createElement('div');
    const relleno = `
    <div class="hijo" id=${id}>
        <img src="${url}" class="img_album">
        <h3 class="titulo_album">${tittle}</h3>
        <h3 class="autor_album">${author}</h3>
        <h4 class="anio_album">${year}</h4>
    </div>`
    div.innerHTML = relleno;
    return div;
}

const divMasVendido = document.querySelector("[data-masVendido]"); 

servicios.listaProductos().then((products) => {
    products.forEach(({url,tittle,author,masVendido,year,id}) => {
        if(masVendido){
            const nuevoDiv = agregarAlbum(url,tittle,author,year,id);
            divMasVendido.appendChild(nuevoDiv);
        }
        })
    }
)

const divLoNuevo = document.querySelector("[data-loNuevo]"); 

servicios.listaProductos().then((products) => {
    products.forEach(({url,tittle,author,nuevo,year,id}) => {
        if(nuevo){
            const nuevoDiv = agregarAlbum(url,tittle,author,year,id);
            divLoNuevo.appendChild(nuevoDiv);
        }
        })
    }
)

const divDescuento = document.querySelector("[data-descuento]"); 

servicios.listaProductos().then((products) => {
    products.forEach(({url,tittle,author,descuento,year,id}) => {
        if(descuento){
            const nuevoDiv = agregarAlbum(url,tittle,author,year,id);
            divDescuento.appendChild(nuevoDiv);
        }
        })
    }
)
