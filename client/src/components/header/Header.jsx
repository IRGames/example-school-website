import React, {Component} from 'react';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import HeaderMobile from './HeaderMobile.jsx';
import HeaderMiddle from './HeaderMiddle.jsx';
import HeaderLandscape from './HeaderLandscape.jsx';

import '../styles/header.css';
import {links, buttons, fixedButtons} from './links.jsx'

export default class Header extends Component{
  constructor(props){
    super(props);
  }

  render(){
    if ( this.props.showMobile ) {
      return <HeaderMobile headerMobile = {this.props.headerMobile}/>
    } else if ( this.props.headerMiddle ) {
      return <HeaderMiddle fixHeader = {this.props.fixHeader}/>
    } else {
      return <HeaderLandscape fixHeader = {this.props.fixHeader}/>
    }
  }
}
