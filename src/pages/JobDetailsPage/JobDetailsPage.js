import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { JobDetails, TellAFriendModal} from "../../components/index"
import jobList from "../../_mocks/jobList";
import "./JobDetailsPage.scss";

export function JobDetailsPage () {
    //jobTitle = {} 
    const params = useParams();
    const [isItAble, setIsItAble] = useState (false);

    const Title = jobList.filter ((item) => {
            const indexOfItem = jobList.indexOf(item);
            if (indexOfItem == params.indexOftoBeSaw) {
               return item; 
            } 
        })
    
    function getTitle () {
            const title = Title.map ((item) => item.title);
            const TitleReady = title.pop();
            return TitleReady;
    }

    const title = getTitle ();
    

    function TellAFriend () {
        setIsItAble (true);
    }
    
    function closeTellAFriend () {
        setIsItAble (false);
      }

      function favorite () {
        console.log ("favoritou a vaga de ", title, "cujo index é:", params.indexOftoBeSaw);
    }
    
    
    function IWantThisJob () {
        console.log ("quero a vaga de ", title, "cujo index é:", params.indexOftoBeSaw);
    }
    
    function denounce() {
        console.log ("denunciou de ", title, "cujo index é:", params.indexOftoBeSaw);
    }

    return (
        <main>
            <JobDetails indexOfCardToBeDetailed =  {params.indexOftoBeSaw} isUserNotLogged = {false} TellAFriend = {TellAFriend} favorite = {favorite} IWantThisJob = {IWantThisJob} denounce = {denounce} />
            {isItAble && <TellAFriendModal  jobTitle = {title} jobIndex = {params.indexOftoBeSaw} close = {closeTellAFriend}/>}
        </main>
    );
}