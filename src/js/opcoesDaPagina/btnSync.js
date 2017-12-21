;(function(){
    "use strict"
    const btnSync = $("#btnSync")

    btnSync.click(function(){

        btnSync.addClass("botaoSync--esperando")
        btnSync.removeClass("botaoSync--sincronizado")
        btnSync.removeClass("botaoSync--deuRuim")

        // const mural = {
        //     usuario: "artur.adam@caelum.com.br"
        //     ,cartoes: [
        //         {
        //             conteudo: "ex"
        //             ,cor: "#f00"
        //         }
        //     ]
        // }

        NodeList
        const mural = {
            usuario: prompt("Digite seu usuário")
            ,cartoes: Array
                .from(document.querySelectorAll(".cartao"))
                .map(function(cartaoDOM){
                    return {
                        conteudo: cartaoDOM.querySelector(".cartao-conteudo").textContent
                        , cor: cartaoDOM.style.background
                    }
                })
        }

        const xhr = new XMLHttpRequest()
        xhr.open("POST", "http://ceep.herokuapp.com/cartoes/salvar")
        xhr.setRequestHeader("Content-Type", "application/json")

        // xhr.timeout = 1000

        xhr.send(JSON.stringify(mural))

        xhr.addEventListener("load", function(){

            xhr.response
            console.log(xhr.response)

            btnSync.removeClass("botaoSync--esperando")
            btnSync.addClass("botaoSync--sincronizado")
        })


        xhr.addEventListener("error", function(){
            btnSync.removeClass("botaoSync--esperando")
            btnSync.addClass("botaoSync--deuRuim")
        })


        // xhr.addEventListener("readystatechange", function(){

        //     btnSync.removeClass("botaoSync--esperando")
        //     btnSync.addClass("botaoSync--deuRuim")
        // })
    })

    btnSync.removeClass("no-js")
})()