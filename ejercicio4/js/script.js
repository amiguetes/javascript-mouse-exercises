//Como el script está abajo, se seguro que se ha cargado.
let cuadro = document.getElementById("cuadro");

addEventListener("mousemove",(mouseEvent)=>{

    let x = mouseEvent.x;
    let y = mouseEvent.y

    cuadro.style.left = x + "px";
    cuadro.style.top = y + "px";

    agregarnuevoCuadro(x,y);

});

function agregarnuevoCuadro(x,y){

    let nuevoCuadro = document.createElement("div");
    
    nuevoCuadro.className = "cuadro";
    nuevoCuadro.style.left = x + "px";
    nuevoCuadro.style.top = y + "px";

    document.body.appendChild(nuevoCuadro);
}