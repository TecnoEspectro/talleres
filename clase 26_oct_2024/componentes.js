class titulosElprofebarrientos extends HTMLElement{
    constructor(){
       super();
            }
   // este metodo activa el uso del componente 
connectedCallback(){    
  let shadowRoot = this.attachShadow({mode: 'open'});
  shadowRoot.innerHTML = `
  <style>
    div {      
  background-color: green;
  border-radius: 8px;
  box-shadow: 0 8px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 100%; 
  font-size: 1.0em;
  color: #ffffff;
  margin: 0 0 20px;
  text-align: center;
  justify-content: center;
  font-family: 'Times New Roman',
  Times, serif;
  font-weight: 400;
    }
  </style>
   <div><strong>Derechos reservados -- Andres Felipe Sepulveda Gaona 192228</strong></div>
  `

}}

// Define the new element
  customElements.define("titulos-elprofebarrientos", titulosElprofebarrientos);






  class FechaHoy extends HTMLElement {
    constructor() {
      super();  
      let shadowRoot = this.attachShadow({mode: 'open'});

      shadowRoot.innerHTML = `
      <style>
        div {
          font-size: 20px;
          color: blue;
        }
      </style>
    <div>${this.fecha()}</div>`;



    }
  
    fecha() {
      var today = new Date();
      var dia = String(today.getDate());
      var mes = String(today.getMonth() + 1); //January is 0!
      var ano = today.getFullYear();
  
     return `${dia}/${mes}/${ano}`;
    }
  }

  window.customElements.define('fecha-hoy', FechaHoy);





  class HoraAhora extends HTMLElement {
    constructor() {
        super();  
        this.attachShadow({ mode: 'open' });
        this.intervalId = null; // Para almacenar el ID del intervalo
    }

    connectedCallback() {
        this.render(); // Llama a la función de renderizado
        this.startClock(); // Inicia el contador
    }

    disconnectedCallback() {
        clearInterval(this.intervalId); // Detiene el contador cuando se elimina el componente
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                div {
                    font-size: 20px;
                    color: blue;
                }
            </style>
            <div>${this.hora()}</div>`;
    }

    hora() {
        const now = new Date();
        const horas = String(now.getHours()).padStart(2, '0');
        const minutos = String(now.getMinutes()).padStart(2, '0');
        const segundos = String(now.getSeconds()).padStart(2, '0');

        return `${horas}:${minutos}:${segundos}`;
    }

    startClock() {
        this.intervalId = setInterval(() => {
            this.render(); // Actualiza la hora cada segundo
        }, 1000);
    }
}

window.customElements.define('hora-ahora', HoraAhora);





class buscarElprofebarrientos extends HTMLElement {
    constructor() {
      // Always call super first in constructor
      super();
    }
    connectedCallback() {
      // Create a shadow root
      const shadow = this.attachShadow({ mode: "open" });
      // Create caja de texto
      const buscarcaja = document.createElement("input");
      buscarcaja.type = 'text';
      buscarcaja.name = 'buscar';
      buscarcaja.id = 'buscar';
  
      buscarcaja.placeholder = 'Burcar con ChatGPT';
      buscarcaja.setAttribute("class", "buscarcaja buscarcaja:focus");
      const style = document.createElement("style");
      style.textContent = `
        .buscarcaja {       
         
        width: 100%;           /* Ancho de la caja de texto */
    padding: 10px;         /* Espaciado interno */
    border: 2px solid #007bff; /* Color y grosor del borde */
    border-radius: 20px;   /* Esquinas redondeadas */
    outline: none;         /* Quitar el contorno al hacer clic */
    transition: border-color 0.3s; /* Transición suave para el color del borde */
  
        }
          .buscarcaja:focus {
    border-color: #CD5C5C;  /* Color del borde al enfocar */
  }
       
      `;
      // Attach the created elements to the shadow dom
      shadow.appendChild(style);   
      shadow.appendChild(buscarcaja);
      
    }
  }

  window.customElements.define('buscar-gpt', buscarElprofebarrientos);
  




  class irAChatGPT extends HTMLElement {
    constructor() {
        super();
    }

    // Este método activa el uso del componente 
    connectedCallback() {    
        let shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.innerHTML = `
            <style>
                div {
                    background-color: green;
                    border-radius: 8px;
                    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
                    overflow: hidden;
                    width: 500px%;
                    padding: 15px;
                    font-size: 1.2em;
                    color: #ffffff;
                    margin: 0 0 20px;
                    text-align: center;
                    font-family: 'Times New Roman', Times, serif;
                    font-weight: 600;
                }
                a {
                    text-decoration: none;
                    color: #ffffff; /* Asegura que el texto del enlace sea blanco */
                    transition: color 0.3s;
                }
                    div:hover {
                    background-color: darkgreen;
                }
                a:hover {
                    color: #ffd700; /* Color dorado al pasar el mouse */
                    background-color: darkgreen;

                }
            </style>
            <div>
                <a href="https://chatgpt.com/" target="_blank">Ir a Chat GPT</a>
            </div>
        `;
    }
}

// Define the new element
  customElements.define("ir-achatgpt", irAChatGPT);



  class BotonCarrito extends HTMLElement {
    constructor() {
        super();  
        this.attachShadow({ mode: 'open' });
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                button {
                    font-size: 18px;
                    color: white;
                    background-color: green;
                    border: none;
                    border-radius: 5px;
                    padding: 10px 20px;
                    cursor: pointer;
                    transition: background-color 0.3s;
                }
                button:hover {
                    background-color: darkgreen;
                    color: #ffd700;
                }
            </style>
            <button id="carrito-btn">Ir al carrito</button>
        `;
    }
}

window.customElements.define('boton-carrito', BotonCarrito);