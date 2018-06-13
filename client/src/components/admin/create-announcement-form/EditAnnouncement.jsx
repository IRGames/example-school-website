import React, {Component} from 'react';
import Editor from 'react-pell';

import '../../../../styles/editannouncement.css';

export default class EditAnnouncement extends Component{
  constructor(props){
    super(props);
    this.bodyRef = React.createRef();
    this.state = {
      style: {
        backgroundColor: 'white',
      }
    }
  }

  handleChange(html) {
    console.log(html)
  }

  render(){
    return (
      <div className = 'editWindow'>
        <Editor onChange={this.handleChange.bind(this)} />
        BUTTs<br />
      stuff<br />
    stuff<br />
  stuff<br />
stuff<br />
      </div>
    );
  }
}
