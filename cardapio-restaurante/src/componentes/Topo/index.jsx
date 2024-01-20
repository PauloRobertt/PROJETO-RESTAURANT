import styles from './Topo.module.css';
import img from "../../../public/assets/banner.png";

export default function topo(){
    return(
        <header className={styles.topo}>
            <h1>RESTAURANT</h1>
            <img src={img} alt="banner"/>
            <p>
                De pratos clássicos a criações surpreendentes, nosso cardápio é um requinte de sabores refinados
            </p>
        </header>
    )
}