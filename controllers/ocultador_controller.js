import { servicios } from '../services/servicios_cliente.js'

servicios.listaUsuarios().then((usuario) => {
    usuario.forEach(({nombre}) => {
        //Si consigue un nombre del DB se oculta el btn ingresar y se reemplaza
        //por uno que me lleve al perfil
        console.log(nombre)
        const linkBtn= document.getElementById('linkBtn');
        linkBtn.classList.add('ocultarBtn');
        cambiarBtn();
    });
})


const cambiarBtn = () => {
    const header = document.querySelector('[data-header]');
    const newBtn = `
    <a href="/pages/perfil.html"><button class="btnPerfil">Perfil</button></a>
    `
    const modelo = document.createElement('div')
    modelo.className = 'divBtnHeader'
    modelo.innerHTML = newBtn;

    header.appendChild(modelo);
}