import React from "react";
import Badges from "../Badges/Badges";
import { ActionButton } from "../";
import "./JobCard.scss";

function JobCard(props) {
  const { title, jobImage, jobDescription, badgesList } = props;

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
        <ActionButton
          className="button"
          icon="002-indique"
          iconSize="16"
          onClick={() => console.log("indicou")}
        />
        <ActionButton
          icon="014-favoritar"
          iconSize="16"
          onClick={() => console.log("favoritou")}
        />
        <ActionButton
          icon="016-seemore"
          iconSize="16"
          onClick={() => console.log("viu mais")}
        />
      </div>
    </div>
  );
}

export default JobCard;
