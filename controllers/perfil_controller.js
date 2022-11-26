import { servicios } from '../services/servicios_cliente.js'

const main = document.querySelector('[data-main]');

servicios.listaUsuarios().then((usuario)=>{
    usuario.forEach(({nombre})=>{
        const nombreUser = nombre;
        console.log(nombreUser);
        const relleno = `
        <div class="contenedorPerfil">
            <img src="/assets/images/perfil.png" class="fotoPerfil">
            <h2 class="tituloPerfil">Bienvenido ${nombreUser}</h2>
            <a href="/pages/agregar.html"><button class="btnPerfil">Editar inventario</button></a>
            <a href="/pages/todos.html"><button class="btnPerfil">Inventario</button></a>
        </div>`
        const contenedor = document.createElement('div');
        contenedor.innerHTML = relleno;
        main.appendChild(contenedor);
    })
    
})
