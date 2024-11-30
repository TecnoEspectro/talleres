document.addEventListener("DOMContentLoaded", async () => {
    // EJERCICIO 1: Productos disponibles
    const selectProducto = document.getElementById("selectProducto");
    const precioProducto = document.getElementById("precioProducto");

    try {
        const productosResponse = await fetch("productos.json");
        const productos = await productosResponse.json();

        productos
            .filter(producto => producto.disponibilidad)
            .forEach(producto => {
                const option = document.createElement("option");
                option.value = producto.precio;
                option.textContent = producto.nombre;
                selectProducto.appendChild(option);
            });

        selectProducto.addEventListener("change", () => {
            precioProducto.textContent = `$${selectProducto.value}`;
        });
    } catch (error) {
        console.error("Error al cargar productos:", error);
    }

    // EJERCICIO 2: Información de empleados
    const selectEmpleado = document.getElementById("selectEmpleado");
    const puestoEmpleado = document.getElementById("puestoEmpleado");
    const salarioEmpleado = document.getElementById("salarioEmpleado");
    const ubicacionEmpleado = document.getElementById("ubicacionEmpleado");

    try {
        const empleadosResponse = await fetch("empleados.json");
        const empleados = await empleadosResponse.json();

        empleados.forEach(empleado => {
            const option = document.createElement("option");
            option.value = empleado.id;
            option.textContent = empleado.nombre;
            option.dataset.puesto = empleado.puesto;
            option.dataset.salario = empleado.salario;
            option.dataset.ubicacion = empleado.ubicacion;
            selectEmpleado.appendChild(option);
        });

        selectEmpleado.addEventListener("change", () => {
            const selectedOption = selectEmpleado.selectedOptions[0];
            puestoEmpleado.textContent = selectedOption.dataset.puesto || "--";
            salarioEmpleado.textContent = `$${selectedOption.dataset.salario || "--"}`;
            ubicacionEmpleado.textContent = selectedOption.dataset.ubicacion || "--";
        });
    } catch (error) {
        console.error("Error al cargar empleados:", error);
    }

    // EJERCICIO 3: Búsqueda de juegos de PS2
    const formBusqueda = document.getElementById("formBusqueda");
    const inputJuego = document.getElementById("inputJuego");
    const resultado = document.getElementById("resultado");

    try {
        const juegosResponse = await fetch("juegos.json");
        const juegos = await juegosResponse.json();

        formBusqueda.addEventListener("submit", (event) => {
            event.preventDefault();
            const textoBusqueda = inputJuego.value.trim().toLowerCase();
            const juegosEncontrados = juegos.filter(juego =>
                juego.nombre.toLowerCase().includes(textoBusqueda)
            );

            if (juegosEncontrados.length > 0) {
                resultado.innerHTML = `<p><strong>Juegos encontrados:</strong></p>`;
                juegosEncontrados.forEach(juego => {
                    resultado.innerHTML += `
                        <p><strong>Nombre:</strong> ${juego.nombre}</p>
                        <p><strong>Género:</strong> ${juego.genero}</p>
                        <p><strong>Año:</strong> ${juego.año}</p>
                        <hr>
                    `;
                });
            } else {
                resultado.innerHTML = `<p>No se encontraron juegos con "${inputJuego.value}".</p>`;
            }

            inputJuego.value = "";
        });
    } catch (error) {
        console.error("Error al cargar juegos:", error);
    }
});
//Andres Felipe Sepulveda Gaona 192228