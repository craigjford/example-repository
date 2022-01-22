
const h2 = document.createElement("h2");
document.querySelector("body").appendChild(h2);
document.querySelector("h2").textContent = "This content added by JavaScript";

function mousestatus(e) {
    if (!e) e = window.event;
    btn = e.button;
    if (btn === 0) {
        whichone = "Left";
        break;
    }  else if (btn === 1) {
        whichone = "Middle";
        break;
    }  else if (btn === 2) {
        whichone = "Right";
        break;
    }  else {
        whichone = "UNKNOWN"
    }

    message = e.type + " : " + whichone + "<br>";
    document.getElementById('testarea').innerHTML += message;
    e.preventDefault();
}
obj = document.getElementById('testlink');

obj.addEventListener("click", mousestatus);
obj.addEventListener("mousedown", mousestatus);
obj.addEventListener("mouseup", mousestatus);
obj.addEventListener("dblclick", mousestatus);




