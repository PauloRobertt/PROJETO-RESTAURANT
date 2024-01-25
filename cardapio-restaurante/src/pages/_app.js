import React,{useState} from 'react';

import Topo from '../componentes/Header';
import CampoBusca from '../componentes/CampoDeBusca';
import Cards from '../componentes/Cards';

import { RetornaProduto, FiltroCategoria } from '../servico';

import styles from '../styles/Home.module.css';
import '../styles/globals.css';

const Restaurante = () => {

  const [listaProdutos, setListaProdutos] = useState(RetornaProduto);

  return(
    <div className={styles.restaurante}>
      <div className={styles.sectionLimitada}>
        <Topo/>
        <CampoBusca/>
        {
          listaProdutos.map((jogo) => (
            <Cards
              key={jogo.id}
              nome={jogo.nome}
              categoria={jogo.categoria}
              preco={jogo.preco}
              descricao={jogo.descricao}
              imagem={jogo.imagem} 
            />
          ))
        }
      </div>
    </div>
  )
}

export default Restaurante;