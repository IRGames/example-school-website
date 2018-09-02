import React, {Component} from 'react';

import TitleLandscape from './TitleLandscape.jsx';
import TitleMiddle from './TitleMiddle.jsx';
import TitleMobile from './TitleMobile.jsx';
import './styles/title.css';

export default class Title extends Component{
  constructor(props){
    super(props);
  }

  render(){
    if ( this.props.mobile ){
      return <TitleMobile />
    } else if (this.props.headerMiddle){
      return <TitleMiddle />
    } else {
      return <TitleLandscape />;
    }
  }
}


/*
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

const MobileTitle = () => (
  <div>
    SHIT
    {this.props.mobile}
  </div>
);
*/
