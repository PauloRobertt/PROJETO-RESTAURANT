import React from 'react';
import styles from './Topo.module.css';

export default function topo(){
    return(
        <header className={styles.topo}>
            <div className={styles.info}>
                <h1>RESTAURANT</h1>
                <p>
                    De pratos clássicos a criações surpreendentes, nosso cardápio é um requinte de sabores refinados
                </p>
            </div>
        </header>
    )
}