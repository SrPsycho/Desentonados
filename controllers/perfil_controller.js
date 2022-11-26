import { servicios } from '../services/servicios_cliente.js'

const main = document.querySelector('[data-main]');

servicios.listaUsuarios().then((usuario)=>{
    usuario.forEach(({nombre})=>{
        const nombreUser = nombre;
        console.log(nombreUser);
        const relleno = `
        <div>
            <img src="" class="fotoPerfil">
            <h2 class="tituloPerfil">Bienvenido ${nombreUser}</h2>
            <a href="/pages/agregar.html"><button>Editar inventario</button></a>
            <a href="/pages/todos.html"><button>Inventario</button></a>
        </div>`
        const contenedor = document.createElement('div');
        contenedor.innerHTML = relleno;
        main.appendChild(contenedor);
    })
    
})
