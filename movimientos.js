 var layer = new collie.Layer({
        width : 1500,
        height : 500
    });
     

    var listo = new collie.DisplayObject({
        radius : 180,
        
        fillColor : 'pink',
        x : 30,
        y:10


    }).addTo(layer);

    var ejecutando = new collie.Circle({
        radius : 180,
        fillColor : 'pink',
        x : 500,
        y:10


    }).addTo(layer);

     var ejecutando = new collie.Circle({
        radius : 180,
        fillColor : 'pink',
        x : 950,
        y:10


    }).addTo(layer);

/*
    var listo = new collie.DisplayObject({
        width : 300,
        height : 300,
        //x : 10,
        //y : 10,
        backgroundColor : 'green'
    }).addTo(layer);
*/

    var arreglo = new Array(10);
    arreglo[0] = new collie.DisplayObject({
        width : 30,
        height : 15,
        y: 150,
        velocityX : 100,
        backgroundColor : 'black',
        rangeX : [0,280]
    });

     var evento3 = new collie.DisplayObject({
        width : 30,
        height : 15,
        y: 170,
        velocityX : 100,
        backgroundColor : 'white',
        rangeX : [0,50]
    }).addTo(layer);

     var evento4 = new collie.DisplayObject({
        width : 30,
        height : 15,
        y: 170,
        velocityX : 100,
        backgroundColor : 'white',
        rangeX : [0,90]
    }).addTo(layer);

          var evento4 = new collie.DisplayObject({
        width : 30,
        height : 15,
        y: 170,
        velocityX : 100,
        backgroundColor : 'white',
        rangeX : [0,130]
    }).addTo(layer);
         var evento4 = new collie.DisplayObject({
        width : 30,
        height : 15,
        y: 170,
        velocityX : 100,
        backgroundColor : 'white',
        rangeX : [0,170]
    }).addTo(layer);
              var evento4 = new collie.DisplayObject({
        width : 30,
        height : 15,
        y: 170,
        velocityX : 100,
        backgroundColor : 'white',
        rangeX : [0,210]
    }).addTo(layer);
                   var evento4 = new collie.DisplayObject({
        width : 30,
        height : 15,
        y: 170,
        velocityX : 100,
        backgroundColor : 'white',
        rangeX : [0,250]
    }).addTo(layer);
                        var evento4 = new collie.DisplayObject({
        width : 30,
        height : 15,
        y: 170,
        velocityX : 100,
        backgroundColor : 'white',
        rangeX : [0,290]
    }).addTo(layer);
                             var evento4 = new collie.DisplayObject({
        width : 30,
        height : 15,
        y: 170,
        velocityX : 100,
        backgroundColor : 'white',
        rangeX : [0,330]
    }).addTo(layer);

var oText = new collie.Text({
    width : 40, // 너비와 높이를 반드시 지정해야 합니다.
    height : 40,
    //x : 330,
    y : 170,
    backgroundColor:'red',
    velocityX: 100,
    fontSize: 10,
    rangeX : [0,330],
    fontColor : "#000000"
}).text("  Hola").addTo(layer);





    collie.Timer.repeat(function (e) {
        /*item.set({
            x : item.get("x") + 10,
            y : item.get("y") + 10
        });
        */
        console.log(e.count);
        if(e.count == 5){
            //collie.Renderer.stop();
            arreglo[0].addTo(layer);

        }

        if(e.count == 10){
            arreglo[0].set("rangeX", [280,500]);
        }


        if (e.count ==3) {
         var evento = new collie.DisplayObject({
        width : 30,
        height : 15,
        y: 150,
        velocityX : 100,
        backgroundColor : 'white',
        rangeX : [0,240]
    }).addTo(layer);   
        }
        console.log("Hola");
//        collie.Renderer.start();
    }, 1000,{loop:0});
     
    
    collie.Renderer.addLayer(layer);
    collie.Renderer.load(document.getElementById("container"));
    
    collie.Renderer.start();