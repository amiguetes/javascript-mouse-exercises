//Como el script está abajo, se seguro que se ha cargado.
let cuadro = document.getElementById("cuadro");

addEventListener("mousemove",(mouseEvent)=>{

    let x = mouseEvent.x;
    let y = mouseEvent.y

    cuadro.style.left = x + "px";
    cuadro.style.top = y + "px";

});