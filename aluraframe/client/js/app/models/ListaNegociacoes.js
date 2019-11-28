class ListaNegociacoes {

    constructor() {
        this._negociacoes = [];     
    }
    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
    }

    // Programação defensiva = quando alguém chama a lista de negociações, ele consegue ver apenas uma cópia dela
    get negociacoes() {
        return [].concat(this._negociacoes);  
        
        
    }

}