const containerBordaSimples = document.querySelector('#container__plano___simples')

const checkBordaSimples = document.querySelector('#check__plano___simples')


const containerBordaCompleto = document.querySelector('#container__plano___completo')

const checkBordaCompleto = document.querySelector('#check__plano___completo')


function mudaBordaContainerSimples() {
    containerBordaSimples.style.border = ` 1px solid #FC1482 `
    containerBordaCompleto.style.border = ` 1px solid #E3E5E6 `
}


function mudaBordaContainerCompleto() {
    containerBordaCompleto.style.border = ` 1px solid #FC1482 `
    containerBordaSimples.style.border = ` 1px solid #E3E5E6 `
}

window.onload = () => {
    if (checkBordaSimples.checked) {
        containerBordaSimples.style.border = ` 1px solid #FC1482 `
    }
    if (checkBordaCompleto.checked) {
        containerBordaCompleto.style.border = ` 1px solid #FC1482 `
    }

}