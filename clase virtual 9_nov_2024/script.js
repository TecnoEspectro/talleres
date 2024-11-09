// Contador
let contador = 0;
let incremento = 1;
const botonContador = document.getElementById("botonContador");
const valorContador = document.getElementById("valorContador");

botonContador.addEventListener("click", () => {
    contador += incremento;
    valorContador.textContent = contador;

    if (contador % 5 === 0) {
        incremento++;
    }

    if (contador >= 100) {
        botonContador.disabled = true;
    }
});

// Caja de texto reactiva
const cajaTextoReactiva = document.getElementById("cajaTextoReactiva");
cajaTextoReactiva.addEventListener("blur", () => {
    cajaTextoReactiva.value = cajaTextoReactiva.value.toUpperCase();
});

// Cambio de tamaño de texto para el título
let tamanoInicial = 24;
const aumentarTamanoTexto = document.getElementById("aumentarTamanoTexto");
const disminuirTamanoTexto = document.getElementById("disminuirTamanoTexto");
const encabezado = document.querySelector("h1");

aumentarTamanoTexto.addEventListener("click", () => {
    tamanoInicial += 2;
    encabezado.style.fontSize = `${tamanoInicial}px`;
});

disminuirTamanoTexto.addEventListener("click", () => {
    if (tamanoInicial > 24) {
        tamanoInicial -= 2;
        encabezado.style.fontSize = `${tamanoInicial}px`;
    }
});

// Cambio de imagen al mover el mouse sobre ella
const imagen = document.getElementById("imagen");

imagen.addEventListener("mouseenter", () => {
    imagen.src = "https://i.pinimg.com/originals/18/7d/9a/187d9a9815e6a802376412fee2db6fee.jpg"; // Cambia a la segunda imagen al pasar el mouse
});

imagen.addEventListener("mouseleave", () => {
    imagen.src = "https://th.bing.com/th/id/R.774fa32275ae578fe8dddfc6b2b9c94d?rik=TueXXCPcVGIYkw&pid=ImgRaw&r=0"; // Vuelve a la imagen original al quitar el mouse
});