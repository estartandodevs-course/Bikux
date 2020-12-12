import React, { useState, useEffect } from 'react';
import { Header } from '../../components';
import Layout from '../../components/layout/Layout';
import jobList from '../../_mocks/jobList';
import JobCard from '../../components/JobCard/JobCard';
import './Search.scss';
import Icon from '../../components/Icon/Icon';
import firebase from "firebase/app";

const Search = () => {
  const [search, setSearch] = useState('');

  const [filteredJob, setFilteredJobs] = useState(jobList);
  useEffect(() => {
    setFilteredJobs(
      jobList.filter((job) => {
        return job.title.toLowerCase().includes(search.toLowerCase());
      }),
    );
  }, [search]);
  function Favorite(toBeFavorite) {
    const indexOftoBeFavorite = filteredJob.indexOf(toBeFavorite);
    console.log('FAVORITE ::' + indexOftoBeFavorite);
    const newJobList = [...filteredJob];
    newJobList[indexOftoBeFavorite] = {
      ...filteredJob[indexOftoBeFavorite],
      favorite: !filteredJob[indexOftoBeFavorite].favorite,
    };
    setFilteredJobs(newJobList);
    console.log(
      'favoritou a vaga de ',
      toBeFavorite.title,
      'cujo index é:',
      indexOftoBeFavorite,
    );
  }

  const onSearch = () => {
    console.log(search);
  };

  const numVagas = filteredJob.length;
  const calcNumVagas =
    numVagas > 0 ? (
      <h4 className="heading">
        <span className="number">{numVagas}</span> vagas encontradas
      </h4>
    ) : (
      <h4 className="heading">nenhuma vaga encontrada</h4>
    );

  var isLoggedIn = firebase.auth().currentUser

  const header = isLoggedIn ? ( 
 <Header
   showBackButton
   showExitButton
   isSearchPage
   onChangeSearch={setSearch}
   onSearch={onSearch}
 />
 ):(<Header
   showBackButton
   isSearchPage
   onChangeSearch={setSearch}
   onSearch={onSearch}
 />
)
  return (
    <Layout showBottomNavBar>
     {header}
      <div className="container">
        <div className="container-num-vagas">
          <Icon name="010-atencao" />
          {calcNumVagas}
        </div>

        {filteredJob.map((job, index) => (
          <JobCard
            key={index}
            badgesList={job.badgesList}
            title={job.title}
            jobImage={job.jobImage}
            jobDescription={job.jobDescription}
            // actionTellAFriend={tellAFriend(job)}
            actionFavorite={() => Favorite(job)}
            indexOftoBeSaw={job.id}
            favorite={job.favorite}
          />
        ))}
      </div>
    </Layout>
  );
};

export default Search;
