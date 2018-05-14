import React, {Component} from 'react';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

import { header, icon, image } from '../styles/header.css';
import links from './links.jsx'

export default class Header extends Component{
  constructor(props){
    super(props);

    this.state = {
      headerClass: 'header',
    };

  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    var value = document.body.scrollTop;
    console.log(value);
  }

  render(){
    return(
      <div className = {header}>
        <img src = "https://s9.postimg.cc/bfkkx6mhb/logo.png" className = "image"/>
        <div className = "title">MSAD 58</div>
        <IconMenu
          className = "icon"
          iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
        >
          {links}
        </IconMenu>
      </div>
    );
  }

}
