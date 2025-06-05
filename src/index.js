/// Lista de produtos disponíveis com nome e preço
const produtosDisponiveis = [
  { nome: "Camisa", preco: 50.0 },
  { nome: "Calça", preco: 100.0 },
  { nome: "Sapato", preco: 150.0 },
  { nome: "Boné", preco: 25.0 },
];

// Carrinho de compras como um array de objetos
let carrinho = [];

function adicionarProduto() {
    // Solicita ao usuário que informe qual produto deseja adicionar
    let nomeProduto = prompt("Qual produto deseja adicionar? (Camisa, Calça, Sapato, Boné)").trim();

    // Busca o produto na lista de disponíveis, ignorando maiúsculas/minúsculas
    let produtoSelecionado = produtosDisponiveis.find(p => p.nome.toLowerCase() === nomeProduto.toLowerCase());

    if (produtoSelecionado) {
        // Solicita a quantidade desejada
        let quantidade = parseInt(prompt(`Quantas unidades de ${produtoSelecionado.nome} deseja adicionar?`));

        // Verifica se a quantidade é válida (número positivo)
        if (!isNaN(quantidade) && quantidade > 0) {
            // Cria um objeto para o produto com nome, preço, quantidade e subtotal
            let produtoCarrinho = {
                nome: produtoSelecionado.nome,
                preco: produtoSelecionado.preco,
                quantidade: quantidade,
                subtotal: produtoSelecionado.preco * quantidade
            };

            // Adiciona o produto ao carrinho
            carrinho.push(produtoCarrinho);

            // Exibe uma mensagem de confirmação
            alert(`${quantidade}x ${produtoSelecionado.nome} adicionados ao carrinho!`);
        } else {
            alert("Quantidade inválida!"); // Mensagem de erro se a entrada for inválida
        }
    } else {
        alert("Produto não encontrado!"); // Mensagem de erro se o produto não existir
    }
}