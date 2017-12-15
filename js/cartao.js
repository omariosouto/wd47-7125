;(function() {
    const cartoes = document.querySelectorAll('.cartao')

    for(let i = 0; i < cartoes.length; i++) {
        const cartao = cartoes[i]
        // focus entrando
        cartao.addEventListener('focusin', function() {
            cartao.classList.add('cartao--focado')
        })
        // focus saindo
        cartao.addEventListener('focusout', function() {
            cartao.classList.remove('cartao--focado')
        })
        
        // # Mudança de Cor
        // Delegação de Eventos (Delegate)
        // Reduzindo os eventos da página
        cartao.addEventListener('change', function(evento) {
            const isRadioTipo = event.target
                                     .classList
                                     .contains('opcoesDoCartao-radioTipo')

            console.log(isRadioTipo)                                     
            if(isRadioTipo) {
                const novaCorDoCartao = evento.target.value
                cartao.style.backgroundColor = novaCorDoCartao
            }
            
        })

        // Implementar atalhos 
        // keypress
        // keydown
        // keyup
        // input 
        cartao.addEventListener('keypress', function(event) {
            const elementoSelecionado = event.target
            const isOpcaoDoCartao = elementoSelecionado
                                    .classList
                                    .contains('opcoesDoCartao-opcao')
            
            if(isOpcaoDoCartao && (event.key == " " || event.key == "Enter")) {
                console.log('Se for espaço ou enter: ', event.key)
                console.log(elementoSelecionado)
                elementoSelecionado.click()
            }
        })


        cartao.addEventListener('click', function (evento) { // Função Anonima
            const elementoClicado = evento.target
            const isBtnRemove = elementoClicado.classList.contains('opcoesDoCartao-remove')
            if(isBtnRemove) {
                cartao.classList.add('cartao--tchau')
                // transition: .4s
                cartao.addEventListener('transitionend', function () {
                    cartao.remove()        
                })
                // cartao.addEventListener('transitionend', cartao.remove)            
            }
        })







    }



})()