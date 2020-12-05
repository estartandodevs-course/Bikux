import React, { useState } from "react";
import "./DenounceModal.scss";
import { Icon, Buttons } from '../index'


function DenounceModal () {
    return (
        <div className = "modal-container">
            <div className = "denounce-modal">
            <div className = "close-button-container" onClick = {"close"}>
                    <span className = "close-button">X</span>
            </div>

            <Icon name= "015-denunciar" size="64" />

            <h5 className = "title">Denunciar vaga</h5>

            <textarea className = "text-area" placeholder = "Descreva aqui o problema com essa vaga" ></textarea>
    
            <div className = "buttons-container">

                <div className = "button-send">
                <Buttons fontSize = {"12px"} width = {"116px"} height = {"32px"} isPrimary = {true} isOutline = {false} disabled = {false} children = "Enviar" onClick = {"createObjectToBeShared"} />
                </div>
                
                <Buttons  fontSize = {"12px"} width = {"116px"} height = {"32px"} isPrimary = {false} isOutline = {true} disabled = {false} children = "Indicar" onClick = {'createObjectToBeShared'}/>

            </div>

            </div>
        </div>
    )
}

export default DenounceModal;