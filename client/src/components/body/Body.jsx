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

var scroll = 0;

export default class Body extends Component{
  constructor(props){
    super(props);
    this.bodyRef = React.createRef();
    this.handleResize = this.handleResize.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.state = {
      showMobile: false,
      fixHeader: false,
      headerMobile: 'header-mobile',
      headerLandscape: 'header-landscape',
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
    this.bodyRef.current.addEventListener('scroll', this.handleScroll);
    if( window.innerWidth < 700 ) {
      this.setState({showMobile: true});
    }
  }

  //Logic so that state is not changed every scroll
  //This is done to prevent constantly re-rendering
  handleScroll(){
    scroll = this.bodyRef.current.scrollTop

    if( !this.state.fixHeader && scroll >= 356 ) {
      this.setState({
        fixHeader: true,
        headerMobile: 'header-mobile-fixed',
       });
    }
    if ( this.state.fixHeader && scroll < 356 ) {
      this.setState({
        fixHeader: false,
        headerMobile: 'header-mobile',
       });
    }
  }

  //Logic so that state is not changed every scroll
  //This is done to prevent constantly re-rendering
  handleResize(){
    if ( !this.state.showMobile && window.innerWidth < 700 ) {
      this.setState({showMobile: true});
    }
    if ( this.state.showMobile && window.innerWidth > 700 ) {
      this.setState({showMobile: false});
    }
  }

  render(){
    return (
      <Router>
        <div className = "body" ref={this.bodyRef} >
          <Title />
          <Header
            showMobile = {this.state.showMobile}
            headerMobile = {this.state.headerMobile}
            />
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
