import React, {Component} from 'react';
import Title from './Title/Title.jsx';
import Header from '../../../header/Header.jsx';
import Announcement from './Announcements/Announcement.jsx';
import EditAnnouncement from './Announcements/EditAnnouncement.jsx';
import { Link } from 'react-router-dom';

import "../../../styles/homepage.css";
import "../../../styles/pages.css";

export default class Content extends Component {
  constructor(props){
    super(props);
    this.state = {
      showPopup: false
    };
  }

  toggleAddAnnouncement() {
    console.log('touched');
    console.log(fetch('/butt'));
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  render(){
    return(
      <div>
        <Title
          mobile = {this.props.showMobile}
          headerMiddle = {this.props.headerMiddle}
          />
        <Header
          headerMobile = {this.props.headerMobile}
          showMobile = {this.props.showMobile}
          fixHeader = {this.props.fixHeader}
          headerMiddle = {this.props.headerMiddle}
          />
        <div className = 'page'>
          THIS <br />

        <Announcement
          title = {'SHIT'}
          date = {'PISS'}
          />

        <div className = 'edit-announcement-link'>
          <a href='/admin/'>
            <div> HEY HEY HEY</div>
          </a>

          <button onClick = {this.toggleAddAnnouncement.bind(this)}>Touch me</button>
        </div>
      </div>
      {this.state.showPopup ? <EditAnnouncement />: null}
    </div>
  );
}

}
