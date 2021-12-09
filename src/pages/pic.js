import React, { Component} from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
export default class PicT extends Component {
  render() {
    return (
      <div>
        <li>
        <Link to='/make'>league of legends</Link>
        </li>
      </div>
    );
  }
};