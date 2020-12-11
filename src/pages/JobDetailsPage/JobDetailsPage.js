import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  JobDetails,
  TellAFriendModal,
  DenounceModal,
  ConfirmacaoModal,
} from '../../components/index';
import Layout from '../../components/layout/Layout';
import jobListMock from '../../_mocks/jobList';
import './JobDetailsPage.scss';

function JobDetailsPage() {
  const params = useParams();
  const [isItAble, setIsItAble] = useState(false);
  const [isDenouncing, setIsDenouncing] = useState(false);
  const [confirmationJob, setconfirmationJob] = useState(false);
  const [jobIndex, setJobIndex] = useState('');
  const [jobList, setJobList] = useState(jobListMock);

  const Item = jobList.filter(
    (item) => item['id'].toString() === params.indexOftoBeSaw,
  );

  function getTitle() {
    const title = Item.map((item) => item.title);
    const TitleReady = title.pop();
    return TitleReady;
  }

  const title = getTitle();

  function TellAFriend() {
    setIsItAble(true);
  }

  function closeTellAFriend() {
    setIsItAble(false);
  }

  function Favorite(toBeFavorite) {
    const indexOftoBeFavorite = jobList.indexOf(toBeFavorite);
    console.log("FAVORITE ::" + indexOftoBeFavorite)
    const newJobList = [...jobList];
    newJobList[indexOftoBeFavorite] = {
      ...jobList[indexOftoBeFavorite],
      favorite: !jobList[indexOftoBeFavorite].favorite,
    };
    setJobList(newJobList);
    console.log(
      'favoritou a vaga de ',
      toBeFavorite.title,
      'cujo index é:',
      indexOftoBeFavorite,
    );
  }

  function closeConfirmation() {
    setconfirmationJob(false);
  }

  function IWantThisJob() {
    console.log(
      'quero a vaga de ',
      title,
      'cujo index é:',
      params.indexOftoBeSaw,
    );
    setconfirmationJob(true);
  }

  function denounce() {
    setIsDenouncing(true);
  }

  function closeDenounce() {
    setIsDenouncing(false);
  }

  return (
    <Layout showHeader showBottomNavBar>
      <main>
        <JobDetails
          indexOfCardToBeDetailed={params.indexOftoBeSaw}
          isUserNotLogged={false}
          TellAFriend={TellAFriend}
          actionFavorite={Favorite}
          IWantThisJob={IWantThisJob}
          denounce={denounce}
        />
        {isItAble && (
          <TellAFriendModal
            jobTitle={title}
            jobIndex={params.indexOftoBeSaw}
            close={closeTellAFriend}
          />
        )}
        {isDenouncing && (
          <DenounceModal
            close={closeDenounce}
            jobTitle={title}
            jobIndex={params.indexOftoBeSaw}
          />
        )}
        {confirmationJob && (
          <ConfirmacaoModal closeConfirmation={closeConfirmation} />
        )}
      </main>
    </Layout>
  );
}


export default JobDetailsPage;
