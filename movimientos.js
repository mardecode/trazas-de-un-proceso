 var layer = new collie.Layer({
        width : 1300,
        height : 200
    });
     
//CAJA LISTO
    var listo = new collie.DisplayObject({
        
        width: 360,
        height: 150,
        backgroundColor: '#8DFF33',
        x:30,
        y:20
    }).addTo(layer);
//CAJA EJECUTANDO
    var ejecutando = new collie.DisplayObject({
        
        width:360,
        height:150,
        backgroundColor:'pink',
        x : 500,
        y:20
    }).addTo(layer);
//CAJA FINALIZADO
    var finalizado = new collie.DisplayObject({
        width:360,
        height:150,
        backgroundColor:'#33FFC4',
        x : 950,
        y:20
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
        fontColor: "black",
    }).text(" 1").addTo(layer);

    collie.Timer.repeat(function (e) {
        console.log(e.count);
        if(e.count == 5){
            //collie.Renderer.stop();
            arreglo[0].addTo(layer);

        }

        if(e.count == 10){
            arreglo[0].set("rangeX", [280,500]);
        }

//        collie.Renderer.start();
    }, 1000,{loop:0});
     
    
    collie.Renderer.addLayer(layer);
    collie.Renderer.load(document.getElementById("contenedor"));
    
    collie.Renderer.start();