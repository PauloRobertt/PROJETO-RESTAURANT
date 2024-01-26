import style from './Cards.module.css';
import Image from 'next/image';

const Cards = ({nome, categoria, preco, descricao, imagem}) => {
    return(
        <div className={style.Card}>
            <figure>
                <Image src={imagem} alt={nome}/>
            </figure>
            <div className={style.info}>
                <h3>{nome}</h3>
                <small>{categoria}</small>
                <p>{descricao}</p>
                <p className={style.preco}>{preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'})}</p>
            </div>
        </div>
    )
}

export default Cards;