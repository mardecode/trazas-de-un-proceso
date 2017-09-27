 var layer = new collie.Layer({
        width : 1300,
        height : 300
    });
     
//CAJA LISTO
    var listo = new collie.DisplayObject({
        
        width: 360,
        height: 100,
        backgroundColor: '#8DFF33',
        x:30,
        y:10
    }).addTo(layer);
//CAJA EJECUTANDO
    var ejecutando = new collie.DisplayObject({
        
        width:360,
        height:100,
        backgroundColor:'pink',
        x : 500,
        y:10
    }).addTo(layer);
//CAJA FINALIZADO
    var finalizado = new collie.DisplayObject({
        width:360,
        height:100,
        backgroundColor:'#33FFC4',
        x : 950,
        y:10
    }).addTo(layer);

//CAJA BLOQUEADO
    var bloqueado = new collie.DisplayObject({
        width:360,
        height:100,
        backgroundColor:'#FFCE33',
        x : 500,
        y:180
    }).addTo(layer);


var ejemplo = new collie.Text({
        width : 35,
        height : 35,
        y: 95,
        velocityX : 200,
        backgroundColor : '#6B33FF',
        fontSize:30,
        rangeX:[0,800],
        rangeY:[0,270],
        fontColor: "black",
    }).text(" 1");


var ejemplo2 = new collie.Text({
        width : 35,
        height : 35,
        y: 95,
        velocityX : 200,
        backgroundColor : '#6B33FF',
        fontSize:30,
        rangeX:[0,800],
        rangeY:[0,270],
        fontColor: "black",
    }).text(" 2");

    var arreglo = new Array(1);
    var arreglo2 = new Array();

    arreglo[0] = new collie.Text({
        width : 35,
        height : 35,
        y: 55,
        velocityX : 100,
        backgroundColor : '#6B33FF',
        fontSize:30,
        rangeX:[0,550],
        rangeY:[0,270],
        fontColor: "black",
    }).text(" 1");

    arreglo.push(ejemplo);
/*
function createEv(id,time, recursos) {
    nuevo = new collie.Text({
        width : 35,
        height : 35,
        y: 95,
        velocityX : 100,
        backgroundColor : '#6B33FF',
        fontSize:30,
        rangeX:[0,330],
        rangeY:[0,270],
        fontColor: "black",
    }).text(id);

    arreglo.push(nuevo);
}
*/
    collie.Timer.repeat(function (e) {

        console.log(e.count);
//        console.log(app.procesos);

        console.log(arreglo);
        if(e.count == 1){
            arreglo[0].addTo(layer);
        }
        
        if (e.count ==5) {
            //arreglo[0].set("velocityY",100);
            arreglo[1].addTo(layer);
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
        if (e.count == 20 ) {
            //collie.Renderer.stop();
            ejemplo = ejemplo2;
            ejemplo.addTo(layer);
        }




    }, 1000,{loop:0});
     
    
    collie.Renderer.addLayer(layer);
    collie.Renderer.load(document.getElementById("contenedor"));
    
    collie.Renderer.start();