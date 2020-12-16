import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  JobDetails,
  TellAFriendModal,
  DenounceModal,
  ConfirmacaoModal,
} from "../../components/index";
import Layout from "../../components/layout/Layout";
import jobListMock from "../../_mocks/jobList";
import "./JobDetailsPage.scss";
import { getApiData } from "../../services/api.service";

function JobDetailsPage() {
  const params = useParams();
  const [isItAble, setIsItAble] = useState(false);
  const [isDenouncing, setIsDenouncing] = useState(false);
  const [confirmationJob, setconfirmationJob] = useState(false);
  const [item, setItem] = useState({});

  const jobDetailApi = async () => {
    const response = await getApiData("jobs/" + params.indexOftoBeSaw);
    setItem(response);
  };

  function favorite() {
    setItem({
      ...item,
      favorite: !item.favorite,
    });
  }

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
      "quero a vaga de ",
      item.title,
      "cujo index é:",
      params.indexOftoBeSaw
    );

    setconfirmationJob(true);
  }

  function denounce() {
    setIsDenouncing(true);
  }

  function closeDenounce() {
    setIsDenouncing(false);
  }

  useEffect(() => {
    jobDetailApi();
  }, []);

  return (
    <Layout showHeader showBottomNavBar>
      <main>
        <JobDetails
          job={item}
          isUserNotLogged={false}
          TellAFriend={TellAFriend}
          actionFavorite={favorite}
          IWantThisJob={IWantThisJob}
          denounce={denounce}
        />
        {isItAble && (
          <TellAFriendModal
            jobTitle={item.title}
            jobIndex={params.indexOftoBeSaw}
            close={closeTellAFriend}
            isdetailsPage={true}
          />
        )}
        {isDenouncing && (
          <DenounceModal
            close={closeDenounce}
            jobTitle={item.title}
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
