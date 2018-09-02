import React, {Component} from 'react';

import './styles/title.css';

const TitleMobile= () => {
  return(
    <div className = "title-mobile">
      <img className = 'title-image-mobile' src =
        '../../../../resources/logo.png' /><br />
      <i>Empowering learners <br />to invent their future</i>
    </div>
  );
}

export default TitleMobile;
