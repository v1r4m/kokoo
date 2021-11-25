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
        <h2>Home</h2>
        <ul>
        <li>
          <Link to={'/write'}>Write</Link>
        </li>
        <li>
          <Link to={'/list'}>List</Link>
        </li>
      </ul>
      </div>
    );
  }