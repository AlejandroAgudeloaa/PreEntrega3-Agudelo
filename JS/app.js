function calcularIMC() {
  document.getElementById("resultadoIMC").innerHTML = "";
  let peso = parseFloat(document.getElementById("peso").value);
  let altura = parseFloat(document.getElementById("altura").value);
  let pesoIdeal = peso / (altura * altura);
  document.getElementById("resultadoIMC").innerHTML =
    document.getElementById("resultadoIMC").innerHTML +
    `<div class="col bg-body-tertiary">
                        <h3>Tu IMC es</h3><p>${pesoIdeal.toFixed(2)} kg</p>
                    </div`;
}


// REGISTER

function obtenerDatosUsuario() {

    let nombreUsuario = document.getElementById('usuario').value;
    let contraseñaUsuario = document.getElementById('contraseña').value;
    let emailUsuario = document.getElementById('email').value;
    
    let nuevoUsuario = { nombre: nombreUsuario, contraseña: contraseñaUsuario, email: emailUsuario };
  
    // Obtener registros del localStorage o inicializar un array vacío si no existen
    let registros = JSON.parse(localStorage.getItem('registros')) || [];
  
    let usuarioExistente = false;
  
    // Verificar si el nombre de usuario ya existe en el array
    for (let i = 0; i < registros.length; i++) {
      if (registros[i].nombre === nuevoUsuario.nombre) {
        usuarioExistente = true;
        alert('Este nombre de usuario ya esta registrado, intenta con otro nuevamente.')
        break;
      }
    }
  
    if (!usuarioExistente) {
      registros.push(nuevoUsuario); // Agregar el nuevo usuario al array
  
      // Guardar el array actualizado en el localStorage
      localStorage.setItem('registros', JSON.stringify(registros));
      console.log('Usuario agregado y registros actualizados en el localStorage.');
        window.location.href = 'index.html';

    } else {
      console.log('El nombre de usuario ya existe en los registros.');
    }
  }
  




