var procesosGrande = new Array()
var app = new Vue({
  el: '#main',
  data: {
    procesos: [],
    newProcess: { time:"", recursos: []},
    contador: 1
  },
  methods: {
    crearProceso: function () {

      if( this.newProcess.time != ""){
         
        var nuevo = new collie.Text({
            width : 35,
            height : 35,
            y: 95,
            backgroundColor : '#6B33FF',
            fontSize:30,          
            fontColor: "black",
        }).text(" "+this.contador).addTo(layer);
        
        procesosGrande.push({id:this.contador, time:this.newProcess.time , o:nuevo});

        
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
