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
    return (
      <div className = {this.props.headerMobile}>
        <img src = "../../../../resources/logo.png" className = "image"/>
        <div className = "header-mobile-title">MSAD 58</div>
        <IconMenu
          className = "icon"
          iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
        >
          {links}
        </IconMenu>
      </div>
    )
  }
}
