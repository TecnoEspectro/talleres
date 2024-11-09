const { useState } = React;

function ReactApp() {
    // Ejemplo 1: Contador Reactivo
    const [contador, setContador] = useState(0);
    const incrementar = () => setContador(prev => prev + 1);

    // Ejemplo 2: Caja de Texto Reactiva
    const [texto, setTexto] = useState("");
    const manejarCambio = (e) => setTexto(e.target.value.toUpperCase());

    // Ejemplo 3: Cambio de Imagen con Hover
    const [imagen, setImagen] = useState("https://th.bing.com/th/id/OIP.7l2_vrF4dU9RkfhTcsKUBgAAAA?rs=1&pid=ImgDetMain");
    const cambiarImagen = () => setImagen("https://getwallpapers.com/wallpaper/full/3/a/0/768334-gorgerous-harley-davidson-bikes-wallpapers-1920x1200-meizu.jpg");
    const restaurarImagen = () => setImagen("https://th.bing.com/th/id/OIP.7l2_vrF4dU9RkfhTcsKUBgAAAA?rs=1&pid=ImgDetMain");

    return (
        <div>
            <h2>React</h2>
            <div>
                <h3>Contador Reactivo</h3>
                <p>Valor del contador: {contador}</p>
                <button onClick={incrementar}>Incrementar</button>
            </div>

            <div>
                <h3>Caja de Texto Reactiva</h3>
                <input type="text" value={texto} onChange={manejarCambio} placeholder="Escribe aquí..." />
                <p>Texto en mayúsculas: {texto}</p>
            </div>

            <div>
                <h3>Cambio de Imagen con Hover</h3>
                <img 
                    src={imagen} 
                    alt="Imagen reactiva"
                    onMouseEnter={cambiarImagen}
                    onMouseLeave={restaurarImagen}
                    style={{ width: "200px" }}
                />
            </div>
        </div>
    );
}

ReactDOM.render(<ReactApp />, document.getElementById('react-root'));