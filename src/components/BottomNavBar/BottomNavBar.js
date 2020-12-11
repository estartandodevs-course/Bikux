import React from 'react'
import { ActionButton} from '../index'
import { useHistory } from "react-router-dom";
import './BottomNavBar..scss'

const BottomNavBar = () => {

  const isLoggedIn = false;

  const addVaga = isLoggedIn ? (
    <div className="action-btn-place">
      <ActionButton icon="013-adicionar_vaga" onClick={() => history.push('/vaga')} />
    </div>
  ) : 
  ("")

  const notification = isLoggedIn ? (
    <div className="action-btn-place">
      <ActionButton icon="001-notificacaonotification" className="icon" onClick={() => history.push('#')} />
    </div>
  ) : 
  ("")

  const history = useHistory();

  return (
    <nav className="tab-bar">
      {addVaga}
      <div className="action-btn-place">
          <ActionButton icon="017-home" onClick={() => history.push('/')} />
      </div>
      <div className="action-btn-place">
          <ActionButton icon="008-buscar" onClick={() => history.push('/search')} />
      </div>
      {notification}
    </nav>
  );
}
 
export default BottomNavBar;
