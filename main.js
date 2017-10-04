
var app = new Vue({
  el: '#main',
  data: {
    procesos: [],
    newProcess: { time:"", recursos: []},
    contador: 1
  },
  methods: {
    crearProceso: function () {

      if( this.newProcess.time != "" && procesosListo.length < 9){
         console.log(procesosListo.length);
        var nuevo = new collie.Text({
            width : 35,
            height : 35,
            y: 45,
            x: 30,
            backgroundColor : '#6B33FF',
            fontSize:20,          
            fontColor: "black",
            textAlign:'center'
        }).text(" "+this.contador).addTo(layer);
        
        procesosListo.push({
          id:this.contador,
          time:this.newProcess.time , 
          o:nuevo ,
          recursos:this.newProcess.recursos
        });

        
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
