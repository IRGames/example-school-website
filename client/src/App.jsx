import React, {Component} from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import Background from "./components/background/Background.jsx";
import Body from "./components/body/Body.jsx";

import { page } from "./components/styles/pages.css";

export default class App extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <MuiThemeProvider>
        <Router>
          <div>
            <Background />
            <Body />
            <Footer />
          </div>
        </Router>
      </MuiThemeProvider>
    )
  }
}
