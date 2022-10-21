var mauseEvent="empty";
var last_position_of_x, last_position_of_y;


canvas= document.getElementById("my_canvas");
ctx=canvas.getContext("2d");
color="yellow";
width_of_line=2;
canvas.addEventListener("mousedown", my_mosedown);
function my_mosedown(e) { 
    color = document.getElementById("color").value; 
    width_of_line = document.getElementById("width_of_line").value; 
    mouseEvent = "mouseDown"; 
}
canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e){
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mouseDown") {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;
    ctx.moveTo(last_position_of_x, last_position_of_y);
    ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
    ctx.stroke();
    }

    last_position_of_x = current_position_of_mouse_x; 
    last_position_of_y = current_position_of_mouse_y;
}
canvas.addEventListener("mouseup", my_mouseup)
function my_mouseup(e){
    mauseEvent="mouseup"
}
canvas.addEventListener("mouseleave", my_mouseleave)
function my_mouseleave(e){
    mauseEvent="mouseleave"
}

