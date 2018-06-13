import React, {Component} from 'react';

import '../../../../styles/announcement.css';

export default class Announcement extends Component{
  constructor(props){
    super(props);

    this.state = {
      style: {
        backgroundColor: 'white',
      }
    }
  }

/*
  this.state = {
    title: '',
    date: '',

  }*/

  //title
  //date

  render(){
    return <div>ANNOUNCEMENTS</div>
    /*
    return (
      <div style={this.state.style}>
        <div className = 'header-grid'>
          <div>
          </div>
          <div className = 'title'>
            {this.props.title}
          </div>
          <div>
            {this.props.date}
          </div>
        </div>

        <div className = 'body'>

        </div>

        <div className = 'footer'>
        </div>
        <hr />
      </div>
    );*/
  }
}
