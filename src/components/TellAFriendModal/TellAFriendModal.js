import React, { useState } from "react";
import "./TellAFriendModal.scss";
import { Icon, InputField } from '../index'
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

            <div className = "modal-tell-a-friend">

                <div className = "close-button-container" onClick = {close}>
                    <span className = "close-button">✕</span>
                </div>

                <Icon name= "002-indique" size="64" />

                <h4 className = "title">Indique esta vaga para um amigo</h4>

                <InputField label = {"E-mail"} type = {"text"} placeholder = {"Digite aqui o e-mail do seu amigo"}  width = {"297px"} height = {"35.9px"} onChange = {Input}/>

                <div className = "buttons-container" >
                    <Buttons width = {"297px"} height = {"56px"} fontSize = {"20px"} isPrimary = {true} isOutline = {false} disabled = {false} children = "Indicar" onClick = {createObjectToBeShared}/>

                    <span className = "or"> ou </span>

                    <Buttons  img = "logos_whatsapp" width = {"198px"} height = {"56px"} fontSize = {"20px"} isPrimary = {true} isOutline = {false} disabled = {false} children = "Via WhatsApp" onClick = {createObjectToBeShared}/>

                </div>
                
            </div>

        </div>    
    );


}

export default TellAFriendModal;