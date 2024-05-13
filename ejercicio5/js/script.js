//Como el script está abajo, se seguro que se ha cargado.
let cuadro = document.getElementById("cuadro");
let lienzo = document.getElementById("lienzo");

let color1 = document.getElementById("color1");
let color2 = document.getElementById("color2");
let color3 = document.getElementById("color3");

let colorSeleccionado = color1; //Seleccion inicial

let colores = [color1,color2,color3]

colores.forEach((color)=>{
    color.addEventListener("click",(click)=>{

        colorSeleccionado = color;

    })
})

lienzo.addEventListener("mousemove",(mouseEvent)=>{

    let x = mouseEvent.x;
    let y = mouseEvent.y

    cuadro.style.left = x + "px";
    cuadro.style.top = y + "px";

    agregarnuevoCuadro(x,y);

});

function agregarnuevoCuadro(x,y){

    let nuevoCuadro = document.createElement("div");
    
    nuevoCuadro.className = colorSeleccionado.id;
    nuevoCuadro.style.left = x + "px";
    nuevoCuadro.style.top = y + "px";

    document.body.appendChild(nuevoCuadro);
}

