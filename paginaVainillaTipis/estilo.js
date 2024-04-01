function EnviarFormulario(){
     // Obtener los valores de los campos
     var nombre = document.getElementById('nombre').value;
     var email = document.getElementById('email').value;
  
     // Verificar si los campos están completos
     if (nombre.trim() === '' || email.trim() === '') {
       alert("Por favor, completa todos los campos del formulario.");
     } else {
       alert("Formulario enviado correctamente");
     }
}