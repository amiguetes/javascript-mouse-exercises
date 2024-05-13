//Como el script está abajo, se seguro que se ha cargado.
let cuadro = document.getElementById("cuadro");
let X = document.getElementById("x");
let Y = document.getElementById("y");

addEventListener("mousemove",(mouseEvent)=>{

    
    let x = mouseEvent.x;
    let y = mouseEvent.y

    cuadro.style.left = x + "px";
    cuadro.style.top = y + "px";

    X.innerText = x;
    Y.innerText = y;

});