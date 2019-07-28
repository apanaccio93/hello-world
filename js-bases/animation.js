var t = setInterval(move, 500);

// starting pos
var pos = 0;
// our box element
var box = document.getElementById("box");

function move(){
    if (pos > 150){
        clearInterval(t);
    } else {
        pos +=1;
        box.style.left = pos+"px";
    }
}