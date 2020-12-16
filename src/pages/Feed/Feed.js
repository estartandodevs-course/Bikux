import React, { useState, useEffect } from "react";
import { JobCard, TellAFriendModal } from "../../components/index";
import Layout from "../../components/layout/Layout";
import { getApiData } from "../../services/api.service";
import "./Feed.scss";

const Feed = () => {
  const [isItAble, setIsItAble] = useState(false);
  const [jobTitle, setJobTitle] = useState("");
  const [jobIndex, setJobIndex] = useState("");
  const [jobList, setJobList] = useState([]);

  const jobListApi = async () => {
    const response = await getApiData("jobs");
    setJobList(response);
  };

  function tellAFriend(toBeIndicated) {
    const indexOftoBeIndicated = jobList.indexOf(toBeIndicated);
    setJobTitle(toBeIndicated.title);
    setJobIndex(indexOftoBeIndicated);
    setIsItAble(true);
  }

  function closeTellAFriend() {
    setIsItAble(false);
  }

  function Favorite(toBeFavorite) {
    const indexOftoBeFavorite = jobList.indexOf(toBeFavorite);
    console.log("FAVORITE ::" + indexOftoBeFavorite);
    const newJobList = [...jobList];
    newJobList[indexOftoBeFavorite] = {
      ...jobList[indexOftoBeFavorite],
      favorite: !jobList[indexOftoBeFavorite].favorite,
    };
    setJobList(newJobList);
    console.log(
      "favoritou a vaga de ",
      toBeFavorite.title,
      "cujo index é:",
      indexOftoBeFavorite
    );
  }

  useEffect(() => {
    jobListApi();
  }, []);

  return (
    <Layout showHeader showBottomNavBar>
      <section className="container">
        {jobList.map((info) => (
          <JobCard
            key={info.id}
            badgesList={info.badges}
            title={info.title}
            jobImage={info.imgSrc}
            jobDescription={info.description}
            actionTellAFriend={tellAFriend.bind(this, info)}
            actionFavorite={Favorite.bind(this, info)}
            indexOftoBeSaw={info.id}
            favorite={info.favorite}
          />
        ))}
        {isItAble && (
          <TellAFriendModal
            jobTitle={jobTitle}
            jobIndex={jobIndex}
            isdetailsPage={false}
            close={closeTellAFriend}
          />
        )}
      </section>
    </Layout>
  );
};

export default Feed;
