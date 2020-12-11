import React from "react";
import Layout from "../../components/layout/Layout";
import InputField from "../../components/inputField/inputField";
import Buttons from "../../components/Buttons/Buttons";
import { useHistory } from "react-router-dom";
import "./Cadastro.scss";
import ActionButton from "../../components/ActionButton/ActionButton";
import SelectField from "../../components/SelectField/SelectField";

const Cadastro = () => {
  const history = useHistory();
  return (
    <Layout showHeader>
      <div>
        <InputField
          label="E-mail"
          type="email"
          placeholder="Por aqui que vamos te avisar das novidades!"
          required
        />
        <InputField
          label="Nome Completo"
          type="text"
          placeholder="Ex.: Bruno da Costa Santos"
          required
        />
        <SelectField
          onChange={() => {}}
          value=""
          label="Selecione suas áreas de interesse"
          required
        />
        <div className="icon-container">
          <div className="icon-btn">
            <ActionButton
              isReverse
              reverseIcon
              // onClick={semCadastro}
              children="Adicione seu currículo"
              icon="009-curriculo"
              iconSize="39.75"
              disabled={false}
            />
          </div>
          <div className="icon-btn">
            <ActionButton
              isReverse
              reverseIcon
              // onClick={semCadastro}
              children="E que tal uma foto?"
              icon="003-avatar"
              iconSize="39.75"
              disabled={false}
            />
          </div>
        </div>

        <InputField
          label="CPF"
          type="text"
          placeholder="Informaremos isso a empresa que requisitarem"
          required
        />
        <InputField
          label="Senha"
          type="password"
          placeholder="Digite aqui sua senha"
          required
        />
        <InputField
          label="Confirmação da Senha"
          type="password"
          placeholder="Confirme sua senha"
          required
        />
        <div className="btn-container">
          <Buttons
            onClick={() => history.push("/")}
            fontSize={"20px"}
            width={"301px"}
            height={"56px"}
            isPrimary={true}
            isOutline={false}
            disabled={false}
            children="Finalizar cadastro"
          />
        </div>
      </div>
    </Layout>
  );
};

export default Cadastro;
