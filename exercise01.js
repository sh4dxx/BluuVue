const app = new Vue({
  el: "#app",
  data: {
    titulo: "Tasting Vue",
    frutasArray: ["manzana", "peras", "platanos"],
    usuarios: [
      { nombre: "Juan", edad: 40 },
      { nombre: "Pedro", edad: 25 },
      { nombre: "Diego", edad: 15 },
    ],
    frutas: [
        { cantidad: 40, nombre:"Peras" },
        { cantidad: 25, nombre:"Manzanas" },
        { cantidad: 15, nombre:"Naranjas" },
      ],
    nuevoUsuario: '',
    nuevoUsuarioEdad: '',
    totalFrutas: 0,
  },
  methods: {

      //Esto es un metodo o funcion
      agregarUsuario() {
        this.usuarios.push({
            nombre: this.nuevoUsuario,
            edad: this.nuevoUsuarioEdad,
        });
        this.nuevoUsuario = "";
        this.nuevoUsuarioEdad = "";
      },

      agregarFrutas() {
        this.usuarios.push({
            nombre: this.nuevoUsuario,
            edad: this.nuevoUsuarioEdad,
        });
        this.nuevoUsuario = "";
        this.nuevoUsuarioEdad = "";
      },

  },
  computed: {
      sumarFrutas() {
          this.totalFrutas = 0;
          for(fruta of this.frutas){
            this.totalFrutas = this.totalFrutas + fruta.cantidad;
          }
          return this.totalFrutas;
      }
  }
});
