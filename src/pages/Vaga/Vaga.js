import React from "react";
import { Header, TextArea, Buttons, Checkbox } from "../../components";
import { InputField } from "../../components";
import Layout from "../../components/layout/Layout";
import logo from "../../assets/images/logo.svg";
import firebase from "firebase/app";
import "./Vaga.scss";
import Icon from "../../components/Icon/Icon";
import { useHistory } from "react-router-dom";

const CadastrarVaga = () => {
  const history = useHistory();

  var isLoggedIn = firebase.auth().currentUser;

  const header = isLoggedIn ? (
    <Header showBackButton showExitButton logo={logo} />
  ) : (
    <Header showBackButton logo={logo} />
  );

  return (
    <Layout showBottomNavBar>
      {header}

      <div className="vaga-container">
        <Icon name="013-adicionar_vaga" />
        <h4 className="vaga-heading">Cadastrar uma vaga</h4>
      </div>
      <div className="cadastrar-vaga-container">
        <InputField
          label="Título da Vaga"
          type="text"
          placeholder="Ex.: Operador de Caixa"
        />
        <InputField
          label="Empresa"
          type="text"
          placeholder="Ex.: Supermercados Compre Mais"
        />
        <InputField label="Bairro" type="text" placeholder="Ex.: Olaria" />
        <InputField
          label="Descrição Curta"
          type="text"
          placeholder="Ex.: Procuramos caixa para o período da manhã"
        />
        <div className="checkbox-input">
          <Checkbox
            label="Exige experiência?"
            id="experiencia"
            htmlFor="experiencia"
            type="checkbox"
          />
        </div>
        <TextArea
          label="Detalhes da Vaga"
          placeholder="Ex.: Procuramos caixa para o período da manhã, não necessita experiência. Oferecemos salário compatível, VA, VT, AM, AO. Desejável que more perto."
        />
      </div>
      <div className="btn-vaga">
        <Buttons
          onClick={() => history.push("/")}
          fontSize={"20px"}
          width={"301px"}
          height={"56px"}
          isPrimary={true}
          isOutline={false}
          disabled={false}
          children="Cadastrar Vaga"
        />
      </div>
    </Layout>
  );
};

export default CadastrarVaga;
