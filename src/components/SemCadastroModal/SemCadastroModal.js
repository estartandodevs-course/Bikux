import React from "react";
import "./SemCadastroModal.scss";
import { Icon } from "../index";
import Buttons from "../Buttons/Buttons";
import { useHistory } from "react-router-dom";

const SemCadastroModal = (props) => {
  const { close } = props;
  const history = useHistory();

  return (
    <div className="modal-container">
      <div className="modal">
        <div className="close-button-container" onClick={close}>
          <span className="close-button">✕</span>
        </div>

        <Icon name="021-atencao" size="64" />

        <h4 className="title">
          Deseja acessar a plataforma sem fazer o cadastro?
        </h4>
        <p className="text">
          O usuário cadastrado pode se candidatar, favoritar e indicar as vagas.
        </p>

        <div className="btns">
          <Buttons
            width={"297px"}
            height={"56px"}
            fontSize={"20px"}
            isPrimary={true}
            isOutline={false}
            disabled={false}
            onClick={() => history.push("/cadastro")}
          >
            Cadastrar <span className="text-cadastrar">(é rapidinho!)</span>
          </Buttons>
          <div className="btn-cadastrar"></div>
          <Buttons
            width={"297px"}
            height={"56px"}
            fontSize={"20px"}
            isPrimary={true}
            isOutline={true}
            disabled={false}
            children="Acessar sem cadastro"
            onClick={() => history.push("/")}
          />
        </div>
      </div>
    </div>
  );
};

export default SemCadastroModal;
