import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';


import { header } from '../styles/header.css';
import links from './links.jsx'

const Header = () => (
    <div className = "header">
      <IconMenu
        iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
        anchorOrigin={{horizontal: 'left', vertical: 'top'}}
        targetOrigin={{horizontal: 'left', vertical: 'top'}}
      >
        {links}
      </IconMenu>
      <div className = "title">MSAD 58</div>
    </div>
);

export default Header;
