new Vue({
    el: '#vue-root',
    data: {
        contador: 0,
        texto: '',
        imagen: 'https://th.bing.com/th/id/OIP.7l2_vrF4dU9RkfhTcsKUBgAAAA?rs=1&pid=ImgDetMain'
    },
    methods: {
        incrementar() {
            this.contador++;
        },
        convertirAMayusculas(event) {
            this.texto = event.target.value.toUpperCase();
        },
        cambiarImagen() {
            this.imagen = 'https://getwallpapers.com/wallpaper/full/3/a/0/768334-gorgerous-harley-davidson-bikes-wallpapers-1920x1200-meizu.jpg';
        },
        restaurarImagen() {
            this.imagen = 'https://th.bing.com/th/id/OIP.7l2_vrF4dU9RkfhTcsKUBgAAAA?rs=1&pid=ImgDetMain';
        }
    },
    template: `
        <div>
            <h2>Vue.js</h2>
            <div>
                <h3>Contador Reactivo</h3>
                <p>Valor del contador: {{ contador }}</p>
                <button @click="incrementar">Incrementar</button>
            </div>

            <div>
                <h3>Caja de Texto Reactiva</h3>
                <input type="text" v-model="texto" @input="convertirAMayusculas" placeholder="Escribe aquí..." />
                <p>Texto en mayúsculas: {{ texto }}</p>
            </div>

            <div>
                <h3>Cambio de Imagen con Hover</h3>
                <img 
                    :src="imagen" 
                    alt="Imagen reactiva"
                    @mouseenter="cambiarImagen"
                    @mouseleave="restaurarImagen"
                    style="width: 200px;"
                />
            </div>
        </div>
    `
});