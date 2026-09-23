let text = document.getElementById("text");

let fontFamily = document.getElementById("fontFamily");
let fontSize = document.getElementById("fontSize");

let bold = document.getElementById("bold");
let italic = document.getElementById("italic");
let underline = document.getElementById("underline");


fontFamily.onchange = function () {
    text.style.fontFamily = fontFamily.value;
};


fontSize.onchange = function () {
    text.style.fontSize = fontSize.value;
};


bold.onchange = function () {

    if (bold.checked) {
        text.style.fontWeight = "bold";
    } else {
        text.style.fontWeight = "normal";
    }

};

italic.onchange = function () {

    if (italic.checked) {
        text.style.fontStyle = "italic";
    } else {
        text.style.fontStyle = "normal";
    }

};

underline.onchange = function () {

    if (underline.checked) {
        text.style.textDecoration = "underline";
    } else {
        text.style.textDecoration = "none";
    }

};