import React from 'react'
import { ActionButton} from '../index'
import { Link, useHistory } from "react-router-dom";
import './BottomNavBar..scss'

const BottomNavBar = ({ showAddVagaButton, showHomeButton, showSearchButton, showNotificacionButton}) => {
  return (
    <nav className="tab-bar">
      <Link to="/vaga" className="action-btn-place">
          <ActionButton icon="013-adicionar_vaga" onClick={showAddVagaButton} />
      </Link>
      <Link to="/" className="action-btn-place">
          <ActionButton icon="017-home" onClick={showHomeButton} />
      </Link>
      <Link to="/search" className="action-btn-place">
          <ActionButton icon="008-buscar" onClick={showSearchButton} />
      </Link>
      <Link to="#" className="action-btn-place">
          <ActionButton icon="001-notificacaonotification" className="icon" onClick={showNotificacionButton} />
      </Link>
    </nav>
  );
}
 
export default BottomNavBar;
