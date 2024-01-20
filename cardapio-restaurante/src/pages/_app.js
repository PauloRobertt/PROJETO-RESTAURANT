import React from 'react';

import Topo from '../componentes/Topo';
import CampoBusca from '../componentes/CampoDeBusca';
import Cardapio from '../componentes/Cardapio';
//import {produtos} from '../data';

export default function Restaurante(){
  return(
    <div>
      <Topo/>
      <CampoBusca/>
    </div>
  )
}