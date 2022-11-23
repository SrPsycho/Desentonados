import { servicios } from '..//services/servicios_cliente.js';


const formulario = document.querySelector("[data-form]");
formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const url = document.querySelector("[data-url]").value;
    const tittle = document.querySelector("[data-tittle]").value;
    const year = document.querySelector("[data-year]").value;

    servicios.baseDeDatos(url,tittle,year);
})

const agregarAlbum = (url,tittle,year,id) => {
    const div = document.createElement('div');
    const relleno = `
    <div class="hijo">
        <img src="${url}" class="img_album">
        <h3 class="titulo_album">${tittle}</h3>
        <h4 class="anio_album">${year}</h4>
            <div class="botones">
                <button id=${id} data-btnEdit><img src="/assets/icons/Edit.svg" class="btnEditar" id=${id}></button>
                <button id=${id} data-btnDelete><img src="/assets/icons/Delete.svg" class="btnBorrar" id=${id}></button>
            </div>
    </div>`
    div.innerHTML = relleno;
    //Borrar 
    const btnDelete = div.querySelector('[data-btnDelete]');
    btnDelete.addEventListener('click',()=>{
        const id = btnDelete.id;
        servicios.eliminarAlbum(id)
        .then(()=>{
        }).catch(err => alert('Ocurrio un error: ' + err))
    })
    //Editar
    const btnEdit = div.querySelector('[data-btnEdit]');
    const idEditado = btnEdit.id;
    btnEdit.addEventListener('click',()=>{
        console.log(idEditado)
        const newURL = prompt("Ingrese el nuevo URL de la imagen");
        const newTittle = prompt("Ingrese el nuevo titulo del album");
        const newYear = prompt("Ingrese el nuevo año del album");
        servicios.editarAlbum(newURL,newTittle,newYear,idEditado);
        }
    )
    return div;
}

const divPadre = document.querySelector("[data-containter]"); 

servicios.listaProductos().then((products) => {
    products.forEach(({url,tittle,year,id}) => {
        const nuevoDiv = agregarAlbum(url,tittle,year,id);
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