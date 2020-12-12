import React from 'react';
import Badges from '../Badges/Badges';
import { ActionButton } from '../';
import './JobCard.scss';
import { useHistory } from 'react-router-dom';
import firebase from "../../firebaseConfig";

function JobCard(props) {
  const {
    title,
    jobImage,
    jobDescription,
    badgesList,
    actionTellAFriend,
    actionFavorite,
    indexOftoBeSaw,
    favorite,
  } = props;

  const history = useHistory();

    function ChangeToDetails() {
      history.push(`/detalhes/vaga/${indexOftoBeSaw}`)
    }

    var isLoggedIn = firebase.auth().currentUser

    const favoritarButton = isLoggedIn != null ? (
      <div className="each-button-container">
          <ActionButton
            icon={favorite ? '024-favoritado' : '014-favoritar'}
            iconSize="16"
            onClick={actionFavorite}
            disabled={false}
          />
        </div>) : 
          ("");
  
  function ChangeToDetails() {
    history.push(`/detalhes/vaga/${indexOftoBeSaw}`);
  }

  return (
    <div className="job-card-container">
      <div className="card-header">
        <img src={jobImage} alt="logo da empresa" />
        <div className="badges-and-title-container">
          <h2 className="title">{title}</h2>
          <div className="badges-container">
            <Badges badgesList={badgesList} />
          </div>
        </div>
      </div>
      <p className="job-description">{jobDescription}</p>
      <div className="buttons-container">
        <div className="each-button-container">
          <ActionButton
            className="button"
            icon="002-indique"
            iconSize="16"
            onClick={actionTellAFriend}
            disabled={false}
          />
        </div>

        {favoritarButton}

        <div className="each-button-container">
          <ActionButton
            icon="016-seemore"
            iconSize="16"
            onClick={ChangeToDetails}
            disabled={false}
          />
        </div>
      </div>
    </div>
  );
}

export default JobCard;
