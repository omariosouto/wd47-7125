
// btn
const btn = document.querySelector('#btnMudaLayout')

function mudaTexto() {
    if(btn.textContent == 'Blocos') {
        btn.textContent = 'Linhas';
    } else {
        btn.textContent = 'Blocos';
    }
}

// onclick
//btn.onclick = funcaoDaGaleraQueChamaGeral
btn.addEventListener('click', mudaTexto)



const mural = document.querySelector('.mural')
// Pegar a class mural--linha
// Adiciona Ela no: section.mural
function mudaLayout() {
    // if(!mural.classList.contains('mural--linha')) {
    //     mural.classList.add('mural--linha')
    // } else {
    //     mural.classList.remove('mural--linha')
    // }
    mural.classList.toggle('mural--linha')
}
btn.addEventListener('click', mudaLayout)

// Tira o no-js liberando a funcionalidade
btn.classList.remove('no-js')