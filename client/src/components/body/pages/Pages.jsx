import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Calendars from "./Calendars/Calendars.jsx";
import OurSchools from "./Our-Schools/Our-Schools.jsx";
import SchoolBoard from "./School-Board/School-Board.jsx";
import StudentParentResources from "./Student-Parent-Resources/Student-Parent-Resources.jsx";
import StaffResources from "./Staff-Resources/Staff-Resources.jsx";
import Employment from "./Employment/Employment.jsx";

import Header from "../../header/Header.jsx";

export default class Pages extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <Header
          headerMobile = {this.props.headerMobile}
          showMobile = {this.props.showMobile}
          fixHeader = {true}
          />
        <Route path="/pages/calendars" render = {() => (<Calendars />) } />
        <Route path="/pages/our-schools" render = {() => (<OurSchools />) } />
        <Route path="/pages/school-board" render = {() => (<SchoolBoard />) } />
        <Route path="/pages/student-parent-resources" render = {() => (<StudentParentResources />) } />
        <Route path="/pages/staff-resources" render = {() => (<StaffResources />) } />
        <Route path="/pages/employment" render = {() => (<Employment />) }/>
      </div>
    );
  }
}
