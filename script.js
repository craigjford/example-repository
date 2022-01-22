
document.getElementById("picshow").addEventListener("click"), function () {
    this.style.display = 'none';
    document.getElementById("pichide").style.display='block';
    document.getElementById("photo").style.display='block';
}

document.getElementById("pichide").addEventListener("click"), function () {
    this.style.display = 'none';
    document.getElementById("picshow").style.display='block';
    document.getElementById("photo").style.display='none';
}

const h2 = document.createElement("h2");
document.querySelector("body").appendChild(h2);
document.querySelector("h2").textContent = "This content added by JavaScript";


