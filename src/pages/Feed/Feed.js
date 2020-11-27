import React from "react";
import JobCard from "../../components/JobCard/JobCard";
import jobList from "../../jobList";

function createFeed(item) {
  return (
    <JobCard>
      key={item.id}
      badgesList={item.badgesList}
      title={item.title}
      jobImage={item.jobImage}
      jobDescription={item.jobDescription}
    </JobCard>
  );
}

export const Feed = () => {
  return (
    <div>
      {/* <JobCard
      badgesList={["Leblon", "CLT", "sem experiência"]}
      title="Assistente de Criação"
      jobImage="https://picsum.photos/100/100?random=2"
      jobDescription="Empresa XPTO procura assistente de criação para atuar em agência. "
    /> */}
      {jobList.map(createFeed)}
    </div>
  );
};
