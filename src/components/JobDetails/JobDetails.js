<<<<<<< HEAD
import React from "react";
import Badges from "../Badges/Badges";
import { ActionButton} from "../";
import { useHistory } from "react-router-dom";
import "./JobDetails.scss";
import jobList from "../../_mocks/jobList";
import Buttons from "../Buttons/Buttons";

function JobDetails(props) {
  const {indexOfCardToBeDetailed, TellAFriend, favorite, IWantThisJob, denounce} = props;


  function getDataFromCardToBeDetailed (indexOfCardToBeDetailed) {
     return jobList.filter ((item) => (item["id"]).toString() ===  indexOfCardToBeDetailed)
=======
import React from 'react';
import Badges from '../Badges/Badges';
import { ActionButton } from '../';
import './JobDetails.scss';
import jobList from '../../_mocks/jobList';
import Buttons from '../Buttons/Buttons';

function JobDetails(props) {
  const {
    indexOfCardToBeDetailed,
    isUserNotLogged,
    TellAFriend,
    favorite,
    IWantThisJob,
    denounce,
  } = props;

  function getDataFromCardToBeDetailed(indexOfCardToBeDetailed) {
    return jobList.filter(
      (item) => item['id'].toString() === indexOfCardToBeDetailed,
    );
>>>>>>> 6eeb3a89567c97b3f209765ab0b8d0d5765b21e5
  }

  const itemToBeDatailed = getDataFromCardToBeDetailed(indexOfCardToBeDetailed);

  function getImage() {
    return itemToBeDatailed.map((item) => item.jobImage);
  }

  const image = getImage();

  function getTitle() {
    const title = itemToBeDatailed.map((item) => item.title);
    const TitleReady = title.pop();
    return TitleReady;
  }

  const title = getTitle();

  function getBadgesList() {
    const ListOfBadgesList = itemToBeDatailed.map((item) => item.badgesList);
    const BadgesList = ListOfBadgesList.pop();
    return BadgesList;
  }

  const BadgesList = getBadgesList();

  function getDescription() {
    return itemToBeDatailed.map((item) => item.jobDescription);
  }

  const description = getDescription();

  function getDetails() {
    return itemToBeDatailed.map((item) => item.jobDetails);
  }

<<<<<<< HEAD
//checa se o usuário está autenticado

const history = useHistory();

const isLoggedIn = false;

const loginButton = isLoggedIn ? (
    <Buttons 
    fontSize = {"20px"} 
    width = {"297px"} 
    height = {"56px"} 
    isPrimary = {true} 
    isOutline = {false} 
    children = "Quero essa vaga!" 
    onClick = {IWantThisJob}/>) : 
  (<Buttons fontSize = {"20px"} 
    width = {"297px"} 
    height = {"56px"} 
    isPrimary = {true} 
    isOutline = {false} 
    backgroundColor = " #c5c6c7"
    children = "Necessário realizar login" 
    onClick = {() => history.push("/login")}/>);

const favoritarButton = isLoggedIn ? (
<ActionButton
    icon="014-favoritar"
    iconSize="16"
    onClick={favorite}
    children = "Favoritar"
    disabled = {false}/>) : 
    ("");

const denunciarButton = isLoggedIn ? (
  <div className="denounce-container"> 
  <ActionButton
      icon="015-denunciar"
      iconSize="16"
      onClick={denounce}
      children = "Denunciar esta vaga"
      disabled = {false}
      />
  </div>) : 
  (<div className="denounce-container"> 
  <ActionButton
      icon="022-exit"
      iconSize="16"
      onClick = {() => history.push("/login")}
      children = "Entrar"
      disabled = {false}
      />
  </div>);
  
=======
  const Details = getDetails();

>>>>>>> 6eeb3a89567c97b3f209765ab0b8d0d5765b21e5
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
      <p className="details">{Details}</p>
      <div className="buttons-container-details">
        <ActionButton
          className="button"
          icon="002-indique"
          iconSize="16"
          onClick={TellAFriend}
          children="Indicar para amigo"
          disabled={false}
        />
<<<<<<< HEAD
        {favoritarButton}
=======
        <ActionButton
          icon="014-favoritar"
          iconSize="16"
          onClick={favorite}
          children="Favoritar"
          disabled={false}
        />
      </div>
      <Buttons
        fontSize={'20px'}
        width={'297px'}
        height={'56px'}
        isPrimary={true}
        isOutline={false}
        disabled={isUserNotLogged}
        children="Quero essa vaga!"
        onClick={IWantThisJob}
      />
      <div className="denounce-container">
        <ActionButton
          icon="015-denunciar"
          iconSize="16"
          onClick={denounce}
          children="Denunciar esta vaga"
          disabled={false}
        />
>>>>>>> 6eeb3a89567c97b3f209765ab0b8d0d5765b21e5
      </div>
      {loginButton}
     {denunciarButton}
    </div>
  );
}

export default JobDetails;
