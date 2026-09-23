let box = document.getElementById("image-box");

let circleBtn = document.getElementById("circle");
let squareBtn = document.getElementById("square");


circleBtn.onclick = function () {
    box.style.borderRadius = "50%";
};


squareBtn.onclick = function () {
    box.style.borderRadius = "0";
};
