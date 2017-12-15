;(function() {
const form = document.querySelector('.formNovoCartao')
const mural = document.querySelector('.mural')
let contador = document.querySelectorAll('.cartao').length
form.addEventListener('submit', function(evento) {
    //                         Evita que o comportamento padrão aconteça
    evento.preventDefault()
    //console.log(evento)

    const textArea = document.querySelector('.formNovoCartao-conteudo')
    const conteudo = textArea.value.trim()
    const isTextAreaVazio = conteudo.length === 0

    // Preciso do conteudo
    if(isTextAreaVazio) {
        // <div class="formNovoCartao-msg></div>
        const msgErro = document.createElement('div') // Criei elemento
        msgErro.classList.add('formNovoCartao-msg') // Adicionei uma classe
        msgErro.textContent = 'Não digite vários nada'

        const btnSalvar = form.querySelector('formNovoCartao-salvar')
        form.insertBefore(msgErro, btnSalvar)

        // Mata ele!!${contador}!!!
        msgErro.addEventListener('animationend', function() {
            msgErro.remove()
        })
    } else {
        contador++
        console.log(conteudo)

        // Joga o conteudo no article => Imperativa
        // const cartao = document.createElement('article')
        // cartao.classList.add('cartao')
        // cartao.setAttribute('id', 'cartao_4')

        // Declarativa 
        // const wrapperCartao = document.createElement('tpl')
        const cartao = $(`
        <article id="cartao_${contador}"  class="cartao" tabindex="0">
            <div class="opcoesDoCartao">
                <button class="opcoesDoCartao-remove opcoesDoCartao-opcao" tabindex="0">
                <svg><use xlink:href="#iconeRemover"></use></svg>
                </button>
        
                <input type="radio" name="corDoCartao${contador}" value="#EBEF40" id="corPadrão-cartao${contador}" class="opcoesDoCartao-radioTipo" checked>
                <label for="corPadrão-cartao${contador}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #EBEF40;" tabindex="0">
                Padrão
                </label>
        
                <input type="radio" name="corDoCartao${contador}" value="#F05450" id="corImportante-cartao${contador}" class="opcoesDoCartao-radioTipo">
                <label for="corImportante-cartao${contador}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #F05450;" tabindex="0">
                Importante
                </label>
        
                <input type="radio" name="corDoCartao${contador}" value="#92C4EC" id="corTarefa-cartao${contador}" class="opcoesDoCartao-radioTipo">
                <label for="corTarefa-cartao${contador}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #92C4EC;" tabindex="0">
                Tarefa
                </label>
        
                <input type="radio" name="corDoCartao${contador}" value="#76EF40" id="corInspiração-cartao${contador}" class="opcoesDoCartao-radioTipo">
                <label for="corInspiração-cartao${contador}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #76EF40;" tabindex="0">
                Inspiração
                </label>
            </div>
            <p class="cartao-conteudo" contenteditable tabindex="0">${conteudo}</p>
        </article>    
        `)

        //const cartao = wrapperCartao.querySelector('.cartao')

        //mural.appendChild(cartao)
        $('.mural').prepend(cartao)
        
        // const opcoesDoCartao = document.

    }

    // textArea.value = ''
})



form.classList.remove('no-js')
})()