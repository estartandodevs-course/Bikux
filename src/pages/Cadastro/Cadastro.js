import React from "react";
import InputField from "../../components/inputField/inputField";
import Buttons from "../../components/Buttons/Buttons";
import { useHistory } from "react-router-dom";
import "./Cadastro.scss";
import SelectField from "../../components/SelectField/SelectField";
import { Header, SendFilesBtn } from "../../components";
import logo from "../../assets/images/logo.svg";

const Cadastro = () => {
  const history = useHistory();
  return (
    <>
      <Header showBackButton logo={logo} />
      <div className="input-container">
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
        <div className="files-btn">
          <SendFilesBtn
            onClick={() => {}}
            text="Adicione seu currículo!"
            icon="009-curriculo"
            iconSize="48"
            disabled={false}
          />
          <div className="space"></div>
          <SendFilesBtn
            onClick={() => {}}
            text="E que tal uma foto?"
            icon="003-avatar"
            iconSize="48"
            disabled={false}
          />
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
        <span className="obrigatorio">* Obrigatório</span>
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
          children="Finalizar cadastro"
        />
      </div>
    </>
  );
};

export default Cadastro;
