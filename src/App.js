import React from "react";
import logo from "./assets/images/logo.svg";
import { Header, JobCard } from "./components";
import "./styles/index.scss";
import jobList from "./_mocks/jobList";

function App() {
  return (
    <div className="App">
      <Header logo={logo} showBackButton showExitButton />
      <JobCard
        BadgesList={["Leblon", "CLT", "sem experiência"]}
        Title="Assistente de Criação"
        jobImage="https://picsum.photos/100/100?random=2"
        jobDescription="Empresa XPTO procura assistente de criação para atuar em agência. "
      />
    </div>
  );
}

export default App;
