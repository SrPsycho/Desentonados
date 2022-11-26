import { servicios } from '../services/servicios_cliente.js';

const obtenerInfo = async() => {
    //Obteniendo el ID del URL
    const url = new URL(window.location);
    const idObj = url.searchParams.get('id');
    //Obteniendo los query's
    var imagenObj = document.querySelector("[data-imgObj]");
    var tituloObj = document.querySelector("[data-tittleObj]");
    var autorObj = document.querySelector("[data-autorObj]");
    var yearObj = document.querySelector("[data-yearObj]");
    var priceObj = document.querySelector("[data-priceObj]");

    await servicios.detalleAlbum(idObj).then((perfil) => {
        imagenObj = perfil.url;
        tituloObj= perfil.tittle;
        autorObj= perfil.author;
        yearObj = perfil.year;
        priceObj = perfil.price;
    });

    const contenedor = document.querySelector('[data-mayorContenedor]');
    const organizador = document.createElement('div');
    const interno = `
    <div class="contenedorMenor">
            <div class="contenedorInterno">
                <img src="${imagenObj}" class="imgObj" data-imgObj>
                <h2 class="tituloObj" data-tittleObj>${tituloObj}</h2>
                <h3 class="autorObj" data-autorObj>${autorObj}</h3>
                <h4 class="yearObj" data-yearObj>${yearObj}</h4>
            </div>
            
        
            <p class="descObj">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam rem consequatur officiis esse natus, ducimus quas. Amet sunt ipsa ad, distinctio dignissimos corporis? Totam distinctio labore accusantium magni ullam aut?
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident ut facilis nisi aliquid aliquam repudiandae temporibus possimus. Incidunt explicabo et cupiditate aut nulla laudantium sequi fugiat quaerat rem. Quos, ut. 
             </p>


            <div className="contenedorReserva">
            <h3 class="precio_album">$${priceObj}</h3>
            <button class="btnIngreso" id="btnObj" data-btnObj>Reservar</button>
            </div>
          
          
    </div>`
    organizador.innerHTML = interno;
    contenedor.appendChild(organizador);

    const btnObj = document.querySelector("[data-btnObj]");
    btnObj.addEventListener('click', () =>{
        alert("producto fuera de stock");
    })
}

obtenerInfo();




