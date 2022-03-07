export class PlanoAssistencial {
    constructor() {
        /*------------------------DADOS---------------------*/
        this.secaoDados = document.querySelector('#secao__dados')

        this.botaoAvancaDados = document.querySelector('#botao__avancar___dados')

        this.progressoDados = document.querySelector('.primeiro__progresso')

        this.numeroSegundoProgresso = document.querySelector('#numero-segundo__progresso')
        this.nomeSegundoProgresso = document.querySelector('#nome-segundo__progresso')

        this.botaoAvancaDados.addEventListener('click', this.avancaPassosDados.bind(this))

        /*---------------------PLANOS-PRECOS-----------------*/
        this.secaoPlanos = document.querySelector('#secao__planos-valores')

        this.botaoRegrideDados = document.querySelector('.botao__regredir___passos-planos')

        this.botaoRegrideDados.addEventListener('click', this.regridePassosDados.bind(this))

        this.barraProgresso = document.querySelector('#barra-progresso')
    }

    avancaPassosDados(){
        const secaoDados = this.secaoDados
        const barraProgresso = this.barraProgresso

        const progressoDados = this.progressoDados

        const nomeSegundoProgresso = this.nomeSegundoProgresso
        const numeroSegundoProgresso = this.numeroSegundoProgresso

        secaoDados.style.animation = ` animaDadosLeft .8s ease-in-out forwards `

        barraProgresso.style.animation = ` animaBarraDados .8s ease-in-out forwards `
        progressoDados.style.animation = ` animaProgressoDados ease-in-out forwards `

        numeroSegundoProgresso.style.animation = ` animaNumeroProgresso .5s ease-in-out forwards `
        nomeSegundoProgresso.style.animation = ` animaNomeProgresso .5s ease-in-out forwards `

        const secaoPlanos = this.secaoPlanos
        secaoPlanos.style.animation = ` animaDadosLeft .8s ease-in-out forwards `
        
    }

    regridePassosDados(){
        const secaoDados = this.secaoDados
        const barraProgresso = this.barraProgresso

        const progressoDados = this.progressoDados

        const nomeSegundoProgresso = this.nomeSegundoProgresso
        const numeroSegundoProgresso = this.numeroSegundoProgresso

        secaoDados.style.animation = ` animaDadosLeftReverso .8s ease-in-out forwards `

        barraProgresso.style.animation = ` animaBarraDadosReverso .8s ease-in-out forwards `
        progressoDados.style.animation = ` animaProgressoDadosReverso ease-in-out forwards `

        numeroSegundoProgresso.style.animation = ` animaNumeroProgressoReverso .5s ease-in-out forwards `
        nomeSegundoProgresso.style.animation = ` animaNomeProgressoReverso .5s ease-in-out forwards `

        const secaoPlanos = this.secaoPlanos
        secaoPlanos.style.animation = ` animaDadosLeftReverso .8s ease-in-out forwards `
        
    }
    
}