
var app = new Vue({
  el: '#main',
  data: {
    procesos: [],
    newProcess: { time:"", recursos: [] , prioridad:""},
    contador: 1
  },
  methods: {
    Fteclado: function (){
      

        var index = procesosBloqueado[0].recursos.indexOf("teclado");
        if (index > -1 ){
          procesosBloqueado[0].recursos.splice( index, 1);
      }

      
    },

    Fmouse: function (){
      

        var index = procesosBloqueado[0].recursos.indexOf("mouse");
        if (index > -1 ){
          procesosBloqueado[0].recursos.splice( index, 1);
        }
      
    },
    Fparlantes: function (){


        var index = procesosBloqueado[0].recursos.indexOf("parlantes");
        if (index > -1 ){
          procesosBloqueado[0].recursos.splice( index, 1);
        }

    },
    Fimpresora: function (){


        var index = procesosBloqueado[0].recursos.indexOf("impresora");
        if (index > -1 ){
          procesosBloqueado[0].recursos.splice( index, 1);
        }

    },
    Fmicrofono: function (){


        var index = procesosBloqueado[0].recursos.indexOf("microfono");
        if (index > -1 ){
          procesosBloqueado[0].recursos.splice( index, 1);
        }
      
    },
    Fcamara: function (){
      

        var index = procesosBloqueado[0].recursos.indexOf("camara");
        if (index > -1 ){
          procesosBloqueado[0].recursos.splice( index, 1);
        }
      
    },

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
        }).text(" "+this.newProcess.prioridad).addTo(layer);
        
        procesosListo.push({
          id:this.contador,
          time:this.newProcess.time , 
          o:nuevo ,
          prioridad: this.newProcess.prioridad,
          recursos:this.newProcess.recursos
        });

        
        this.newProcess.time = "";
        this.newProcess.prioridad = "";
        this.newProcess.recursos = [];
        this.contador++;  
      }
      
    }

  }
});

$(document).ready(function() {
  $('select').material_select();
});
