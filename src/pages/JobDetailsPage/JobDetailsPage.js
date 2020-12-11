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
  const [item, setItem] = useState(
    jobListMock.find((item) => item['id'].toString() === params.indexOftoBeSaw),
  );

  function getTitle() {
    const title = item.title;

    return title;
  }

  function favorite() {
    setItem({
      ...item,
      favorite: !item.favorite,
    });
  }

  const title = getTitle();

  function TellAFriend() {
    setIsItAble(true);
  }

  function closeTellAFriend() {
    setIsItAble(false);
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
          actionFavorite={favorite}
          IWantThisJob={IWantThisJob}
          denounce={denounce}
          favorite={item.favorite}
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
