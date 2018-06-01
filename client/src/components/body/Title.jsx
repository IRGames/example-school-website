import React from 'react';

import '../styles/title.css'

const Title = () => (
  <div className = 'title-container title-grid-container'>
    <div className = 'background1'>
      <img className = 'title-image' src =
        '../../../../resources/logo.png' />
    </div>
    <div></div>
    <i className = "title">Empowering learners <br />to invent their future</i>
  </div>
);

export default Title;
