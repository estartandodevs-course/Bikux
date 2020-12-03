import React from "react";
import Buttons from "../../components/Buttons/Buttons";
import "../../components/Buttons/Buttons.scss";
import "./Login.scss";
import "../../components/Header/Header.scss";

export const Login = ({ logo, shouldHide }) => {
  return (
    <div className="container">
      {/* <nav className={shouldHide ? "hideHeader" : ""} /> */}
      <img src={logo} alt="logo" />
      <div className="inputArea">
        <label>Usuário</label>
        <input></input>
        <label>Senha</label>
        <input></input>
      </div>
      <div className="btn-container">
        <Buttons
          className="btn"
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
      </div>
    </div>
  );
};
