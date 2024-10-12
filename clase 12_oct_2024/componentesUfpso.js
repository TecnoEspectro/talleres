class titleVerdeUfpso extends HTMLElement {
    constructor() {
        super();
    }

connectedCallback(){
    this.innerHTML="<p><strong>Bienvenidos a la UFPSO</strong></p>";
    this.style.color ="green";
    this.style.fontFamily="arial";
    this.style.fontSize="28";
}

}
customElements.define("titleverde-ufpso",titleVerdeUfpso);

class irAlCarrito extends HTMLElement {
    constructor() {
        super();
    }

connectedCallback(){
    this.innerHTML="<button>Ir al Carrito</button>";
    this.style.boxShadow="20px";
    this.style.backgroundColor="green";
}

}
customElements.define("iralcarrito-ufpso",irAlCarrito);