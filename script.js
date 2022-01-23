
const h2 = document.createElement("h2");
document.querySelector("body").appendChild(h2);
document.querySelector("h2").textContent = "This content added by JavaScript";

var x=0, y=0;
function pos(dx,dy) {
    if (!document.getElementById) return;
    console.log("before x = ${x} and ${y} and dx = ${dx} and dy = ${dy}")
    x += 30*dx;
    y += 30*dy;
    console.log("after x = ${x} and ${y} and dx = ${dx} and dy = ${dy}")
    obj = document.getElementById("square");
    obj.style.top = y + "px";
    obj.style.left = x + "px";
}





