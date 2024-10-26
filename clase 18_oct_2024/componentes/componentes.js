//utilizamos la Custom elements API
class componenteUfpso extends HTMLElement{
    constructor(){
       super();
        this.name;
        this.apodo;
    }
static get observedAttributes(){
    return ['name', "apodo"];
}
attributeChangedCallback(nameAtr,oldValue, newValue){
    switch(nameAtr){
        case "name":
            this.name = newValue;
            break;
        case "apodo":
            this.apodo = newValue;
            break;
    }
}
   // este metodo activa el uso del componente 
connectedCallback(){
    this.innerHTML=`<div><h1> Hola ${this.name}  </h1><p> Bienvenidos ${this.apodo}</p></div>`; 
    this.style.color="red";
    this.style.fontFamily="arial";
}}////////////////////////////////////////////////////////////
class juanBoton extends HTMLElement{
    constructor(){
        super();
        let shadowRoot = this.attachShadow({mode: 'open'});
        
        shadowRoot.innerHTML = `
<style>
.button {
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}
.button1 {background-color: #04AA6D;} /* Green */

.button2:hover {
  background-color: #011CBA;
  color: white;
}

</style>
<button class="button button2">Ir al carrito</button>`;


       }
}
/////////////////////////////////////////////////////////////////////
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
////////////////////////////////////////////////////////////////////
// Create a class for the element
class PopupInfo extends HTMLElement {
    constructor() {
      // Always call super first in constructor
      super();
    }
  
    connectedCallback() {
      // Create a shadow root
      const shadow = this.attachShadow({ mode: "open" });
  
      // Create spans
      const wrapper = document.createElement("span");
      wrapper.setAttribute("class", "wrapper");
  
      const icon = document.createElement("span");

      icon.setAttribute("class", "icon");

      icon.setAttribute("tabindex", 0);
  
      const info = document.createElement("span");
      
      info.setAttribute("class", "info");
  
      // Take attribute content and put it inside the info span
      const text = this.getAttribute("data-text");
      info.textContent = text;
  
      // Insert icon
      let imgUrl;
      if (this.hasAttribute("img")) {
        imgUrl = this.getAttribute("img");
      } else {
        imgUrl = "./logo.png";
      }
  
      const img = document.createElement("img");
      img.src = imgUrl;
      icon.appendChild(img);
  
      // Create some CSS to apply to the shadow dom
      const style = document.createElement("style");
      console.log(style.isConnected);
  
      style.textContent = `
        .wrapper {
          position: relative;
        }
  
        .info {
          font-size: 0.8rem;
          width: 200px;
          display: inline-block;
          border: 1px solid black;
          padding: 10px;
          background: white;
          border-radius: 10px;
          opacity: 0;
          transition: 0.6s all;
          position: absolute;
          bottom: 20px;
          left: 10px;
          z-index: 3;
        }
  
        img {
          width: 10.2rem;
        }
  
        .icon:hover + .info, .icon:focus + .info {
          opacity: 1;
        }
      `;
  
      // Attach the created elements to the shadow dom
      shadow.appendChild(style);
      console.log(style.isConnected);
      shadow.appendChild(wrapper);
      wrapper.appendChild(icon);
      wrapper.appendChild(info);
    }
  }
  
  // Define the new element
  customElements.define("popup-info", PopupInfo);

///////////////////////////////////////////////////////////////////



window.customElements.define("title-ufpso",componenteUfpso);


window.customElements.define("carrito-boton",juanBoton);

window.customElements.define('fecha-hoy', FechaHoy);
