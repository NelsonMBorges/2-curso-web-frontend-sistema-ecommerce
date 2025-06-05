// Lista de produtos disponíveis com nome e preço
const produtosDisponiveis = [
  { nome: "Camisa", preco: 50.0 },
  { nome: "Calça", preco: 100.0 },
  { nome: "Sapato", preco: 150.0 },
  { nome: "Boné", preco: 25.0 },
];

// Carrinho de compras como um array de objetos
let carrinho = [];

function adicionarProduto() {
    let nomeProduto = prompt("Qual produto deseja adicionar? (Camisa, Calça, Sapato, Boné)").trim();
    let produtoSelecionado = produtos.find(p => p.nome.toLowerCase() === nomeProduto.toLowerCase());

    if (produtoSelecionado) {
        let quantidade = parseInt(prompt(`Quantas unidades de ${produtoSelecionado.nome} deseja adicionar?`));
        if (!isNaN(quantidade) && quantidade > 0) {
            let produtoCarrinho = {
                nome: produtoSelecionado.nome,
                preco: produtoSelecionado.preco,
                quantidade: quantidade,
                subtotal: produtoSelecionado.preco * quantidade
            };
            carrinho.push(produtoCarrinho);
            alert(`${quantidade}x ${produtoSelecionado.nome} adicionados ao carrinho!`);
        } else {
            alert("Quantidade inválida!");
        }
    } else {
        alert("Produto não encontrado!");
    }
}
