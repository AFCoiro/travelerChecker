document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formContact");
  const nombre = document.getElementById("nombre");
  const email = document.getElementById("email");
  const telefono = document.getElementById("telefono");
  const website = document.getElementById("website");
  const asunto = document.getElementById("asunto");
  const mensaje = document.getElementById("mensaje");

  form.addEventListener("submit", e => {
    e.preventDefault();

    if (!validateForm()) {
      return; 
    }
    form.submit();
  });

  //FUNCION PARA VALIDAR EL FORM
  function validateForm() {
    let isValid = true;

    // Validar el nombre
    if (nombre.value.length < 6) {
      isValid = false;
      alert("El nombre debe tener al menos 6 caracteres.");
    }

    //validar el telefono
     if (telefono.value.length < 6) {
      isValid = false;
      alert("El telefono debe tener al menos 6 caracteres.");
    }

    // Validar el email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //Validacion por exp regular
    if (!emailRegex.test(email.value)) {
      isValid = false;
      alert("El email no es válido.");
    }

    

    return isValid;
  }
});



function toggleSection() {
  var content = document.querySelector('.content');
  var arrowImg = document.querySelector('.arrow-downImg');
  var formSection = document.querySelector('.formSection');
  
  content.classList.toggle('active');
  arrowImg.classList.toggle('rotate');

  if (content.classList.contains('active')) {
    // Si el contenido está activo, ajustamos el margen superior del formulario
    formSection.style.marginTop = content.clientHeight + 'px';
  } else {
    // Si el contenido está inactivo, restauramos el margen superior del formulario
    formSection.style.marginTop = '';
  }
}

