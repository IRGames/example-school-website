import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import GoogleLogin from 'react-google-login';
import EditAnnouncement from './create-announcement-form/EditAnnouncement.jsx';

import {cssAdmin} from './styles/admin.js';

export default class Admin extends Component {
  constructor(props){
    super(props);
    this.state = {
      showPopup: true,
      darkBackround: 'dark',
      value: '',
      admin: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.toggleAddAnnouncement = this.toggleAddAnnouncement.bind(this);
  }

  componentWillMount(){
    this.setState({
      darkBackground: 'dark',
      showPopup: true,
    });
  }

  toggleAddAnnouncement(response) {
    console.log('working');
    console.log(response);
    this.setState({
      showPopup: !this.state.showPopup,
    });
    if(this.state.showPopup) {
      this.setState({darkBackground: 'dark'});
    } else {
      this.setState({darkBackground: ''});
    }
  }

  checkIfAdmin(response) {
    if( response.googleId == "103019893079726283131" ){
      this.setState({admin: true});
    } else {
      this.setState({admin: false});
    }
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  renderPopup(){
    console.log(process.env.PASSWORD);
    console.log(process.env.BUTTS);
    if(this.state.showPopup){
      return(
        <div className = 'login_container'>
          <div className = 'login_options'>
            Please sign in
            <br/>
              <GoogleLogin
                clientId= {process.env.CLIENT_ID}
                buttonText="Login"
                onSuccess={this.toggleAddAnnouncement}
                onFailure={this.responseGoogle}
              />
          </div>

        </div>
      );
    } else{
      return null;
    }
  }

  render(){
    return(
      <div>
        <div className = {this.state.darkBackground}>
          THIS IS THE BACKGROUND STUFF.  AINT IT GREAT?!?
        </div>
        { this.renderPopup() }
        { this.state.admin ? <EditAnnouncement />: null }
      </div>
    );
  }

}
