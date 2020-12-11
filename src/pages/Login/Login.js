import React, { useEffect, useState } from "react";
import Buttons from "../../components/Buttons/Buttons";
import ActionButton from "../../components/ActionButton/ActionButton";
import InputField from "../../components/inputField/inputField";
import { useHistory } from "react-router-dom";
import "../../components/Buttons/Buttons.scss";
import "./Login.scss";
import "../../components/Header/Header.scss";
import Layout from "../../components/layout/Layout";
import { SemCadastroModal } from "../../components";
import firebase from "../../firebaseConfig";

const Login = (props) => {

  const history = useHistory();
  const { logo } = props;
  const [isItAble, setIsItAble] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorONEmailOrPassword, setErrorONEmailOrPassword] = useState(false);

  function semCadastro() {
    setIsItAble(true);
  }
  function closeSemCadastro() {
    setIsItAble(false);
  }

  
//"teste@bikux.com"  "123456"
  //function createUser (email, password) {
    //return firebase.auth().createUserWithEmailAndPassword(email, password);
  //}

  async function handleLogin () {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      setEmail("");
      setPassword("");
      history.push("/")

    } catch (error) {
      console.error("ERROR ::", error.code);
      setErrorONEmailOrPassword(true);
     
    }

  }

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log("USER LOGADO :: ", user);
        setErrorONEmailOrPassword (false);
      }else {
        console.log("USER NÃO LOGADO")
      }
    })
  }, []);

  return (
    <Layout>
      <div className="container-login">
        <img src={logo} alt="logo" />
        <div className="input-area">
          <InputField
            label="Usuário"
            type="text"
            placeholder="Digite aqui seu e-mail"
            onChange = {(event) => setEmail(event.target.value)}
            InputError = {errorONEmailOrPassword}
            value = {email}
          />
          <InputField
            label="Senha"
            type="password"
            placeholder="Digite aqui sua senha"
            onChange = {(event) => setPassword(event.target.value)}
            InputError = {errorONEmailOrPassword}
            value = {password}
          />
        </div>
        <div className="btn-container">
          <Buttons
            onClick={handleLogin}
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
