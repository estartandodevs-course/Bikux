import React from "react";
import Badges from "../Badges/Badges";
import { ActionButton } from "../";
import "./JobCard.scss";

function JobCard(props) {
  const { title, jobImage, jobDescription, badgesList, actionTellAFriend, actionFavorite, actionSeeMore, indexOftoBeSaw } = props;


  

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
        <div className = "each-button-container">
          <ActionButton
            className="button"
            icon="002-indique"
            iconSize="16"
            onClick={actionTellAFriend}
            disabled = {false}
          />
        </div>

        <div className = "each-button-container">
          <ActionButton
            icon="014-favoritar"
            iconSize="16"
            onClick={actionFavorite}
            disabled = {false}
          />
        </div>

        <div className = "each-button-container">
          <ActionButton
            icon="016-seemore"
            iconSize="16"
            onClick = {actionSeeMore}
            disabled = {false}
          />
        </div>
      </div>
    </div>
  );
}

export default JobCard;
