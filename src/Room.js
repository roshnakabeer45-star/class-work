import React, { useState } from "react";
import LightSwitch from "./LightSwitch";

function Room() {
  const [isOn, setIsOn] = useState(false);

  const toggleLight = () => {
    setIsOn(!isOn);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>
        {isOn ? "The room is bright" : "The room is dark"}
      </h2>

      <LightSwitch isOn={isOn} toggleLight={toggleLight} />
    </div>
  );
}

export default Room;