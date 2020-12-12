import React from "react";
import Icon from "../Icon/Icon";
import "./SendFilesBtn.scss";

function SendFilesBtn({ text, icon, iconSize }) {
  return (
    <div className="btn">
      <p className="btn-texto">{text}</p>
      <button className="btn-icon">
        <Icon name={icon} size={iconSize} />
      </button>
    </div>
  );
}

export default SendFilesBtn;
