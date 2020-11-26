import React from 'react'
import './Icon.scss'

const iconImg = (strIcon) => require(`../../assets/icons/${strIcon}.png`).default

const Icon = ({ name, size = 24 }) => {
  return (
    <img src={iconImg(name)} alt="Ícone" style={{height: `${size}px`}} className="Icon" />
  );
}
 
export default Icon;
