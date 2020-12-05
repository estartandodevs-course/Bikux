import React from "react";
import Buttons from "../../components/Buttons/Buttons";
import ActionButton from "../../components/ActionButton/ActionButton";
import { InputField, inputField } from "../../components/inputField/inputField";
import "../../components/Buttons/Buttons.scss";
import "./Login.scss";
import "../../components/Header/Header.scss";

export const Login = ({ logo, shouldHide }) => {
  return (
    <div className="container">
      {/* <nav className={shouldHide ? "hideHeader" : ""} /> */}
      <img src={logo} alt="logo" />
      <div className="inputArea">
        <InputField
          label="Usuário"
          type="text"
          placeholder="Digite aqui seu e-mail"
        />
        <InputField
          label="Senha"
          type="password"
          placeholder="Digite aqui sua senha"
        />
      </div>
      <div className="btn-container">
        <Buttons
          isPrimary={true}
          isOutline={false}
          disabled={false}
          children="Entrar"
        />
        <div className="space-between" />
        <Buttons
          isPrimary={false}
          isOutline={true}
          disabled={false}
          children="Cadastrar"
        />
        <div className="btn-container-login">
          <ActionButton children="Esqueci minha senha" disabled={false} />
          <ActionButton
            // onClick={favorite}
            children="Entrar sem cadastro"
            icon="021-atencao"
            iconSize="16"
            disabled={false}
          />
        </div>
      </div>
    </div>
  );
};
