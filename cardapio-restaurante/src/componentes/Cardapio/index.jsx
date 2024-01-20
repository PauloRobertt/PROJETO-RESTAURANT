export const Cardapio = ({nome,imagem,categoria,preco,descricao}) => {
    return(
        <div>
            <figure>
                <img src={imagem} alt="Produto"/>
            </figure>
            <h2>{nome}</h2>
            <p>{categoria}</p>
            <p>{descricao}</p>
            <p>{preco}</p>

        </div>
    )
}