let easterEggBtn = document.getElementById("easter-egg-button");
let paragraphs = document.querySelectorAll("p");

easterEggBtn.addEventListener("click", enhanced3D);

function enhanced3D() {
    paragraphs.forEach(function(paragraph) {
        paragraph.style.textShadow = "-4px 4px green, 4px 0px red, -4px 0px green, 4px -4px red";
    });
}