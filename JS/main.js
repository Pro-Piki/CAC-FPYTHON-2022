function showMenu(){
    document.getElementById("menu_items").classList.toggle("show");
}



function valida_formulario() {
    let nom = document.forms["formulario"]["Nombre"].value;
    let a = document.forms["formulario"]["Apellido"].value;
    let m = document.forms["formulario"]["Email"].value;
    edad = document.formulario.Edad.value
   	document.formulario.Edad.value=edad
  
    if (nom == "") {
      alert("Debe completar su nombre");
      return false;
    }
    else {
      if (a == "") {
        alert("Debe completar su apellido");
        return false;
      }
      else {
        if (m == "") {
          alert("Debe completar su email");
          return false;
        }
     }    
    }
    if (edad<18){
      alert("Debe ser mayor de 18 años.")
      document.formulario.Edad.focus()
      return false;
    }
     
    alert("Muchas gracias por enviar el formulario");
    document.fvalida.submit();
  }