import React, {Component} from 'react';
import Editor from 'react-pell';


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
      <div >
        <Editor
          defaultContent="Enter announcement text here"
          actions={[
            'bold',
            'italic',
            'underline',
            'strikethrough',
            'heading1',
            'heading2',
            'quote',
            'olist',
            'ulist',
            'line',
            'link',
            'image'
          ]}
          styleWithCSS = {true}
          containerClass = 'editWindow'
          onChange={this.handleChange.bind(this)} />
        BUTTS<br />
      stuff<br />
    stuff<br />
  stuff<br />
stuff<br />
      </div>
    );
  }
}

/*
'formatBlock',
'createLink',
'insertImage',
'undo',
'redo'
*/
