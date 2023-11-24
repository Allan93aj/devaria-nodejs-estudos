try {
    const listaDeProdutosDisponiveis = [
        "Pao",
        "Leite",
        "Cafe",
        "Laranja",
        "Macarrao",
        "Sabonete",
        "Detergente",
    ]
    
    const listaDeArgumentos = process.argv.slice(2)
    
    const listaDeProdutosSolicitadosDisponiveis = listaDeProdutosDisponiveis.filter(produto => {
        return listaDeArgumentos.find(argumento => argumento === produto)
    })
    
    listaDeProdutosSolicitadosDisponiveis.forEach(produto => console.log(`Temos esse produto: ${produto}`))
    
    const listaDeProdutosSolicitadosNaoDisponiveis = listaDeArgumentos.filter(argumento => {
        return !listaDeProdutosDisponiveis.find(produto => produto === argumento);
    })
    listaDeProdutosSolicitadosNaoDisponiveis.forEach(argumento => console.log(`Nao temos esse produto: ${argumento}`))
    
    listaDeProdutosDisponiveis.sort();
    listaDeProdutosDisponiveis.forEach(produto => console.log(`Produto disponivel: ${produto}`))
} catch (error) {
    console.log('Nao foi possivel executar pedido de compra')
}


