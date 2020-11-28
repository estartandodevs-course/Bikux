import React from "react";
import JobCard from "../../components/JobCard/JobCard";
import jobList from "../../jobList";

export const Feed = () => {
  return (
    <section>
      {jobList.map((info) => (
        <JobCard
          id={info.id}
          badgesList={info.badgesList}
          title={info.title}
          jobImage={info.jobImage}
          jobDescription={info.jobDescription}
        />
      ))}
    </section>
  );
};
