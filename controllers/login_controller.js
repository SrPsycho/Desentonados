import { servicios } from '../services/servicios_cliente.js'



const formulario = document.querySelector('[data-logForm]');

formulario.addEventListener('click',(e)=>{
    e.preventDefault();
    const inputEmail = (document.querySelector('[data-emailLog]'));
    const inputPass = (document.querySelector('[data-passLog]'));
    const emailBuscar=inputEmail.value;
    const passBuscar = inputPass.value;

  
    servicios.listaUsuarios().then((usuario) => {
        usuario.forEach(({email,pass})=> {
            if(emailBuscar===email && passBuscar===pass){
                alert("funciono") //Si funciona xd
                window.location.href = "/index.html"

            }else if(emailBuscar!==email){
                alert("Email no encontrado");
                inputEmail.classList.toggle('inputError');
                inputEmail.value = '';
                
            }else if(passBuscar!==pass){
                alert("Contraseña incorrecta");
                inputPass.classList.toggle('inputError');
                inputPass.value = '';
            }
        });
    })
      
})