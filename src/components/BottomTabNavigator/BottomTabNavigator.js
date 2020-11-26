import './BottomTabNavigator.scss';
import '../../styles/main.scss';
import '../../styles/variables.scss';
import  adicionar_vaga from '../../assets/icons/013-adicionar_vaga.png';
import  home from '../../assets/icons/017-home.png';
import  buscar from '../../assets/icons/008-buscar.png';
import  notificacao from '../../assets/icons/001-notificacaonotification.png';
import React from 'react';

export default props => 
    <nav className="tab-bar">
        <a href="#/">
            <i><img src={adicionar_vaga} className="icon-vaga"/></i>
        </a>
        <a href="#/">
            <i><img src={home} className="icon-home"/></i>
        </a>
        <a href="#/">
            <i><img src={buscar} className="icon-buscar"/></i>
        </a>
        <a href="#/">
            <i><img src={notificacao} className="icon-notificacao"/></i>
        </a>
    </nav>
