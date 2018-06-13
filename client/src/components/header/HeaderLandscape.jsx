import React, {Component} from 'react';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

import '../styles/header.css';
import {links, buttons, fixedButtons} from './links.jsx'

export default class Header extends Component{
  constructor(props){
    super(props);
  }

  render(){
    if( !this.props.fixHeader ){
      return (
        <div>
          <div className = "button-grid-landscape">
            {buttons}
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div className = 'header-landscape-fixed'>
            <div className = "button-grid-fixed">
              <div className = "picture">
                <img className = 'image' src =
                  '../../../../resources/logo.png' />
              </div>
              {fixedButtons}
            </div>
          </div>
          <div className = 'filler'></div>
        </div>
      );
    }
  }
}
