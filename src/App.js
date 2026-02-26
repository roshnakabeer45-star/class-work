

import React from "react";
import "./App.css";

function App() {

  
  const name = "Alex";
  const age = 20;
  const isStudent = true;

  
  const favoriteHobbies = ["Reading", "Hiking", "Coding"];

  
  const hobbyListFor = [];
  for (let i = 0; i < favoriteHobbies.length; i++) {
    hobbyListFor.push(
      <li key={i}>{favoriteHobbies[i]}</li>
    );
  }

  
  function showMessage() {
    document.getElementById("message").innerHTML =
      "Hello from React! I love my hobbies!";

    const headingColor = "lightblue";
    document.getElementById("mainHeading").style.backgroundColor =
      headingColor;
  }

  return (
    <div className="container mt-4">

      
      <h1 id="mainHeading" className="text-center p-2">
        My Personal Profile
      </h1>

     
      <div className="card p-3 shadow mt-3">
        <h3>Personal Information</h3>
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Age:</strong> {age}</p>
        <p><strong>Student:</strong> {isStudent.toString()}</p>
      </div>

      <div className="mt-4">
        <h3>My Favorite Hobbies (Using For Loop)</h3>
        <ul>
          {hobbyListFor}
        </ul>

        <h3>My Favorite Hobbies (Using map())</h3>
        <ul>
          {favoriteHobbies.map((hobby, index) => (
            <li key={index}>{hobby}</li>
          ))}
        </ul>
      </div>


      <button 
        className="btn btn-primary mt-3"
        onClick={showMessage}
      >
        Show Enthusiasm
      </button>

  
      <p id="message" className="mt-3">
        Click the button to see my enthusiasm!
      </p>

    </div>
  );
}

export default App;