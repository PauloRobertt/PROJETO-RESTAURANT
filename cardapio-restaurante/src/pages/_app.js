import React from 'react';

import Topo from '../componentes/Topo';
import CampoBusca from '../componentes/CampoDeBusca';
import Cardapio from '../componentes/Cardapio';
//import {produtos} from '../data';

import styles from '../styles/Home.module.css';
import '../styles/globals.css';

export default function Restaurante(){
  return(
    <div className={styles.restaurante}>
      <div className={styles.sectionLimitada}>
        <Topo/>
        <CampoBusca/>
      </div>
    </div>
  )
}