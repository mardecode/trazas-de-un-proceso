 var procesosListo = new Array();
 var procesosEjecutando = new Array();
 var procesosBloqueado = new Array();

var tiempoLimite = 5;

 var layer = new collie.Layer({
        width : 1300,
        height : 300
    });
     
//CAJA LISTO
    var listo = new collie.Text({
        
        width: 360,
        height: 100,
        backgroundColor: '#8DFF33',
        x:30,
        y:10,
        fontSize:20,
        fontColor:'#01012C',
        textAlign:'center'
    }).text(" LISTO").addTo(layer);
//CAJA EJECUTANDO
    var ejecutando = new collie.Text({
        width:360,
        height:100,
        backgroundColor:'pink',
        x : 500,
        y:10,
        fontSize:20,
        fontColor:'#01012C',
        textAlign:'center'
    }).text(" EJECUTANDO").addTo(layer);
//CAJA FINALIZADO
    var finalizado = new collie.Text({
        width:360,
        height:100,
        backgroundColor:'#33FFC4',
        x : 950,
        y:10,
        fontSize:20,
        fontColor:'#01012C',
        textAlign:'center'
    }).text(" FINALIZADO").addTo(layer);
//CAJA BLOQUEADO
    var bloqueado = new collie.Text({
        width:360,
        height:100,
        backgroundColor:'#FFCE33',
        x : 500,
        y:180,
        fontSize:20,
        fontColor:'#01012C',
        textAlign:'center'
    }).text(" BLOQUEADO").addTo(layer);

var line = new collie.Polyline({
    closePath : true
    }).addTo(layer);
line.setPointData([
    [390, 60],
    [500, 60]
]);

var line2 = new collie.Polyline({
    closePath : true
    }).addTo(layer);
line2.setPointData([
    [860, 60],
    [950, 60]
]); 
var line3 = new collie.Polyline({
    closePath : true
    }).addTo(layer);
line3.setPointData([
    [445, 60],
    [445, 230],
]);

var line31 = new collie.Polyline({
    closePath : true
    }).addTo(layer);
line31.setPointData([
    
    [445, 230],
    [500, 230]
]);

var line4 = new collie.Polyline({
    closePath : true
    }).addTo(layer);
line4.setPointData([
    [905, 60],
    [905, 230],
    
]);


var line41 = new collie.Polyline({
    closePath : true
    }).addTo(layer);
line41.setPointData([
    
    [905, 230],
    [860,230]
]);

function refreshListos() {
    inicio = 355;
    for (var i = 0; i < procesosListo.length; i++) {
        procesosListo[i].o.set("velocityX",200);
        procesosListo[i].o.set("rangeX",[0,inicio]);
        inicio -=40;
    }
}
function refreshEjecutando() {
    seguir=true;
    var nuevo = procesosListo.shift();
    procesosEjecutando.push(nuevo);
//    console.log("ejecutando !!!!!!!!!!!!!!!!1");
//  console.log(procesosEjecutando);
        procesosEjecutando[0].o.set("rangeX",[0,663]);

}
var limite;
function refreshTiempo() {
    //limite = count + procesosEjecutando[0].time;
    console.log("refreshTiempo");
    procesosEjecutando[0].time --;
    cont2++;
    console.log("contador 2  = "+cont2);
    if (cont2 >=5 ) {
        cont2 = 0;
        seguir=false;
        console.log("refreshToBloqueo !!!!!!!!!!1");
        refreshToBloqueo();
    }
    if(procesosEjecutando.length != 0){
        if (procesosEjecutando[0].time == 0) {
            console.log( "tiempo = "+procesosEjecutando[0].time);
            cont2 = 0;
            seguir=false;
            refreshFinalizado();
        }
    }
}

function derecha() {
    procesosBloqueado.lastIndexOf
}
var terminoMov = false;

function refreshToBloqueo() {
    terminoMov = false;
    var nuevoB = procesosEjecutando.pop();
    procesosBloqueado.push(nuevoB);

    nuevoB.o.set("rangeX",[500,887]);
    nuevoB.o.set("rangeY",[0,210]);

    setTimeout(function(){
   // nuevoB.o.set("velocityX",-200);
    nuevoB.o.set("velocityY",200);
    },1500);
    setTimeout(function(){
        nuevoB.o.set("velocityX",-200);
        terminoMov= true;
    //nuevoB.o.set("velocityY",200);
    },2800);

}
function refreshBloqueado() {
    console.log("Here BLOQUEADO");
    inicio = 500;
    for (var i = 0; i < procesosBloqueado.length; i++) {
        procesosBloqueado[i].o.set("velocityX",-200);
        procesosBloqueado[i].o.set("rangeX",[inicio,1000]);
        inicio += 40;
    }
}

function refreshFinalizado(argument) {
    var nuevoB = procesosEjecutando.pop();
    nuevoB.o.set("rangeX",[0,1300]);
    
    setTimeout(function(){
        nuevoB.o.leave();
    }, 5000);
    
}

var seguir  = true;
var cont2 = 0;

    collie.Timer.repeat(function (e) {
        console.log(e.count);
        if (procesosListo.length != 0 ) {
            refreshListos();
            if(procesosListo[0].o.get("x") == 355 ){
                console.log("procesos ejecutando");
                //console.log(procesosEjecutando);
                if (procesosEjecutando.length == 0) {
                    refreshEjecutando();
                    return;
                }
            }
        }
                
        console.log("tama "+procesosEjecutando.length);
        if (procesosEjecutando.length == 1) {
            if (seguir) {
                //refreshToBloqueo();

                if (procesosEjecutando[0].o.get("x")==663) {
                    console.log("p ejecutando X = ");
                    console.log(procesosEjecutando[0].o.get("x"));

                    refreshTiempo();    
                }
            }
        }

        if(procesosBloqueado.length != 0){
            refreshBloqueado();
        }
/*
//        console.log(app.procesos);

        console.log(arreglo);
        if(e.count == 1){
            //arreglo[0].o.addTo(layer);
        }
        
        if (e.count ==5) {
            //arreglo[0].set("velocityY",100);
            arreglo[1].o.addTo(layer);
        }
        if (e.count == 10 ) {
            arreglo.pop();
            arreglo2.push(ejemplo);
            arreglo2[0].set("rangeX",[0,1000]);
        }

        if (e.count == 15 ) {

            //collie.Renderer.stop();
            arreglo2[0].leave();
        }

*/


    }, 1000,{loop:0});
     
    
    collie.Renderer.addLayer(layer);
    collie.Renderer.load(document.getElementById("contenedor"));
    
    collie.Renderer.start();