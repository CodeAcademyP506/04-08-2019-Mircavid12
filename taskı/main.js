const mycanvas = document.getElementById("mycanvas");
var ctx = mycanvas.getContext("2d");
ctx.moveTo(0,0);
ctx.lineTo(390,0);
ctx.lineTo(390,490);
ctx.moveTo(0,490);
ctx.lineTo(0,0);
ctx.stroke();

var myshape = document.getElementById("parallax");
var shape1 = document.getElementById("shape1");


myshape.addEventListener("mousemove",function(){
    shape1.style.transform = "translate3d(" + xPos + ", " + yPos + "px, 0)";
})



