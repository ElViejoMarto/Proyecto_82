canvas = document.getElementById("miCanvas");
ctx = canvas.getContext("2d");
color = "#D95EF8"
var mouseEvent = "empty";
var last_position_of_x, last_position_of_y;
var current_position_of_x,current_position_of_y;


canvas.addEventListener("mousedown", mi_mouseAbajo);
canvas.addEventListener("mouseup", mi_mouseArriba);
canvas.addEventListener("mouseleave", mi_mouseLeave);
canvas.addEventListener("mousemove", mi_mousemove);

function mi_mouseAbajo(e) {
    color = document.getElementById("color").value;
    g = document.getElementById("gruesor").value;
    mouse_x = e.clientX - canvas.offsetLeft;
    mouse_y = e.clientY - canvas.offsetTop;
    // dibujaCirculo(mouse_x, mouse_y);
    console.log(mouse_x, mouse_y)
    mouseEvent = "mousedown";

}

function mi_mouseArriba(e) {
    mouseEvent = "mouseup";
    last_position_of_x = "empty";
    last_position_of_x = "empty";

}

function mi_mouseLeave(e) {
    mouseEvent = "mouseleave";

}

function mi_mousemove(e) {
  //  mouseEvent = "mousemove";
  current_position_of_x = e.clientX - canvas.offsetLeft;
  current_position_of_y = e.clientY - canvas.offsetTop;

  if(mouseEvent=="mousedown"){
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = g;
    ctx.arc(current_position_of_x,current_position_of_y, 40, 0, 2 * Math.PI)
    ctx.stroke();

    last_position_of_x = current_position_of_x;
    last_position_of_y = current_position_of_y;
  }
}

function limpiarArea() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    last_position_of_x = "empty";
    last_position_of_y = "empty";
}
