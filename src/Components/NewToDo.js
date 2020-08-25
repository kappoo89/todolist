import React from "react";

const style = {
  backgroundColor: "dodgerBlue",
  color: "white",
  fontSize: 70,
  fontWeight: 100,
  lineHeight: "70px",
  position: "absolute",
  width: 70,
  textAlign: "center",
  borderRadius: 1000,
  bottom: 10,
  right: 10,
  boxShadow: "0px 2px 5px 0px rgba(0,0,0,0.25)",
};

function NewToDo() {
  return <div style={style}>+</div>;
}

export default NewToDo;
