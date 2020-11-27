import React from 'react'
import { ActionButton} from '../index'
import './BottomNavBar..scss'

const BottomNavBar = ({ showAddVagaButton, showHomeButton, showSearchButton, showNotificacionButton}) => {
  return (
    <header className="tab-bar">
      <div className="action-btn-place">
          <ActionButton icon="013-adicionar_vaga" onClick={showAddVagaButton} />
      </div>
      <div className="action-btn-place">
          <ActionButton icon="017-home" onClick={showHomeButton} />
      </div>
      <div className="action-btn-place">
          <ActionButton icon="008-buscar" onClick={showSearchButton} />
      </div>
      <div className="action-btn-place">
          <ActionButton icon="001-notificacaonotification" className="icon" onClick={showNotificacionButton} />
      </div>
    </header>
  );
}
 
export default BottomNavBar;
