 var layer = new collie.Layer({
        width : 1300,
        height : 315
    });
     
//CAJA LISTO
    var listo = new collie.DisplayObject({
        
        width: 360,
        height: 150,
        backgroundColor: '#8DFF33',
        x:30,
        y:10
    }).addTo(layer);
//CAJA EJECUTANDO
    var ejecutando = new collie.DisplayObject({
        
        width:360,
        height:150,
        backgroundColor:'pink',
        x : 500,
        y:10
    }).addTo(layer);
//CAJA FINALIZADO
    var finalizado = new collie.DisplayObject({
        width:360,
        height:150,
        backgroundColor:'#33FFC4',
        x : 950,
        y:10
    }).addTo(layer);

//CAJA BLOQUEADO
    var bloqueado = new collie.DisplayObject({
        width:360,
        height:150,
        backgroundColor:'#FFCE33',
        x : 500,
        y:180
    }).addTo(layer);


    var arreglo = new Array(10);

    arreglo[0] = new collie.Text({
        width : 35,
        height : 35,
        y: 95,
        velocityX : 100,
        backgroundColor : '#6B33FF',
        fontSize:30,
        rangeX:[0,330],
        rangeY:[0,270],
        fontColor: "black",
    }).text(" 1");

function createEv(id,time, recursos) {
    
}

    collie.Timer.repeat(function (e) {

        console.log(e.count);
        if(e.count == 5){
            arreglo[0].addTo(layer);

        }

        if(e.count == 10){
            arreglo[0].set("rangeX", [0,550]);
        }
        if (e.count ==15) {
            arreglo[0].set("velocityY",100);
        }


    }, 1000,{loop:0});
     
    
    collie.Renderer.addLayer(layer);
    collie.Renderer.load(document.getElementById("contenedor"));
    
    collie.Renderer.start();