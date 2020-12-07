import React, { useState } from 'react';
import { JobCard, TellAFriendModal } from '../../components/index';
import Layout from '../../components/layout/Layout';
import jobList from '../../_mocks/jobList';
import './Feed.scss';

export const Feed = () => {
  const [isItAble, setIsItAble] = useState(false);
  const [jobTitle, setJobTitle] = useState('');
  const [jobIndex, setJobIndex] = useState('');

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
    console.log(
      'favoritou a vaga de ',
      toBeFavorite.title,
      'cujo index é:',
      indexOftoBeFavorite,
    );
  }

  return (
    <Layout showHeader showBottomNavBar>
      <section className="container">
        {jobList.map((info) => (
          <JobCard
            key={info.id}
            badgesList={info.badgesList}
            title={info.title}
            jobImage={info.jobImage}
            jobDescription={info.jobDescription}
            actionTellAFriend={tellAFriend.bind(this, info)}
            actionFavorite={Favorite.bind(this, info)}
            indexOftoBeSaw={info.id}
          />
        ))}
        {isItAble && (
          <TellAFriendModal
            jobTitle={jobTitle}
            jobIndex={jobIndex}
            close={closeTellAFriend}
          />
        )}
      </section>
    </Layout>
  );
};
