let form = document.querySelector('form');

form.addEventListener('submit', (event) =>{
    event.preventDefault();
    let error = false;
    let usuario = document.querySelector('#usuario')
    let clave =  document.querySelector('#clave');
   
    

    if (!(usuario.value).includes('@', 1)){
       let errorUsuario = document.querySelector('#error-usuario');
       errorUsuario.textContent = 'El usuario debe contener @';
       usuario.value = '';
       error = true;    
    }else if (error == false){
        form.submit();
    }
    
})
