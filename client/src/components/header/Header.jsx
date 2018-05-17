import React, {Component} from 'react';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

import '../styles/header.css';
import {links, buttons} from './links.jsx'

export default class Header extends Component{
  constructor(props){
    super(props);

    this.state = {
      headerMobile: 'header-mobile',
      headerLandscape: 'header-landscape',
    };
  }

  mobileRender(){
    return (
      <div className = {this.props.headerMobile}>
        <img src = "https://s9.postimg.cc/bfkkx6mhb/logo.png" className = "image"/>
        <div className = "header-title">MSAD 58</div>
        <IconMenu
          className = "icon"
          iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
        >
          {links}
        </IconMenu>
    </div>
    );
  }

  computerRender(){
    return (
      <div className = {this.state.headerLandscape}>
        {buttons}
      </div>
    )
  }

  render(){
    if ( this.props.showMobile ) {
      return this.mobileRender();
    } else {
      return this.computerRender();
    }
  }
}
