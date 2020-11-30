import React from "react";
import JobCard from "../../components/JobCard/JobCard";
import jobList from "../../_mocks/jobList";
import "./Feed.scss";

function tellAFriend (toBeIndicated) {
  const indexOftoBeIndicated = jobList.indexOf(toBeIndicated);
  console.log ("indicou para vaga de ", toBeIndicated.title, "cujo index é:", indexOftoBeIndicated,);

}

function Favorite (toBeIndicated) {
  const indexOftoBeIndicated = jobList.indexOf(toBeIndicated);
  console.log ("favoritou a vaga de ", toBeIndicated.title, "cujo index é:", indexOftoBeIndicated,);

}

function SeeMore (toBeIndicated) {
  const indexOftoBeIndicated = jobList.indexOf(toBeIndicated);
  console.log ("quis ver a vaga de ", toBeIndicated.title, "cujo index é:", indexOftoBeIndicated,);

}


export const Feed = () => {
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
    </section>
  );
};
