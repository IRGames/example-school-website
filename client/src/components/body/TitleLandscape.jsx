import React, {Component} from 'react';

import '../styles/title.css';

const TitleLandscape = () => {
  return(
    <div className = 'title-grid-container'>
      <img className = 'title-image-landscape' src =
        '../../../../resources/logo.png' />
      <div></div>
      <i className = "title-landscape">Empowering learners <br />to invent their future</i>
    </div>
  );
}

export default TitleLandscape;
