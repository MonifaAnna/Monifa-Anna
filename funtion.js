// ----------carsor
const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove",(e) => {
    let x = e.pageX;
    let y = e.pageY;

    cursor.style.top = y + "px"
    cursor.style.left = x + "px"
    cursor.style.display = "block";

    function mouseStopped(){
        cursor.style.display ="none";
    }
    clearTimeout(timeout);
    timeout = setTimeout(mouseStopped,1000);
})
// -------------preloader------------
var loader = document.getElementById("preloader")

window.addEventListener("load",function(){
    loader.style.display = "none"
})