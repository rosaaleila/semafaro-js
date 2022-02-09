'use strict'

// bug nos botoes. timeout nao para se nao clicar no botao parar.

const semafaro = document.getElementById('semafaro')
const vermelho = document.getElementById('vermelho')
const amarelo = document.getElementById('amarelo')
const verde = document.getElementById('verde')
const automatico = document.getElementById('automatico')
let idAutomatico = null
let idTrocarVermelho = null
let idTrocarVerde = null
let idTrocarAmarelo = null

const mudarVermelho = () => semafaro.src = './imgs/vermelho.png'
const mudarAmarelo = () => semafaro.src = './imgs/amarelo.png'
const mudarVerde = () => semafaro.src = './imgs/verde.png'

const trocarCores = () => {
    setTimeout(mudarVermelho, 1000)
    setTimeout(mudarAmarelo, 2000)
    setTimeout(mudarVerde, 3000)
}

const trocarAutomatico = () => {
    if(idAutomatico == null) {
        idAutomatico = setInterval(trocarCores, 4000)
        automatico.textContent = "Parar"
    } else {
        clearInterval(idAutomatico)
        clearTimeout(idTrocarVermelho)
        clearTimeout(idTrocarVerde)
        clearTimeout(idTrocarAmarelo)
        automatico.textContent = "Automatico"
        idAutomatico = null
        idTrocarAmarelo = null
        idTrocarVerde = null
        idTrocarVermelho = null
    }
}

vermelho.addEventListener('click', mudarVermelho)
amarelo.addEventListener('click', mudarAmarelo)
verde.addEventListener('click', mudarVerde)
automatico.addEventListener('click', trocarAutomatico)