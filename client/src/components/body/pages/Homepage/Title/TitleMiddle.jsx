import React, {Component} from 'react';

import '../../../../styles/title.css';

const TitleMiddle= () => {
  return(
    <div className = "title-grid-container">
      <img className = 'title-image-landscape' src =
        '../../../../resources/logo.png' /><br />
      <i className = "title-middle">Empowering learners <br />to invent their <br />future</i>
    </div>
  );
}

export default TitleMiddle;
