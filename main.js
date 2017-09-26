var app = new Vue({
  el: '#main',
  data: {
    procesos: [],
    newProcess: {name:"", time:"", recursos: []},
    contador: 1
  },
  methods: {
    crearProceso: function () {

      if(this.newProcess.name != "" && this.newProcess.time != ""){
        var nuevo = JSON.parse(JSON.stringify(this.newProcess));
        nuevo.id = this.contador;
        
        this.procesos.push(nuevo);
        this.newProcess.name = "";
        this.newProcess.time = "";
        this.newProcess.recursos = [];
        this.contador++;  
      }
      
    }

  }
});

$(document).ready(function() {
  $('select').material_select();
});