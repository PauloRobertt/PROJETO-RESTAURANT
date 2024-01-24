

const Cards = ({nome, categoria, preco, descricao, imagem}) => {
    return(
        <div>
            <figure>
                <img src={imagem} alt={nome}/>
            </figure>
            <h2>{nome}</h2>
            <p>{categoria}</p>
            <p>{descricao}</p>
            <p>{preco}</p>
        </div>
    )
}

export default Cards;