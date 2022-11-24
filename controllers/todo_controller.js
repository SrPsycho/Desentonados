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

const contenedorAlbums = document.querySelector("[data-contenedorPadre"); 

servicios.listaProductos().then((products) => {
    products.forEach(({url,tittle,author,year,id}) => {
            const nuevoDiv = agregarAlbum(url,tittle,author,year,id);
            contenedorAlbums.appendChild(nuevoDiv);
        })
    }
)