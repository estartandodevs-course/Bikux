import React, {useState } from "react";
import {JobCard, TellAFriendModal} from "../../components/index";
import jobList from "../../_mocks/jobList";
import "./Feed.scss";


export const Feed = () => {

  const [isItAble, setIsItAble] = useState (false);
  const [jobTitle, setJobTitle] = useState ('');
  const [jobIndex, setJobIndex] = useState ('');
  const [IndexOftoBeSaw, SetIndexOftoBeSaw] = useState ("-1");
  



  
  function tellAFriend (toBeIndicated) {
    const indexOftoBeIndicated = jobList.indexOf(toBeIndicated);
    setJobTitle (toBeIndicated.title);
    setJobIndex (indexOftoBeIndicated);
    setIsItAble (true);

  }

  function closeTellAFriend () {
    setIsItAble (false);
  }

  function Favorite (toBeFavorite) {
    const indexOftoBeFavorite = jobList.indexOf(toBeFavorite);
    console.log ("favoritou a vaga de ", toBeFavorite.title, "cujo index é:", indexOftoBeFavorite);

  }
    
  function SeeMore (toBeSaw) {
    SetIndexOftoBeSaw(jobList.indexOf(toBeSaw));
    
  }

  return (
    <section className="container">
      {jobList.map((info) => (
        <JobCard
          key = {info.id}
          badgesList = {info.badgesList}
          title = {info.title}
          jobImage = {info.jobImage}
          jobDescription = {info.jobDescription}
          actionTellAFriend = {tellAFriend.bind(this, info)} 
          actionFavorite = {Favorite.bind(this, info)}
          actionSeeMore = {SeeMore.bind(this, info)}
          indexOftoBeSaw = {IndexOftoBeSaw}

          />
      ))}
      {isItAble && <TellAFriendModal  jobTitle = {jobTitle} jobIndex = {jobIndex} close = {closeTellAFriend}/>}
    </section>
  );
};
