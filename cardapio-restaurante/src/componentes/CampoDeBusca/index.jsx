import styles from './CampoDeBusca.module.css';

const CampoBusca =({onEntradasCLick, onMassaClick, onCarnesClick, onBebidasClick, onSaladasClick, onSobremesasClick, onBuscaChange, buscaProduto}) =>{

    return(
        <div className={styles.sectionCampoDeBusca}>
            <div className={styles.sectionButton}>
                <button onClick={onEntradasCLick}><img src="/assets/entrada.png" alt="Entradas"/>Entradas</button>
                <button onClick={onMassaClick}><img src="/assets/massa.png" alt="Massas"/>Massas</button>
                <button onClick={onCarnesClick}><img src="/assets/carne.png" alt="Carnes"/>Carnes</button>
                <button onClick={onBebidasClick}><img src="/assets/bebidas.png" alt="Bebidas"/>Bebidas</button>
                <button onClick={onSaladasClick}><img src="/assets/salada.png" alt="Saladas"/>Saladas</button>
                <button onClick={onSobremesasClick}><img src="/assets/sobremesa.png" alt="Sobremesas"/>Sobremesas</button>
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