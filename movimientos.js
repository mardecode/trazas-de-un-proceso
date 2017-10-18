 var procesosListo = new Array();
 var procesosEjecutando = new Array();
 var procesosBloqueado = new Array();
var terminoMov = false;

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

var tiempo1 = new collie.Text({
        width:50,
        height:20,
        backgroundColor:'white',
        x : 663,
        y:130,
        fontSize:30,
        fontColor:'black',
        textAlign:'center'
    }).text("0").addTo(layer);

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
    [47, 110],
    [47, 230],
]);

var line31 = new collie.Polyline({
    closePath : true
    }).addTo(layer);
line31.setPointData([
    
    [47, 230],
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

    procesosListo.sort(function(a,b){
        if(a.prioridad > b.prioridad) return 1;
        if(a.prioridad < b.prioridad) return -1;
        return 0;
    });

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
    procesosEjecutando[0].o.set("rangeX",[0,663]);
}

function refreshTiempo() {
    cont2++;
    procesosEjecutando[0].time --;
    //procesosEjecutando[0].o.text(procesosEjecutando[0].time);
    //tiempo1.text(cont2);
    tiempo1.text(procesosEjecutando[0].time);

    if(procesosEjecutando.length != 0){
        if (procesosEjecutando[0].time <= 0) {
            //console.log( "tiempo = "+procesosEjecutando[0].time);
            cont2 = 0;
            seguir=false;
            refreshFinalizado();    
        }
    }

    
    /*
    if (cont2 >4 ) {
        cont2 = 0;
        seguir=false;
        //console.log("refreshToBloqueo !!!!!!!!!!1");
        refreshToBloqueo();
    }
    */
    if(procesosListo.length!=0 && procesosEjecutando.length!=0)
    if(procesosEjecutando[0].prioridad > procesosListo[0].prioridad){
        cont2 = 0;
        seguir=false;
        refreshToBloqueo();
    }
    
}


tiempoEspera = 1500;

function refreshToBloqueo() {
    terminoMov = false;
    var nuevoB = procesosEjecutando.pop();
    procesosBloqueado.push(nuevoB);

    nuevoB.o.set("rangeX",[500,887]);
    nuevoB.o.set("rangeY",[0,210]);

    setTimeout(function(){
    nuevoB.o.set("velocityY",200);
    },1800,nuevoB);

    setTimeout(function(){
        nuevoB.o.set("velocityX",-200);
        terminoMov= true;
    //nuevoB.o.set("velocityY",200);
    },2100,nuevoB);

}



function refreshBloqueado() {
    console.log("Here BLOQUEADO");
    inicio = 500;
    for (var i = 0; i < procesosBloqueado.length; i++) {

        procesosBloqueado[i].o.set("velocityX",-200);
        
        /*if(procesosBloqueado[i].recursos.length != 0){
            procesosBloqueado[i].o.set("rangeX",[inicio,1000]);
            inicio += 40;
        }

        else{ */
            procesosBloqueado[i].o.set("rangeX",[30,1000]);
            //console.log("1", [i]);
            //var ip  = i;
            if(procesosBloqueado[i].o.get("x") == 30){
                console.log("2", i , procesosBloqueado ,procesosBloqueado[i]);
                procesosBloqueado[i].o.set("rangeY",[45,230]);
                procesosBloqueado[i].o.set("velocityY",-200);
                procesosListo.push(procesosBloqueado.shift() ) ;  
            }

            
        //}
        
    }
}

function refreshFinalizado(argument) {
    var nuevoB = procesosEjecutando.pop();
    nuevoB.o.set("rangeX",[0,1300]);
    
    setTimeout(function(){
        nuevoB.o.leave();
    }, 5000, nuevoB);
    
}

var seguir  = true;
var cont2 = 0;

collie.Timer.repeat(function (e) {
        //tiempo1.text(e.count);
        console.log(e.count);

        if (procesosListo.length != 0 ) {
            refreshListos();
            if(procesosListo[0].o.get("x") == 355 ){
                console.log("procesos ejecutando");
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

                    refreshTiempo(e.count);
                }
            }
        }
        

        if(procesosBloqueado.length != 0 && terminoMov){

            refreshBloqueado();
        }
        
    }, 1000,{loop:0});
     
    
    collie.Renderer.addLayer(layer);
    collie.Renderer.load(document.getElementById("contenedor"));
    
    collie.Renderer.start();