document.querySelector("button").addEventListener("click" , function () {
    let cantidad = document.querySelector(".cantidad").value
    cantidadTotal = document.querySelector(".cantidadTotal")
    cantidadTotal.innerHTML = cantidad

    let precio = document.querySelector(".precio").textContent
    valorTotal = precio * cantidad
    let total = document.querySelector(".total")
    total.innerHTML = valorTotal

    let color = document.querySelector("select").value
    document.querySelector(".colorFinal").style.backgroundColor = color
})

