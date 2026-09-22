function acessar(){

    let usuario = document.getElementById("usuario").value
    let senha = Number(document.getElementById("senha").value)

    let Acesso

    if (usuario === "login" || senha === 1234) {
        Acesso = "valido"
    } else {
        Acesso = "invalido"
    }

    document.getElementById("acesso").textContent =
    "tentativa de acesso: " + Acesso
}
