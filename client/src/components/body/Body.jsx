import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Calendars from "./pages/Calendars/Calendars.jsx";
import OurSchools from "./pages/Our-Schools/Our-Schools.jsx";
import SchoolBoard from "./pages/School-Board/School-Board.jsx";
import StudentParentResources from "./pages/Student-Parent-Resources/Student-Parent-Resources.jsx";
import StaffResources from "./pages/Staff-Resources/Staff-Resources.jsx";
import Employment from "./pages/Employment/Employment.jsx";
import Homepage from "./pages/Homepage/Homepage.jsx";

import Title from './Title.jsx';
import Header from "../header/Header.jsx"


import { page } from "../styles/pages.css";
import { body } from "../styles/body.css";

export default class Body extends Component{
  constructor(props){
    super(props);

    this.handleResize = this.handleResize.bind(this);

    this.state = {
      showMobile: false,
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
    if( window.innerWidth < 700 ) {
      this.setState({showMobile: true});
    }
  }

  handleResize(){
    if ( window.innerWidth < 700 ) {
      this.setState({showMobile: true});
    } else {
      this.setState({showMobile: false});
    }
  }

  render(){
    return (
      <Router>
        <div className = "body">
          <Title />
          <Header showMobile = {this.state.showMobile}/>
          <Route exact = {true} path="/" component={Homepage} />
          <Route path="/calendars" component={Calendars} />
          <Route path="/our-schools" component={OurSchools} />
          <Route path="/school-board" component={SchoolBoard} />
          <Route path="/student-parent-resources" component={StudentParentResources} />
          <Route path="/staff-resources" component={StaffResources} />
          <Route path="/employment" component={Employment} />
        </div>
      </ Router>
    );
  }

}
