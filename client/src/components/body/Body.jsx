import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Pages from "./pages/Pages.jsx";
import Header from "../header/Header.jsx";
import Homepage from "./pages/Homepage/Homepage.jsx";
import Admin from '../admin/Admin.jsx';

import {pages} from "../header/links.jsx";

import "../styles/pages.css";
import "../styles/body.css";

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
      headerMiddle: false,
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
    this.bodyRef.current.addEventListener('scroll', this.handleScroll);
    if( window.innerWidth < 700 ) {
      this.setState({showMobile: true});
    } else if ( window.innerWidth < 1350 ) {
      this.setState({headerMiddle: true});
    }
  }

  //Logic so that state is not changed every scroll
  //This is done to prevent constant re-rendering
  handleScroll(){
    scroll = this.bodyRef.current.scrollTop;

    if( !this.state.fixHeader && scroll >= 424 ) {
      this.setState({
        fixHeader: true,
        headerMobile: 'header-mobile-fixed',
       });
    }
    if ( this.state.fixHeader && scroll < 424 ) {
      this.setState({
        fixHeader: false,
        headerMobile: 'header-mobile',
       });
    }
  }

  //Logic so that state is not changed every scroll
  //This is done to prevent constant re-rendering
  handleResize(){
    if ( !this.state.showMobile && window.innerWidth < 800 ) {
      this.setState({showMobile: true});
    }
    if ( this.state.showMobile && window.innerWidth > 800 ) {
      this.setState({showMobile: false});
    }
    if(window.innerWidth > 800){
      if ( !this.state.headerMiddle && window.innerWidth < 1350){
        this.setState({headerMiddle: true});
      }
      if( this.state.headerMiddle && window.innerWidth > 1350){
        this.setState({headerMiddle: false});
      }
    }
  }

  render(){
    return (
      <Router>
        <div className = "body" ref={this.bodyRef} >
          <Route exact = {true} path="/" render = {() => (
              <Homepage
                showMobile = {this.state.showMobile}
                headerMobile = {this.state.headerMobile}
                fixHeader = {this.state.fixHeader}
                headerMiddle = {this.state.headerMiddle}
                />)} />
          <Route path="/pages/" render = {() => (
              <Pages
                showMobile = {this.state.showMobile}
                headerMobile = {this.state.headerMobile}
                />)} />
              <Route path="/admin/" component = {Admin} />
        </div>
      </ Router>
    );
  }

}
