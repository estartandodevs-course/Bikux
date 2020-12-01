import React, { useState } from "react";
import "./TellAFriendModal.scss";
import { Icon } from '../index'
import Buttons from "../Buttons/Buttons";

function TellAFriendModal (props) {

    const {close, jobTitle, jobIndex} = props;

    const [email, setEmail] = useState("");

    function createObjectToBeShared () {
        const JobAndFriendData = {
            title: jobTitle,
            index: jobIndex,
            friendEmail: email
        };

        console.log (JobAndFriendData);
        setTimeout (close, 200)
    }

    function Input (event) {
        setEmail (event.target.value);
    }
    
        return (
        <div className = "modal-container">

            <div className = "modal">

                <div className = "close-button-container" onClick = {close}>
                    <span className = "close-button">X</span>
                </div>

                <Icon name= "002-indique" size="64" />

                <h4 className = "title">Indique esta vaga para um amigo</h4>

                <span className = "email">E-mail</span>

                <input
                    className="tell-a-friend-input"
                    type="text"
                    onChange = {Input}
                    placeholder="Digite aqui o e-mail do seu amigo"
                />

                <Buttons isPrimary = {true} isOutline = {false} disabled = {false} children = "Indicar" onClick = {createObjectToBeShared}/>
                
            </div>

        </div>    
    );


}

export default TellAFriendModal;