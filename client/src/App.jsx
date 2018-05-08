import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import Homepage from "./components/pages/Homepage/Homepage.jsx";
import Calendars from "./components/pages/Calendars/Calendars.jsx";
import OurSchools from "./components/pages/Our-Schools/Our-Schools.jsx";
import SchoolBoard from "./components/pages/School-Board/School-Board.jsx";
import StudentParentResources from "./components/pages/Student-Parent-Resources/Student-Parent-Resources.jsx";
import StaffResources from "./components/pages/Staff-Resources/Staff-Resources.jsx";
import Employment from "./components/pages/Employment/Employment.jsx";

import { hr } from './components/styles/app.css';

export default class App extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <MuiThemeProvider>
        <Router>
          <div>
            <Header />
            <hr />
            <Route path="/calendars" component={Calendars} />
            <Route path="/our-schools" component={OurSchools} />
            <Route path="/school-board" component={SchoolBoard} />
            <Route path="/student-parent-resources" component={StudentParentResources} />
            <Route path="/staff-resources" component={StaffResources} />
            <Route path="/employment" component={Employment} />
            <Footer />
          </div>
        </Router>
      </MuiThemeProvider>
    )
  }
}
