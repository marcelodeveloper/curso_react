const produto = {
    nome: 'Caneta Bic Preta',
    preco: 1.90,
    desconto: 0.05
}

function clone(objeto){
    //operador spread
    //{ } - cria um novo objeto
    return { ...objeto }
}

const novoProduto = clone(produto)
novoProduto.nome = 'Caneta Bic Azul'

console.log(produto,novoProduto)