import React from 'react';
import './LoadingScreen.css';
import BarLoader from "react-spinners/BarLoader";

function LoadingScreen() {
  return (
    <div className="loading-screen">
        <div className="content">
            <h1 className="text">Royal Academy</h1>
            <BarLoader
                color="#ffffff"
                height={7}
                 width={250}
/>
         </div>
    </div>
  )
}

export default LoadingScreen;