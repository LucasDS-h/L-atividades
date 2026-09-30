const ventilador = document.getElementById("ventilador")
const boton = document.getElementById("boton")
const Status = document.getElementById("Status")

boton.addEventListener("click", function(){
    ventilador.classList.toggle("ligado")

    if (ventilador.classList.contains("ligado")){
        boton.textContent = "desligar"
        Status.textContent = 'ligado'
    } else {
        boton.textContent = "ligar"
        Status.textContent = "desligado"
    }
})