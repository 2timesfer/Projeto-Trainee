import React from 'react';

import './styles.css';

import bolinha from '../../assets/bolinha.png';

export default function Estrutura(){
    return (
        <div className='estrutura-container'>
        <div className='estrutura-image'>
            <h1>Welcome Trainer</h1>
            <img src={bolinha} alt="Gotta catch'em all"/>
        </div>
        <div className='textos'> texto</div>
    </div>
    )
}
//na className text colocaremos o login e cadastro,ainda falta arrumar a rota e uns design