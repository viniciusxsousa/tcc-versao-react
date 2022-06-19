import React from 'react';
import * as S from './styles';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.png'; 
import bell from '../../assets/bell.png';

function Header({ lateCount, clickNotification }) {
  return (
    <S.Container>
      <S.LeftSide>
       {/*<img src={logo} alt="Logo" /> */}
        <h3>Projeto React</h3>
      </S.LeftSide>
      <S.RightSide>
        {/* <Link to= "/">INÍCIO</Link> */}
       {/*  <span className="dividir" /> */}
        <Link to= "/task">NOVA TAREFA</Link>
       {/* <span className="dividir" />
        <a href="#">SINCRONIZAR CELULAR</a> */}
        {/* <span className="dividir" /> 
        <button id='notification' onClick={clickNotification} >
          <img src={bell} alt="Notificação" href="teste" />
          <span>{lateCount}</span>
        </button> */}
      </S.RightSide>
    </S.Container>
  )
}

export default Header;