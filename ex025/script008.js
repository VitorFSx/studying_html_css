

function somar() {

    let n1 = document.querySelector("#in1")
    let n2 = document.querySelector("#in2")
    let s = document.querySelector("#isoma")

    let num1 = Number(n1.value)
    let num2 = Number(n2.value)
    let som = num1 + num2
    isoma.innerHTML = som

}

function limpar() {
    isoma.innerHTML = 0
}

