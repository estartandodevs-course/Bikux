import React, { useState } from "react";
import { Header } from "../../components";
import Layout from "../../components/layout/Layout";
import jobList from "../../_mocks/jobList";
import JobCard from "../../components/JobCard/JobCard";
import "./Search.scss";

const Search = () => {
  const [search, setSearch] = useState("");

  const searchJob = jobList.filter((job) => {
    return job.title.toLowerCase().includes(search.toLowerCase());
  });

  const onSearch = () => {
    console.log(search);
  };

  return (
    <Layout showBottomNavBar>
      <Header
        showBackButton
        showExitButton
        isSearchPage
        onChangeSearch={setSearch}
        onSearch={onSearch}
      />
      <div className="container">
        {searchJob.map((job, index) => (
          <JobCard
            key={index}
            badgesList={job.badgesList}
            title={job.title}
            jobImage={job.jobImage}
            jobDescription={job.jobDescription}
            // actionTellAFriend={tellAFriend(job)}
            // actionFavorite={Favorite(job)}
            indexOftoBeSaw={job.id}
          />
        ))}
      </div>
    </Layout>
  );
};

export default Search;
