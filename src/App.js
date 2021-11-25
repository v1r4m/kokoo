import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Home from "./pages/home"
import List from "./pages/list"
import Write from "./pages/write"
import NewT from "./pages/new"


export default function BasicExample() {
  return (
    <div>
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/write">write</Link>
            </li>
            <li>
              <Link to="/list">list</Link>
            </li>
            <li>
              <Link to="/new">new</Link>
            </li>
          </ul>

          <hr />
          <Routes>
            <Route path="/" element={<Home/>}>
            </Route>
            <Route path="/list" element={<List/>}>
            </Route>
            <Route path="/write" element={<Write/>}>
            </Route>
            <Route path="/new" element={<NewT/>}>
            </Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

// You can think of these components as "pages"
// in your app.


