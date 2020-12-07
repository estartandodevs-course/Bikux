import React from 'react';

import './ConfirmacaoModal.scss';
import { Icon } from '../index';

function ConfirmacaoModal(props) {
  const { closeConfirmation } = props;
  return (
    <div className="fundo">
      <section className="colorbox">
        <div className="close-button-container" onClick={closeConfirmation}>
          <span className="close-button">X</span>
        </div>
        <Icon name="011-rh" size="64" />
        <h5 className="title-confirmacao">Parabéns!</h5>
        <p className="text-confirmacao">
          Você está concorrendo à vaga. Agora é só esperar e relaxar que em
          breve os recrutadores entram em contato com você!
        </p>
      </section>
    </div>
  );
}
export default ConfirmacaoModal;
