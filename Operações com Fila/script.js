import { Queue } from "../linked-queue.js"

// Instancia a Fila baseada em lista encadeada
const fila = new Queue()

exibirFila()

function enfileirar(valor){
    fila.enqueue(valor)
}

function desenfileirar(){
    return fila.dequeue()
}

function primeiro(){
    if (estaVazia()) {
        return null
    } else {
        return fila.front()
    }
}

function tamanho(){
    return fila.size()
}

function estaVazia(){
    return fila.isEmpty()
}

function exibirFila(){
    const divMeuArray = document.getElementById("meuArray")
    divMeuArray.innerHTML = ""
    
    let atual = fila._front
    while (atual !== null) {
        divMeuArray.appendChild(criarDiv(atual.value))
        atual = atual.next
    }
}

function executarEnfileirar(){
    const elemento = document.getElementById('elemento').value
    if (elemento.trim() === "") return
    enfileirar(elemento)
    exibirFila()
}

function executarDesenfileirar(){
    desenfileirar()
    exibirFila()
}

function executarPrimeiro(){
    alert(primeiro())
    exibirFila()
}

function executarTamanho(){
    alert(tamanho())
    exibirFila()
}

function executarVazio(){
    alert(estaVazia())
    exibirFila()
}

function criarDiv(valor){ 
    const novaDiv = document.createElement("div")
    novaDiv.className = "min-w-10 bg-blue-300 shadow-md rounded m-4 p-1"

    const texto = document.createElement("h1")
    texto.className = "text-center"
    texto.innerText = valor

    novaDiv.appendChild(texto)
    return novaDiv
}

document.getElementById('enfileirar').addEventListener('click', executarEnfileirar)
document.getElementById('desenfileirar').addEventListener('click', executarDesenfileirar)
document.getElementById('primeiro').addEventListener('click', executarPrimeiro)
document.getElementById('tamanho').addEventListener('click', executarTamanho)
document.getElementById('vazio').addEventListener('click', executarVazio)