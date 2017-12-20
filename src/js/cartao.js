// criaCartao é um módulo
// Module Pattern com closure

const criaCartao = (function(){
    "use strict"
    
    //var cria declara
    //= atribui
    let contador = 0
    
    //explodindo parametro
    // exporta a funcao
    return function ({conteudo, cor}) {   
        contador++

        // Joga o conteudo no article => Imperativa
        // const cartao = document.createElement('article')
        // cartao.classList.add('cartao')
        // cartao.setAttribute('id', 'cartao_4')

        // Declarativa 
        // const wrapperCartao = document.createElement('tpl')
        const cartao = $(`
        <article id="cartao_${contador}"  class="cartao" tabindex="0" ${cor ? 'style="background-color:' + cor + '"' : ""}>
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

        // focus entrando
        cartao.on('focusin', function() {
            cartao.addClass('cartao--focado')
        })
        // focus saindo
        cartao.on('focusout', function() {
            cartao.removeClass('cartao--focado')
        })
        
        // # Mudança de Cor
        // Delegação de Eventos (Delegate)
        // Reduzindo os eventos da página
        cartao.on('change', ".opcoesDoCartao-radioTipo", function(evento) {
            const novaCorDoCartao = evento.target.value
            cartao.css("background-color", novaCorDoCartao)
        })

        // Implementar atalhos 
        // keypress
        // keydown
        // keyup
        // input 
        cartao.on('keypress', '.opcoesDoCartao-opcao', function(event) {
            const elementoSelecionado = $(event.target)
            const isOpcaoDoCartao = elementoSelecionado
                                    .hasClass('opcoesDoCartao-opcao')
            console.log("Essa é a tecla " + event.key)
            if((event.keyCode == 13 || event.keyCode == 32)) {
                console.log('Se for espaço ou enter: ', event.key)
                console.log(elementoSelecionado)
                elementoSelecionado.click()
            }
        })


        cartao.on('click', '.opcoesDoCartao-remove', function (evento) { // Função Anonima
                cartao.addClass('cartao--tchau')
                // transition: .4s
                cartao.on('transitionend', function () {
                    cartao.remove()        
                })
                // cartao.on('transitionend', cartao.remove)
        })

        
        //mural.appendChild(cartao)
        $('.mural').prepend(cartao)

    }    
        // const opcoesDoCartao = document.
    
})()