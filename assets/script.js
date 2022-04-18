let elemento = document.querySelector("button");
let elementoH3 = document.querySelector("#humor");
let elementoImg = document.querySelector("#cry");

function random(){
if(elemento.value == "0"){
elementoH3.innerText= "Alegre"
elementoImg.setAttribute("src","./assets/img/alegre.jpg")
elemento.value = "1"
} else if(elemento.value == "1"){
    elementoH3.innerText= "Raiva"
    elementoImg.setAttribute("src","./assets/img/raiva.jpg")
    elemento.value = "2"
} else if(elemento.value == "2"){
    elementoH3.innerText= "Triste"
    elementoImg.setAttribute("src","./assets/img/cry.jpg")
    elemento.value = "0"
}
}