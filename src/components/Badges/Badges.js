import React from 'react';
import "./Badges.scss";

function Badges (props) {
    const {badgesList = []} = props;

    return (
        badgesList.map((badge, index) => {
            return (
                <div className= "badges" key = {index}>
                    <span className = "badge-content">{badge}</span>
                </div>
            );
        })
    );

}

export default Badges;