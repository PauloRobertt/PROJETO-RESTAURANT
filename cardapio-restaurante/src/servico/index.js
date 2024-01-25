import { produtos } from "../data/data-produtos";

export const FiltroCategoria = (categoria) => {
    return produtos.filter((produto) => produto.categoria === categoria)
}

export const RetornaProduto = () => {
    return produtos;
}