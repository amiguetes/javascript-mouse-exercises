//Como el script está abajo, se seguro que se ha cargado.
let X = document.getElementById("X");
let Y = document.getElementById("Y");

addEventListener("mousemove",(mouseEvent)=>{

    X.innerText = mouseEvent.x;
    Y.innerText = mouseEvent.y

});