const html = document.querySelector('html');
const focoBt = document.querySelector('.app__card-button--foco');
const curtoBt = document.querySelector('.app__card-button--curto');
const longoBt = document.querySelector('.app__card-button--longo');
const banner = document.querySelector('.app__image');
const titulo = document.querySelector('.app__title');
const botoes = document.querySelectorAll('.app__card-button');
const iniciarOuPausarBt = document.querySelector('#start-pause span')
const tempoNaTela = document.querySelector('#timer')

const startPauseBt = document.querySelector('#start-pause');
let tempoDecorridoEmSegundos = 1500;
let intervaloId = null;

const musicaFocoInput = document.querySelector('#alternar-musica')
const musica = new Audio('/sons/luna-rise-part-one.mp3')
const audioPlay = new Audio ('/sons/play.wav')
const audioPause = new Audio ('/sons/pause.mp3')
const audioFinalizado = new Audio ('/sons/beep.mp3')
musica.loop = true


musicaFocoInput.addEventListener('change', () => {
    if (musica.paused) {
        musica.play()
    } else {
        musica.pause()
    }
})

focoBt.addEventListener('click', () => {
    tempoDecorridoEmSegundos = 1500
    alterarContexto('foco')
    focoBt.classList.add('active')
})

curtoBt.addEventListener('click', () => {
    tempoDecorridoEmSegundos = 300
    alterarContexto('descanso-curto')
    curtoBt.classList.add('active')
})

longoBt.addEventListener('click', () => {
    tempoDecorridoEmSegundos = 900
    alterarContexto('descanso-longo')
    longoBt.classList.add('active')

})



//Forma mais rápida de fazer usando função para evitar repetição de código
function alterarContexto(contexto) {
    mostrarTempo()
    botoes.forEach(function (contexto) {
        contexto.classList.remove('active')
    })

    html.setAttribute('data-contexto', contexto)
    banner.setAttribute('src', `./imagens/${contexto}.png`)
    switch (contexto) {
        case 'foco':
            titulo.innerHTML =
                `Otimize sua produtividade<br>
                <strong class="app__title-strong">mergulhe no que importa.</strong>`

            break;
        case 'descanso-curto':
            titulo.innerHTML =
                `Que tal uma respirada? <br>
                <strong class="app__title-strong">Faça uma pausa curta.</strong>`
            break;
        case 'descanso-longo':
            titulo.innerHTML =
                `Hora de voltar à superfície<br>
                <strong class="app__title-strong">Faça uma pausa longa.</strong>`
        default:
            break;

    }
}

// OUTRA FORMA DE FAZER REPETINDO O MESMO CÓDIGO PARA CADA VÁRIAVEL
/*focoBt.addEventListener('click', () => {

    html.setAttribute('data-contexto', 'foco')
    banner.setAttribute('src','./imagens/foco.png' )
})

curtoBt.addEventListener('click', () => {

    html.setAttribute('data-contexto', 'descanso-curto')
    banner.setAttribute('src','./imagens/descanso-curto.png' )

})

longoBt.addEventListener('click', () => {

    html.setAttribute('data-contexto', 'descanso-longo')
    banner.setAttribute('src','./imagens/descanso-longo.png' )

})*/

const contagemRegressiva = () => {
    if(tempoDecorridoEmSegundos <= 0) {
        audioFinalizado.play()
        zerar()
        alert("tempo finalizado")
        return
    }

    tempoDecorridoEmSegundos -= 1
    mostrarTempo()

}

startPauseBt.addEventListener ('click', iniciarOuPausar)


function iniciarOuPausar() {
    if(intervaloId){
        audioPause.play()
        zerar()
        return
    }
    audioPlay.play()
    intervaloId = setInterval(contagemRegressiva, 1000)
    iniciarOuPausarBt.textContent = "Pausar"
}

function zerar() {
    clearInterval (intervaloId)
    iniciarOuPausarBt.textContent = "Começar"
    intervaloId = null 
}

function mostrarTempo(){
    const tempo = new Date(tempoDecorridoEmSegundos * 1000)
    const tempoFormatado = tempo.toLocaleTimeString('pt-br', {minute: '2-digit', second:'2-digit'})
    tempoNaTela.innerHTML = `${tempoFormatado}`
}

mostrarTempo()