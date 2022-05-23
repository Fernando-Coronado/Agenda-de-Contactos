const nombre = document.getElementById("nombre");
const numero = document.getElementById("numero");
const btnAgregar = document.getElementById("btn_agregar");

btnAgregar.addEventListener("click",()=>{
   //capturando los datos del formulario
   window.location.href = `agregar/${nombre.value}/${numero.value}`;
});

