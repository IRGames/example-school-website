import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';

import { link } from '../styles/header.css';

var pages =
[
    {address: "/calendars", name: "Calendars"},
    {address: "/our-schools", name: "Our Schools"},
    {address: "/school-board", name: "School Board"},
    {address: "/student-parent-resources", name: "Student/Parent Resources"},
    {address: "/staff-resources", name: "Staff Resources"},
    {address: "/employment", name: "Employment"},
    {address: "/", name: "Homepage"}
];

//Create a raised button that links to each page
export var links = [];
for (var i = 0; i < pages.length; i++){
  links.push(
    <Link className = "link " to={pages[i].address}>
      <MenuItem primaryText = {pages[i].name} />
    </Link>
  );
}

//oh god... look away
export var buttons = [];
buttons.push(
  <div>
  <div>
    <Link to={pages[0].address}>
      <div className = "button">{pages[0].name}</div>
    </Link>
    <Link to={pages[1].address}>
      <div className = "button">{pages[1].name}</div>
    </Link>
    <Link to={pages[2].address}>
      <div className = "button">{pages[2].name}</div>
    </Link>
    <br />
    <hr />
  </div>
  <div>
    <Link to={pages[3].address}>
      <div className = "button">{pages[3].name}</div>
    </Link>
    <Link to={pages[4].address}>
      <div className = "button">{pages[4].name}</div>
    </Link>
    <Link to={pages[5].address}>
      <div className = "button">{pages[5].name}</div>
    </Link>
    <Link to={pages[6].address}>
      <div className = "button">{pages[6].name}</div>
    </Link>
    <hr />
  </div>
  </div>
);
