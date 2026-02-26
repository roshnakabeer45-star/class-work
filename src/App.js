



import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import internalImage from "./images/girl.jpg";

function App() {

  console.log("React app started");

  const userName = "Roshna";  

  const headingStyle = {
    color: "darkblue",
    backgroundColor: "lightyellow",
    padding: "10px",
    borderRadius: "10px"
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      
      <div className="card shadow p-4 text-center" style={{width: "400px"}}>

       
        <h2 style={headingStyle}>
          Welcome to React Learning, {userName}
        </h2>

     
        <img
          src={internalImage}
          alt="Internal"
          className="img-fluid mx-auto mt-3"
          style={{ width: "200px" }}
        />

        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
          alt="External React"
          className="img-fluid mx-auto mt-3"
        />

     
        <p className="mt-3 text-muted">
          This is your first card with images and styles!
        </p>

      </div>

    </div>
  );
}

export default App;