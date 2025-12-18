const html = document.querySelector('html');
const focoBt = document.querySelector('.app__card-button--foco');
const curtoBt = document.querySelector('.app__card-button--curto');
const longoBt = document.querySelector('.app__card-button--longo');
const banner = document.querySelector('.app__image');



//Forma mais rápida de fazer usando função para evitar repetição de código
function alterarContexto(contexto){
    html.setAttribute('data-contexto', contexto)
    banner.setAttribute('src', `./imagens/${contexto}.png`)

}

focoBt.addEventListener('click', () => {
    alterarContexto('foco')
})

curtoBt.addEventListener('click', () => {
    alterarContexto('descanso-curto')
})

longoBt.addEventListener('click', () => {
    alterarContexto('descanso-longo')

})


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

