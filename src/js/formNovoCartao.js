;(function() {
const form = document.querySelector('.formNovoCartao')
const mural = document.querySelector('.mural')

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
        criaCartao({conteudo: conteudo})
    }

    // textArea.value = ''
})



form.classList.remove('no-js')
})()