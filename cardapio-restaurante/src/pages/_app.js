import React,{useState} from 'react';

import Topo from '../componentes/Header';
import CampoBusca from '../componentes/CampoDeBusca';
import Cards from '../componentes/Cards';

import { FiltroCategoria, FiltroBusca } from '../servico';

import styles from '../styles/Home.module.css';
import '../styles/globals.css';

const Restaurante = () => {

  const [listaProdutos, setListaProdutos] = useState(FiltroCategoria('Entradas'));
  const [buscaProduto, setBuscaProduto] = useState();

  const handleFiltroCategoria = (categoria) => {
    setListaProdutos(FiltroCategoria(categoria))
  };

  const handleFiltroBusca = (textoDigitado) => {
    setBuscaProduto(textoDigitado)
    setListaProdutos(FiltroBusca(textoDigitado))
  };

  return(
    <div className={styles.restaurante}>
      <div className={styles.sectionLimitada}>
        <Topo/>
        <CampoBusca
          onEntradasCLick={() => handleFiltroCategoria('Entradas')}
          onMassaClick={() => handleFiltroCategoria('Massas')}
          onCarnesClick={() => handleFiltroCategoria('Carnes')}
          onBebidasClick={() => handleFiltroCategoria('Bebidas')}
          onSaladasClick={() => handleFiltroCategoria('Saladas')}
          onSobremesasClick={() => handleFiltroCategoria('Sobremesas')}
          onBuscaChange={handleFiltroBusca}
          buscaProduto={buscaProduto}
        />
        <div className={styles.cardapio}>
          <h2>
            Cardápio
          </h2>
          <div className={styles.cards}>
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
      </div>
    </div>
  )
}

export default Restaurante;