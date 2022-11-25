import { servicios } from '../services/servicios_cliente.js'


const formulario = document.querySelector("[data-form]");

formulario.addEventListener('click',(e)=>{
    e.preventDefault();
    const nombre = (document.querySelector('[data-nameReg]')).value;
    const email = (document.querySelector('[data-emailReg]')).value
    const pass = document.querySelector('[data-passReg]');
    const passAgain = document.querySelector('[data-passReg2]');

    console.log(`${nombre} - ${email} - ${pass.value} - ${passAgain.value}`)

    if(passAgain.value === pass.value){
        servicios.crearUsuario(nombre, email, pass.value);
        alert("Usuario creado con exito, redirigiendo...");
        window.location.href = "/pages/logearse.html";
        
    }else{
        alert("Las contraseñas no coinciden");
        pass.value = '';
        passAgain.value = '';
    }
})



