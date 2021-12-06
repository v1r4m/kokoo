import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";

// import OpenCVfunction from './component/opencvSample'

export default function Home() {
    return (
      <div>
        <Grid container spacing={2}
                        justifyContent="space-evenly"
                        alignItems="center">
            <Grid item xs="auto">
              <Button variant="contained">
                <Link to="/new">new</Link>
              </Button>
            </Grid>
            <Grid item xs="auto">
              <Button variant="contained">
                <Link to="/make">make</Link>
              </Button>
            </Grid>
          </Grid>
      </div>
    );
  }