import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { View, StyleSheet } from "react-native";
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
//import Item from '@mui/material/Item';

import Home from "./pages/home";
import List from "./pages/list";
import Write from "./pages/write";
import NewT from "./pages/new";
import MakeT from "./pages/make";
import PicT from "./pages/pic";


export default function BasicExample() {
  return (
    <div>
      <Router>
        <div>
          <ul>
            {/* <View style={styles.viewContainer}>
              <View style={styles.writeContainer}>
              </View>
              <View style={styles.makeContainer}>
              </View>
            </View> */}

            <Button variant="contained">
              <Link to="/">Home</Link>
            </Button>
            {/* <Button variant="contained">
              <Link to="/write">write</Link>
            </Button> */}
            {/* <Button variant="contained">
              <Link to="/list">list</Link>
            </Button> */}
            <Button variant="contained">
              <Link to="/new">new</Link>
            </Button>
            <Button variant="contained">
              <Link to="/make">make</Link>
            </Button>
          </ul>

          <hr />
          {/* router is in header */}
          <Routes>
            <Route path="/" element={<Home/>}>
            </Route>
            {/* <Route path="/list" element={<List/>}>
            </Route> */}
            <Route path="/new" element={<NewT/>}>
            </Route>
            <Route path="/make" element={<MakeT/>}>
            </Route>
            <Route path="/pic" element={<PicT/>}>
            </Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   writeContainer: {
//     flex: 1,
//     backgroundColor: 'red',
//   },
//   makeContainer: {
//     flex: 1,
//     backgroundColor: 'green',
//   }
// });

// You can think of these components as "pages"
// in your app.


