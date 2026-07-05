const boton = document.getElementById("modo");

// Aplicar el modo guardado al cargar la página
if (localStorage.getItem("modo") === "claro") {

    document.body.classList.add("claro");
    boton.innerHTML = "Modo Phantom";

} else {

    boton.innerHTML = "Modo clásico";

}

// Cambiar de modo
boton.addEventListener("click", function () {

    document.body.classList.toggle("claro");

    if (document.body.classList.contains("claro")) {

        boton.innerHTML = "Modo Phantom";
        localStorage.setItem("modo", "claro");

    } else {

        boton.innerHTML = "Modo clásico";
        localStorage.setItem("modo", "oscuro");

    }

});

// Reiniciar formulario al cerrar el modal
const modalPeticion = document.getElementById("peticion");

if (modalPeticion) {

    modalPeticion.addEventListener("hidden.bs.modal", function () {

        modalPeticion.querySelector("form").reset();

    });

}

// Botón de enviar solicitud
const botonSolicitud = document.getElementById("enviarSolicitud");

if (botonSolicitud) {

    botonSolicitud.addEventListener("click", function (e) {

        e.preventDefault();

        alert("¡Solicitud aceptada!\n\nLos Phantom Thieves están listos para recibir tu misión.\n\nSe abrirá tu aplicación de correo para completar el envío.");

        window.location.href =
            "mailto:contacto@phantomthieves.com?subject=Solicitud%20para%20los%20Phantom%20Thieves";

    });

}