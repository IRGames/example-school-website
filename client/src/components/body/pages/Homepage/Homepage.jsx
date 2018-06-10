import React, {Component} from 'react';
import Title from '../../Title.jsx';
import Header from '../../../header/Header.jsx';
import "../../../styles/homepage.css";
import "../../../styles/pages.css";

export default class Content extends Component {
  constructor(props){
    super(props);
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
          IS <br />
        THE <br />
      HOMEPAGE <br />
      THIS <br />
    IS <br />
    THE <br />
    HOMEPAGE <br />
    THIS <br />
    <hr />
    IS <br />
    THE <br />
    HOMEPAGE <br />
    THIS <br />
    IS <br />
    THE <br />
    HOMEPAGE <br />
    THIS <br />
    IS <br />
    THE <br />
    HOMEPAGE <br />
    THIS <br />
    IS <br />
    THE <br />
    HOMEPAGE <br />
    THIS <br />
    IS <br />
    THE <br />
    HOMEPAGE <br />
    THIS <br />
    IS <br />
    THE <br />
    HOMEPAGE <br />
    THIS <br />
    IS <br />
    THE <br />
    HOMEPAGE <br />
    THIS <br />
    IS <br />
    THE <br />
    HOMEPAGE <br />    HOMEPAGE <br />
        THIS <br />
        IS <br />
        THE <br />
        HOMEPAGE <br />    HOMEPAGE <br />
            THIS <br />
            IS <br />
            THE <br />
            HOMEPAGE <br />    HOMEPAGE <br />
                THIS <br />
                IS <br />
                THE <br />
                HOMEPAGE <br />    HOMEPAGE <br />
                    THIS <br />
                    IS <br />
                    THE <br />
                    HOMEPAGE <br />    HOMEPAGE <br />
                        THIS <br />
                        IS <br />
                        THE <br />
                        HOMEPAGE <br />

          </div>
      </div>

    )
  }

}
