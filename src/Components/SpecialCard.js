import React from 'react';
import './SpecialCard.css';

function SpecialCard(props) {
  return (
    <div className="card">
      <img src={props.image}></img>
      <div className="header-container">
        <h1>{props.title}</h1>
        <h2>{props.price}</h2>
      </div>
      <p>{props.description}</p>
    </div>
  );
}

export default SpecialCard;
