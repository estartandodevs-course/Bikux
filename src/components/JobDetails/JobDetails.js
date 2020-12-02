import React, { useState } from "react";
import Badges from "../Badges/Badges";
import { ActionButton, TellAFriendModal} from "../";
import "./JobDetails.scss";
import jobList from "../../_mocks/jobList";
import Buttons from "../Buttons/Buttons";

function JobDetails(props) {
  const {indexOfCardToBeDetailed, isUserNotLogged} = props;

  const [isItAble, setIsItAble] = useState (false);

  function getDataFromCardToBeDetailed (indexOfCardToBeDetailed) {
     return jobList.filter ((item) => {
         const indexOfItem = jobList.indexOf(item);
         if (indexOfItem == indexOfCardToBeDetailed) {
            return (
                {
                key:  item.id,
                badgesList: item.badgesList,
                title: item.title,
                jobImage: item.jobImage,
                jobDescription: item.jobDescription,      
                details: item.jobDetails
                }
              );
         } 
     })
  }

  const itemToBeDatailed = getDataFromCardToBeDetailed (indexOfCardToBeDetailed);

function getImage () {
    return itemToBeDatailed.map ((item) => item.jobImage)
}

const image = getImage ();

function getTitle () {
    const title = itemToBeDatailed.map ((item) => item.title);
    const TitleReady = title.pop();
    return TitleReady;
}

const title = getTitle ();

function getBadgesList () {
    const ListOfBadgesList = itemToBeDatailed.map ((item) => item.badgesList)
    const BadgesList = ListOfBadgesList.pop();
    return  BadgesList;
}

const BadgesList = getBadgesList ();


function getDescription () {
    return itemToBeDatailed.map ((item) => item.jobDescription)
}

const description = getDescription ();

function getDetails () {
    return itemToBeDatailed.map ((item) => item.jobDetails)
}

const Details = getDetails ();

function favorite () {
    console.log ("favoritou a vaga de ", title, "cujo index é:", indexOfCardToBeDetailed);
}

function TellAFriend () {
    setIsItAble (true);
}

function closeTellAFriend () {
    setIsItAble (false);
  }

function IWantThisJob () {
    console.log ("quero a vaga de ", title, "cujo index é:", indexOfCardToBeDetailed);
}

function denounce() {
    console.log ("denunciou de ", title, "cujo index é:", indexOfCardToBeDetailed);
}

  return (
    <div className="job-card-container">
      <div className="card-header">
        <img src={image} alt="logo da empresa" />
        <div className="badges-and-title-container">
          <h5 className="title-details">{title}</h5>
          <div className="badges-container">
            <Badges badgesList={BadgesList} />
          </div>
        </div>
      </div>
      <h6 className="job-description-title">{description}</h6>
        <p className = "details">{Details}</p>
        <div className="buttons-container-details">
        <ActionButton
          className="button"
          icon="002-indique"
          iconSize="16"
          onClick={TellAFriend}
          children = "Indicar para amigo"
          disabled = {false}
        />
        <ActionButton
          icon="014-favoritar"
          iconSize="16"
          onClick={favorite}
          children = "Favoritar"
          disabled = {false}
        />
      </div>
      <Buttons isPrimary = {true} isOutline = {false} disabled = {isUserNotLogged} children = "Quero essa vaga!" onClick = {IWantThisJob}/>
      <div className="denounce-container"> 
        <ActionButton
            icon="015-denunciar"
            iconSize="16"
            onClick={denounce}
            children = "Denunciar esta vaga"
            disabled = {false}
            />
      </div>

      {isItAble && <TellAFriendModal  jobTitle = {title} jobIndex = {indexOfCardToBeDetailed} close = {closeTellAFriend}/>}
    </div>
  );
}

export default JobDetails;