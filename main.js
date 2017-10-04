
var app = new Vue({
  el: '#main',
  data: {
    procesos: [],
    newProcess: { time:"", recursos: []},
    contador: 1
  },
  methods: {
    Fteclado: function (){
      for (var i = 0; i < procesosBloqueado.length; i++) {

        var index = procesosBloqueado[i].recursos.indexOf("teclado");
        if (index > -1 ){
          procesosBloqueado[i].recursos.splice( index, 1);
      }

      }
    },

    Fmouse: function (){
      for (var i = 0; i < procesosBloqueado.length; i++) {

        var index = procesosBloqueado[i].recursos.indexOf("mouse");
        if (index > -1 ){
          procesosBloqueado[i].recursos.splice( index, 1);
        }
      }
    },
    Fparlantes: function (){
      for (var i = 0; i < procesosBloqueado.length; i++) {

        var index = procesosBloqueado[i].recursos.indexOf("parlantes");
        if (index > -1 ){
          procesosBloqueado[i].recursos.splice( index, 1);
        }
      }
    },
    Fimpresora: function (){
      for (var i = 0; i < procesosBloqueado.length; i++) {

        var index = procesosBloqueado[i].recursos.indexOf("impresora");
        if (index > -1 ){
          procesosBloqueado[i].recursos.splice( index, 1);
        }
      }
    },
    Fmicrofono: function (){
      for (var i = 0; i < procesosBloqueado.length; i++) {

        var index = procesosBloqueado[i].recursos.indexOf("microfono");
        if (index > -1 ){
          procesosBloqueado[i].recursos.splice( index, 1);
        }
      }
    },
    Fcamara: function (){
      for (var i = 0; i < procesosBloqueado.length; i++) {

        var index = procesosBloqueado[i].recursos.indexOf("camara");
        if (index > -1 ){
          procesosBloqueado[i].recursos.splice( index, 1);
        }
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
