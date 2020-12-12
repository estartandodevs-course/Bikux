import React from 'react'
import { ActionButton} from '../index'
import { useHistory } from "react-router-dom";
import './BottomNavBar..scss'

const BottomNavBar = () => {
  
  const history = useHistory();

  return (
    <nav className="tab-bar">
      <div className="action-btn-place">
          <ActionButton icon="013-adicionar_vaga" onClick={() => history.push('/vaga')} />
      </div>
      <div className="action-btn-place">
          <ActionButton icon="017-home" onClick={() => history.push('/')} />
      </div>
      <div className="action-btn-place">
          <ActionButton icon="008-buscar" onClick={() => history.push('/search')} />
      </div>
      <div className="action-btn-place">
          <ActionButton icon="001-notificacaonotification" className="icon" onClick={() => history.push('#')} />
      </div>
    </nav>
  );
}
 
export default BottomNavBar;