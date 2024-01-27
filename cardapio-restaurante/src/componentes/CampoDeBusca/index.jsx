import styles from './CampoDeBusca.module.css';

const CampoBusca =({onEntradasCLick, onMassaClick, onCarnesClick, onBebidasClick, onSaladasClick, onSobremesasClick, onBuscaChange, buscaProduto, botao}) =>{

    return(
        <div className={styles.sectionCampoDeBusca}>
            <div className={styles.sectionButton}>
                <button className={botao === 'Entradas' ? styles.botaoApertado : styles.botaoNormal} onClick={onEntradasCLick}><img src="/assets/entrada.png" alt="Entradas"/>Entradas</button>
                <button className={botao === 'Massas' ? styles.botaoApertado : styles.botaoNormal} onClick={onMassaClick}><img src="/assets/massa.png" alt="Massas"/>Massas</button>
                <button className={botao === 'Carnes' ? styles.botaoApertado : styles.botaoNormal} onClick={onCarnesClick}><img src="/assets/carne.png" alt="Carnes"/>Carnes</button>
                <button className={botao === 'Bebidas' ? styles.botaoApertado :styles.botaoNormal} onClick={onBebidasClick}><img src="/assets/bebidas.png" alt="Bebidas"/>Bebidas</button>
                <button className={botao === 'Saladas' ? styles.botaoApertado : styles.botaoNormal} onClick={onSaladasClick}><img src="/assets/salada.png" alt="Saladas"/>Saladas</button>
                <button className={botao === 'Sobremesas' ? styles.botaoApertado : styles.botaoNormal} onClick={onSobremesasClick}><img src="/assets/sobremesa.png" alt="Sobremesas"/>Sobremesas</button>
            </div>
            <input
                id='input'
                type="text"
                value={buscaProduto}
                onChange={(event) => onBuscaChange(event.target.value)}
                placeholder="Pesquise aqui um dos pratos do nosso cardápio"
            />
        </div>
    )
}

export default CampoBusca;