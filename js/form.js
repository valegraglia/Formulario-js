//creo una variable y lo referencio al formulario
let frm = document.querySelector('form');

//agrego al evento submit , la funcion = validacion
frm.addEventListener('submit', validacion);

//creo mi funcion validacion para validar el ingreso de informacion por inputs
function validacion(event){
  //capturo el evento por default , para que no se ejecute
    event.preventDefault();

  //creo mis variables :
  //error: para saber cuando no sea verdadero
    let error = false;
  //nombre: para capturar lo que el usuario ingresa en el input usuario
    let nombre = document.querySelector('#usuario');
  //pass: para capturar lo que el usuario ingresa en el input password
    let pass = document.querySelector('#password');

  //creo un if donde consulto si el nombre tiene incluido el arroba
    if (!(nombre.value).includes('@',1)){
        let errNombre = document.querySelector('#err-nombre');
        errNombre.textContent = "El nombre debe de contener @";
        nombre.value = "";
        error = true;
    }
  //creo un if para saber si el password es diferente de vacio
    if (pass.value == ''){
        let errPass = document.querySelector('#err-password');
        errPass.textContent = "El campo no puede estar vacio";
        error = true;
    }
  //si mi booleano sigue siendo falso el formulario se enviara
    if(error == false){
        frm.submit();
    }
}