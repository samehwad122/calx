let screen = document.getElementById("screen")
let nom = document.getElementById("nom")

function claer(){
screen.textContent = " ";
}
function back(x){

screen.innerText += x
}
function ecwal(){
    screen.innerText = eval(screen.innerText)

}

function dleteone(){
screen.innerText=screen.innerText.slice(0 , -1)
}
