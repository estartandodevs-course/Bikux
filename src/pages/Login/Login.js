import React, { useState } from "react";
import Buttons from "../../components/Buttons/Buttons";
import ActionButton from "../../components/ActionButton/ActionButton";
import InputField from "../../components/inputField/inputField";
import { useHistory } from "react-router-dom";
import "../../components/Buttons/Buttons.scss";
import "./Login.scss";
import "../../components/Header/Header.scss";
import Layout from "../../components/layout/Layout";
import { SemCadastroModal } from "../../components";

const Login = (props) => {
  const history = useHistory();
  const { logo } = props;
  const [isItAble, setIsItAble] = useState(false);
  function semCadastro() {
    setIsItAble(true);
  }
  function closeSemCadastro() {
    setIsItAble(false);
  }

  return (
    <Layout>
      <div className="container-login">
        <img src={logo} alt="logo" />
        <div className="input-area">
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
            onClick={() => history.push("/")}
            fontSize={"20px"}
            width={"301px"}
            height={"56px"}
            isPrimary={true}
            isOutline={false}
            disabled={false}
            children="Entrar"
          />
          <div className="space-between" />
          <Buttons
            onClick={() => history.push("/cadastro")}
            fontSize={"20px"}
            width={"301px"}
            height={"56px"}
            isPrimary={false}
            isOutline={true}
            disabled={false}
            children="Cadastrar"
          />
          <div className="btn-container-login">
            <ActionButton children="Esqueci minha senha" disabled={false} />
            <ActionButton
              isReverse
              reverseIcon
              onClick={semCadastro}
              children="Entrar sem cadastro"
              icon="021-atencao"
              iconSize="24"
              disabled={false}
            />
            {isItAble && <SemCadastroModal close={closeSemCadastro} />}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
