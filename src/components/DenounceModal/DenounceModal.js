import React, { useState } from "react";
import "./DenounceModal.scss";
import { Icon, Buttons, TextArea } from '../index'


function DenounceModal (props) {

    const {close, jobTitle, jobIndex} = props;
    const [denounce, setDenounce] = useState("");

    function sent () {
        const denounceContent = {
            user: "actualUser",
            jobTitle: jobTitle,
            jobIndex: jobIndex,
            denounce: denounce
        }

        console.log("denuncia:", denounceContent)

        setTimeout (close, 200);
    }

    function cancel () {
        setDenounce ("");
        setTimeout (close, 200);
    }


    function textData (event) {
        setDenounce(event.target.value);
    }

    return (
        <div className = "modal-container">
            <div className = "denounce-modal">
            <div className = "close-button-container" onClick = {close}>
                    <span className = "close-button">X</span>
            </div>

            <Icon name= "015-denunciar" size="64" />

            <h5 className = "title">Denunciar vaga</h5>

           <TextArea placeholder = "Descreva aqui o problema com essa vaga" borderNone = "none" backgroundColor = " #19232c33" width = "264px" height = "127px" onChange = {textData}/>
    
            <div className = "buttons-container">

                <div className = "button-send">
                <Buttons fontSize = {"12px"} width = {"116px"} height = {"32px"} isPrimary = {true} isOutline = {false} disabled = {false} children = "Enviar" onClick = {sent} />
                </div>
                
                <Buttons  fontSize = {"12px"} width = {"116px"} height = {"32px"} isPrimary = {false} isOutline = {true} disabled = {false} children = "Cancelar" onClick = {cancel}/>

            </div>

            </div>
        </div>
    )
}

export default DenounceModal;