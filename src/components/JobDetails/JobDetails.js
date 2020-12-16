import React from "react";
import Badges from "../Badges/Badges";
import { ActionButton } from "../";
import "./JobDetails.scss";
import { useHistory } from "react-router-dom";
import firebase from "firebase/app";
import Buttons from "../Buttons/Buttons";

function JobDetails(props) {
  const { TellAFriend, actionFavorite, IWantThisJob, denounce, job } = props;

  const history = useHistory();

  const isLoggedIn = firebase.auth().currentUser;

  const buttonVaga = isLoggedIn ? (
    <Buttons
      fontSize={"20px"}
      width={"297px"}
      height={"56px"}
      isPrimary={true}
      isOutline={false}
      children="Quero essa vaga!"
      onClick={IWantThisJob}
    />
  ) : (
    <Buttons
      fontSize={"20px"}
      width={"297px"}
      height={"56px"}
      isPrimary={true}
      isOutline={false}
      disabled={true}
      color="#19232c40"
      children="Necessário realizar login"
    />
  );

  const buttonFavorite = isLoggedIn ? (
    <ActionButton
      icon={job.favorite ? "024-favoritado" : "014-favoritar"}
      iconSize="16"
      children="Favoritar"
      onClick={actionFavorite}
      disabled={false}
    />
  ) : (
    ""
  );

  const buttonDenounce = isLoggedIn ? (
    <div className="denounce-container">
      <ActionButton
        icon="015-denunciar"
        iconSize="16"
        onClick={denounce}
        children="Denunciar esta vaga"
        disabled={false}
      />
    </div>
  ) : (
    <div className="denounce-container">
      <ActionButton
        icon="023-login"
        iconSize="16"
        onClick={() => history.push("/login")}
        children="Entrar"
        disabled={false}
      />
    </div>
  );

  return (
    <div className="job-card-container">
      <div className="card-header">
        <img src={job.imgSrc} alt="logo da empresa" />
        <div className="badges-and-title-container">
          <h5 className="title-details">{job.title}</h5>
          <div className="badges-container">
            <Badges badgesList={job.badges} />
          </div>
        </div>
      </div>
      <h6 className="job-description-title">{job.description}</h6>
      <p className="details">{job.details}</p>
      <div className="buttons-container-details">
        <ActionButton
          className="button"
          icon="002-indique"
          iconSize="16"
          onClick={TellAFriend}
          children="Indicar para amigo"
          disabled={false}
        />
        {buttonFavorite}
      </div>
      {buttonVaga}
      {buttonDenounce}
    </div>
  );
}

export default JobDetails;
