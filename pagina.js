var nombre = document.getElementById("nombre");
var apellido = document.getElementById("apellido");
var correo = document.getElementById("correo");
var error = document.getElementById("error");
error.style.color = "red";

function enviarFormulario() {
    console.log("Formulario enviado con exito");

    var mensajesError = [];

    if (nombre.value === null || nombre.value === "") {
        mensajesError.push("Ingresa nombre");
    }

    if (apellido.value === null || apellido.value === "") {
        mensajesError.push("Ingresa apellido");
    }

    if (correo.value === null || correo.value === "") {
        mensajesError.push("Ingresa correo");
    }

    error.innerHTML = mensajesError.join(", ");

    return false;
}