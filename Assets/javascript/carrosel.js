
const imagens = document.getElementById("img");
const img = document.querySelectorAll(".img__fit");

var imgx = 0;

function carrosel(){
    imgx++;
    if(imgx > img.length -1){
        imgx = 0;
    }
    imagens.style.transform = `translateX(${-imgx * 200}px)`;
}

setInterval(carrosel, 1200);