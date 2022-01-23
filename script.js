
const h2 = document.createElement("h2");
document.querySelector("body").appendChild(h2);
document.querySelector("h2").textContent = "This content added by JavaScript";

var x, y;
function pos(dx,dy) {
    if (!document.getElementById) return;
    x += 30*dx;
    y += 30*dy;
    obj = document.getElementById("square");
    obj.style.top = y + "px";
    obj.style.left = x + "px";
}





