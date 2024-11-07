

var  formulario = document.getElementById('formulario'),
    nombre = formulario.nombre,
    correo = formulario.correo,
    sexo = formulario.sexo, 
    terminos = formulario.terminos, 
    error = document.getElementById('error');

function validarNombre(e) {
    if ( nombre.value == '' || nombre.value == null ) {
        console.log('Porfavor completa los campos')
        error.style.display = 'block';
        error.innerHTML += '<li>Porfavor , ingresa un nombre</li>';

        e.preventDefault();
    }else {
        error.style.display='none';
    }
}


function validarCorreo(e) {
    if ( correo.value == '' || correo.value == null ) {
        error.style.display = 'block';
        error.innerHTML += '<li>Porfavor , ingresa un correo</li>';

        e.preventDefault();
    }else {
        error.style.display='none';
    }
}

function validarSexo(e) {
    if ( sexo.value == '' || sexo.value == null ) {
        error.style.display = 'block';
        error.innerHTML += '<li>Porfavor , selecciona el campo</li>';

        e.preventDefault();
    }else {
        error.style.display='none';
    }
}

function validarTerminos(e) {
    if ( terminos.checked == false ) {
        error.style.display = 'block';
        error.innerHTML += '<li>Porfavor , acepta terminos y condiciones</li>';

        e.preventDefault();
    }else {
        error.style.display='none';
    }
}

function validarFormulario(e) {
    error.innerHTML = '';
    validarNombre (e);
    validarTerminos (e);
    validarCorreo (e);
    validarSexo (e);
}

formulario.addEventListener('submit', validarFormulario);