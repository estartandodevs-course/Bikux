import React from 'react';
import "./JobCard.scss";

function JobCard (props) {

    const {Title, jobImage, jobDescription, BadgesList} = props;
    
    return (
        <div className = "job-card-container">
            <div className = "card-header">
                <img src={jobImage} alt="logo da empresa"/>
                <div className = "badges-and-title-container">
                    <h2 className = "title">{Title}</h2>
                    <div className = "badges-container">
                        <div className = "badges"></div>
                    </div>
                </div>
            </div>
            <p className = "job-description">{jobDescription}</p>
            <div className = "buttons-container">
                <button>test</button>
                <button>test</button>
                <button>test</button>
            </div>
        </div>
    );
}

export default JobCard;