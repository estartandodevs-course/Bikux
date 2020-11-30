import React, { useState } from "react";
import {JobCard, TellAFriendModal} from "../../components/index";
import jobList from "../../_mocks/jobList";
import "./Feed.scss";


export const Feed = () => {

  const [isItAble, setIsItAble] = useState (false);
  
  function tellAFriend (toBeIndicated) {
    const indexOftoBeIndicated = jobList.indexOf(toBeIndicated);
    console.log ("indicou para vaga de ", toBeIndicated.title, "cujo index é:", indexOftoBeIndicated);
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
    const indexOftoBeSaw = jobList.indexOf(toBeSaw);
    console.log ("quis ver a vaga de ", toBeSaw.title, "cujo index é:", indexOftoBeSaw);

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
          />
      ))}

    {isItAble && <TellAFriendModal  close = {closeTellAFriend}/>}

    </section>
  );
};
