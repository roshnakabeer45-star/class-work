import React from "react";

function LightSwitch(props) {
  return (
    <button onClick={props.toggleLight}>
      {props.isOn ? "Turn OFF" : "Turn ON"}
    </button>
  );
}

export default LightSwitch;