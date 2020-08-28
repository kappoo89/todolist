import React from "react";

const style = {
  fontFamily: "Arial",
  backgroundColor: "dodgerBlue",
  color: "white",
  fontSize: 70,
  fontWeight: 100,
  lineHeight: "70px",
  position: "fixed",
  width: 70,
  textAlign: "center",
  borderRadius: 1000,
  bottom: 10,
  cursor: "pointer",
  right: 10,
  boxShadow: "0px 2px 5px 0px rgba(0,0,0,0.25)",
};

const NewToDo = (props) => {
  const onClick = () => {
    props.newToDo();
  };

  return (
    <div
      onClick={onClick}
      style={style}
      className={props.inputMode ? "rotatePlusToCross" : ""}
    >
      +
    </div>
  );
};

export default NewToDo;
