function y() {
    alert("<3");
}
let width = window.innerWidth;
let height = window.innerHeight;
let not = document.getElementById("no");
function n() {
    let a = parseInt(Math.random() * width);
    let b = parseInt(Math.random() * height);
    not.style.left = a + "px";
    not.style.top = b + "px";
}