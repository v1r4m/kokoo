import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";



// import OpenCVfunction from './component/opencvSample'
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import newimg from "./ATG.png";
import upimg from "./upload.png";
export default function Home() {
    return (
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
        <Grid container spacing={2}
                        direction="row"
                        justifyContent="space-evenly"
                        justify="center"
                        alignItems="center">
          <Grid item xs="auto">
            <Link to="/new">
              <a><img src={upimg}></img></a>
            </Link>
            {/* <Button variant="contained">
              <Link to="/new">new</Link>
            </Button> */}
          </Grid>
          <Grid item xs="auto">
            <Link to="/pic">
              <a><img src={newimg}></img></a>
            </Link>
            {/* <Button variant="contained">
              <Link to="/make">make</Link>
            </Button> */}
          </Grid>
        </Grid>
      </div>
    );
  }