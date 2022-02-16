
// funcional. apenas com um pequeno problema onde o
// programa leva 4 segundos para iniciar o automatico. 

'use strict'

// criacao de variaveis e constantes
const semafaro = document.getElementById('semafaro')
const vermelho = document.getElementById('vermelho')
const amarelo = document.getElementById('amarelo')
const verde = document.getElementById('verde')
const automatico = document.getElementById('automatico')
let idAutomatico = null
let idTrocarVermelho = null
let idTrocarVerde = null
let idTrocarAmarelo = null

// funcoes para mudar de cor
const mudarVermelho = () =>  semafaro.src = './imgs/vermelho.png'
const mudarAmarelo = () => semafaro.src = './imgs/amarelo.png'
const mudarVerde = () => semafaro.src = './imgs/verde.png'

// funcao para iniciar o interval
const trocarAutomatico = () => {
    if (idAutomatico == null) {
        idAutomatico = setInterval(trocarCores, 4000)
        automatico.textContent = "Parar"
    } else {
        // caso interval ja exista e clicarmos novamente, o limpamos
        limparIntervalos()
    }
}

//funcao para chamar a funcao de criacao de timeouts
const trocarCores = () => verificarOrdem()

// funcao criando timeouts para mudar a cor
const verificarOrdem = () => {
    if (semafaro.src.includes('desligado') || semafaro.src.includes('verde')) {
        idTrocarVermelho = setTimeout(mudarVermelho, 1000)
        idTrocarAmarelo = setTimeout(mudarAmarelo, 2000)
        idTrocarVerde = setTimeout(mudarVerde, 3000)
    } else if (semafaro.src.includes('amarelo')) {
        idTrocarVerde = setTimeout(mudarVerde, 1000)
        idTrocarAmarelo = setTimeout(mudarAmarelo, 3000)
        idTrocarVermelho = setTimeout(mudarVermelho, 2000)
    } else if (semafaro.src.includes('vermelho')) {
        idTrocarAmarelo = setTimeout(mudarAmarelo, 1000)
        idTrocarVermelho = setTimeout(mudarVermelho, 3000)
        idTrocarVerde = setTimeout(mudarVerde, 2000)
    } 
}

// funcao para limpar os timeouts e intervals
const limparIntervalos = () => {
    automatico.textContent = "Automatico"
    clearInterval(idAutomatico)
    clearTimeout(idTrocarVermelho)
    clearTimeout(idTrocarVerde)
    clearTimeout(idTrocarAmarelo)
    idAutomatico = null
    idTrocarAmarelo = null
    idTrocarVerde = null
    idTrocarVermelho = null
}

vermelho.addEventListener('click', mudarVermelho)
amarelo.addEventListener('click', mudarAmarelo)
verde.addEventListener('click', mudarVerde)
automatico.addEventListener('click', trocarAutomatico)

vermelho.addEventListener('click', limparIntervalos)
amarelo.addEventListener('click', limparIntervalos)
verde.addEventListener('click', limparIntervalos)
