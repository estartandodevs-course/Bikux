import React from 'react';
import Badges from '../Badges/Badges';
import { ActionButton } from '../';
import './JobDetails.scss';
//import { useHistory } from "react-router-dom";
import jobList from '../../_mocks/jobList';
import Buttons from '../Buttons/Buttons';


function JobDetails(props) {
  const {
    indexOfCardToBeDetailed,
    TellAFriend,
    //actionFavorite,
    IWantThisJob,
    //denounce,
    //favorite,
  } = props;

  function getDataFromCardToBeDetailed(indexOfCardToBeDetailed) {
    return jobList.filter(
      (item) => item['id'].toString() === indexOfCardToBeDetailed,
    );
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

//checa se o usuário está autenticado

//const history = useHistory();


//let vagaButton = isLoggedIn  ? (
//  <Buttons
//  fontSize={'20px'}
///  width={'297px'}
//  height={'56px'}
//  isPrimary={true}
//  isOutline={false}
//  children="Quero essa vaga!"
//  onClick={IWantThisJob}/>) : 
//  (<Buttons fontSize = {"20px"} 
//    width = {"297px"} 
//    height = {"56px"} 
//    isPrimary = {true} 
//    isOutline = {false} 
 //   backgroundColor = "#c5c6c7"
 //   color = "#19232c40"
  //  children = "Necessário realizar login" 
  //  onClick = {() => history.push("/login")}/>);

//let favoritarButton = isLoggedIn ? (
 // <ActionButton
 // icon={favorite ? '024-favoritado' : '014-favoritar'}
 // iconSize="16"
 // onClick={actionFavorite}
 // disabled={false}/>) : 
  //("");

//let denunciarButton = isLoggedIn ? (
//  <div className="denounce-container">
//    <ActionButton
//      icon="015-denunciar"
//      iconSize="16"
//      onClick={denounce}
//      children="Denunciar esta vaga"
//      disabled={false}/>
//    </div>) : 
//  (<div className="denounce-container"> 
//    <ActionButton
//      icon="023-login"
 //     iconSize="16"
//    onClick = {() => history.push("/login")}
 //     children = "Entrar"
//      disabled = {false}/>
//  </div>);
  
//  const Details = getDetails();

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
      <p className="details">{getDetails()}</p>
      <div className="buttons-container-details">
        <ActionButton
          className="button"
          icon="002-indique"
          iconSize="16"
          onClick={TellAFriend}
          children="Indicar para amigo"
          disabled={false}/>

      </div>
      <Buttons
      fontSize={'20px'}
      width={'297px'}
      height={'56px'}
      isPrimary={true}
      isOutline={false}
      children="Quero essa vaga!"
      onClick={IWantThisJob}/>
    </div>
  );
}

export default JobDetails;
