document.addEventListener("DOMContentLoaded", function() {
    const boton = document.getElementById("verEntradas");
    const imagen = document.getElementById("imagenEntradas");

    boton.addEventListener("click", function() {
        if (imagen.classList.contains("oculto")) {
            imagen.classList.remove("oculto");
        } else {
            imagen.classList.add("oculto");
        }
    });
});
