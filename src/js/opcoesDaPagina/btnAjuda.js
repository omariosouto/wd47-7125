// IIFE eh // gambiarra pra criar escopo
;(function (){
    "use srtict"

    const btnAjuda = $('#btnAjuda')
    // btnAjuda.attr("id", "")
    
    const cartoes = document.querySelectorAll(".cartao")

    btnAjuda.click(function(){
        // Array ou lista

        // atributo: valor
        // chave: valor
        // propriedade: valor
        // def: valor

        // W3C
        // puxadinho do DOM
        //XMLHttpRequest // XHR
        // function XMLHttpRequest () {

        // }

        const xhr = new XMLHttpRequest()
        xhr.open("GET", "http://ceep.herokuapp.com/cartoes/instrucoes")
        
        //garante que pediu pro servidor
        
        // callback
        xhr.addEventListener("load", function(){
            const objetoResposta =  JSON.parse(xhr.response)
            
            const lista = objetoResposta.instrucoes             
            
            lista.forEach(function(instrucao){        
                criaCartao(instrucao)
            })
        })

        xhr.addEventListener("error", function(event){
            alert(xhr.status === 0)
        })

        xhr.send()

        // foreach(instrucao : lista) {
        //     alert(instrucao)            
        // }
        
        // for(let i = 0; i < lista.length; i++){
        //     const instrucao = lista[i]
        //     alert(instrucao)
        // }

    })
    
    btnAjuda.removeClass("no-js")
})()




