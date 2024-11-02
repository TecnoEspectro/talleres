class AyudaSpan extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.innerHTML = `
            <style>
                span {
                    color: blue;
                    font-weight: bold;
                }
            </style>
            <span>Este es un texto de ayuda.</span>
        `;
    }
}

customElements.define("ayuda-span", AyudaSpan);

class AyudaSpan2 extends HTMLElement {  //Este fue un intento de hacer un componente que se pueda modificar desde el html, como las estiquetas de texto h1,h2,p
    constructor() {
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.innerHTML = `
            <style>
                span {
                    color: blue;
                    font-weight: bold;
                }
            </style>
            <span>${this.innerHTML || 'Texto de ayuda predeterminado.'}</span>
        `;
    }
}

customElements.define("ayuda-span2", AyudaSpan2);

class BotonNotificaciones extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.innerHTML = `
            <style>
                button {
                    background-color: #007bff;
                    color: white;
                    border: none;
                    padding: 10px 15px;
                    cursor: pointer;
                }
                .icono {
                    margin-right: 5px;
                }
            </style>
            <button>
                <span class="icono">🔔</span> Notificaciones
            </button>
        `;
    }
}

customElements.define("boton-notificaciones", BotonNotificaciones);

class CajaClave extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.innerHTML = `
            <style>
                input {
                    padding: 10px;
                    margin-right: 5px;
                    border: 1px solid #ccc;
                    border-radius: 4px;
                    width: 250px;
                }
                button {
                    padding: 10px 15px;
                    background-color: #28a745;
                    color: white;
                    border: none;
                    border-radius: 4px;
                    cursor: pointer;
                }
                button:hover {
                    background-color: #218838;
                }
            </style>
            <div>
                <input type="password" id="clave" placeholder="Ingresa tu clave">
                <button id="enviar">Enviar</button>
            </div>
        `;

        shadowRoot.getElementById('enviar').addEventListener('click', () => {
            const clave = shadowRoot.getElementById('clave').value;
            const claveEncriptada = btoa(clave);
            console.log('Clave encriptada:', claveEncriptada);
        });
    }
}

customElements.define("caja-clave", CajaClave);

class CajaCupon extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.innerHTML = `
            <style>
                form {
                    display: flex;
                    flex-direction: column;
                    margin-top: 10px;
                    width: 250px;
                    padding-left:43%;
                }
                label {
                    margin-bottom: 5px;
                    font-weight: bold;
                }
                input {
                    padding: 10px;
                    margin-bottom: 10px;
                    border: 1px solid #ccc;
                    border-radius: 4px;
                }
                button {
                    padding: 10px 15px;
                    background-color: #007bff;
                    color: white;
                    border: none;
                    border-radius: 4px;
                    cursor: pointer;
                }
                button:hover {
                    background-color: #0056b3;
                }
            </style>
            <form>
                <label for="cupon">Cupón de Descuento:</label>
                <input type="text" id="cupon" placeholder="Ingresa tu cupón">
                <button type="submit">Aplicar</button>
            </form>
        `;
    }
}

customElements.define("caja-cupon", CajaCupon);