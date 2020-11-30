import React from "react";
import "./TellAFriendModal.scss";
import { Icon } from '../index'
import { ActionButton } from "../";

function TellAFriendModal (props) {

    const {close} = props;
        return (
        <div className = "modal-container">

            <div className = "modal">

                <div className = "close-button-container" onClick = {close}>
                    <span className = "close-button">X</span>
                </div>

                <Icon name= "002-indique" size="64" />

                <h3>Indique esta vaga para um amigo</h3>

                <span>E-mail</span>

                <input
                    type="text"
                    placeholder="Digite aqui o e-mail do seu amigo"
                    className="tell-a-friend-input"
                />

                <ActionButton
                    className="button"
                    children = "Primary"
                />
                
            </div>

        </div>    
    );


}

export default TellAFriendModal;