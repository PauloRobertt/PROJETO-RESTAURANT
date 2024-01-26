import { produtos } from "../data/data-produtos";

export const FiltroCategoria = (categoria) => {
    return produtos.filter((produto) => produto.categoria === categoria)
}

export const FiltroBusca = (textoDigitado) => {
    return produtos.filter((produto) =>
        produto.nome.toLowerCase().includes(textoDigitado.toLowerCase()) ||
        produto.descricao.toLowerCase().includes(textoDigitado.toLowerCase())
    )
}