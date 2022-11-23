import { servicios } from '..//services/servicios_cliente.js';


const formulario = document.querySelector("[data-form]");
formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const url = document.querySelector("[data-url]").value;
    const tittle = document.querySelector("[data-tittle]").value;
    const year = document.querySelector("[data-year]").value;
    
    console.log(`url: ${url} - tittle: ${tittle} - year: ${year}`);

    servicios.baseDeDatos(url,tittle,year);
})

const agregarAlbum = (url,tittle,year) => {

    const div = document.createElement('div');
    const relleno = `
    <div class="hijo">
    <img src="${url}" class="img_album">
    <h3 class="titulo_album">${tittle}</h3>
    <h4 class="anio_album">${year}</h4>
    </div>`

    div.innerHTML = relleno;
    return div;
}

const divPadre = document.querySelector("[data-containter]"); 

servicios.listaProductos().then((products) => {
    products.forEach(({url,tittle,year}) => {
        const nuevoDiv = agregarAlbum(url,tittle,year);
        divPadre.appendChild(nuevoDiv);
    })
})
 
//Control pop up

const btnPopup = document.querySelector("[data-btnToggler]");

btnPopup.addEventListener("click", () => {
    const formPopUp=formulario.classList;
    const cuerpo = (document.querySelector("[data-body]")).classList;
    formPopUp.toggle("noVisible");
    cuerpo.toggle("blured");

});