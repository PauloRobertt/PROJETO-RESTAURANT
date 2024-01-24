import { FiltroCategoria } from '../../servico';

export default function CampoBusca(){

    return(
        <div>
            <div>
                <button onClick={() => FiltroCategoria('Entradas')}>Entradas</button>
                <button onClick={() => FiltroCategoria('Massas')}>Massas</button>
                <button onClick={() => FiltroCategoria('Carnes')}>Carnes</button>
                <button onClick={() => FiltroCategoria('Bebidas')}>Bebidas</button>
                <button onClick={() => FiltroCategoria('Saladas')}>Saladas</button>
                <button onClick={() => FiltroCategoria('Sobremesas')}>Sobremesas</button>
            </div>
            <input
                type="text"
                placeholder="Pesquise aqui um dos pratos do nosso cardápio"
            />
        </div>
    )
}