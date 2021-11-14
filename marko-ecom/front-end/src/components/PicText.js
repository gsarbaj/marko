import React from 'react';

const PicText = props => {
  return(
    <div className="PicText__wrapper">
      <h3 className="PicText__title">{props.title}</h3>
      <span className="PicText__text">{props.text}</span>
      <img className="PicText__img" src={props.src} alt={props.alt} width={550}/>
    </div>
  )
}

export default PicText