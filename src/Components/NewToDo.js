import React from "react";

export default class NewToDo extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.newToDo();
  }

  render() {
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
      right: 10,

      boxShadow: "0px 2px 5px 0px rgba(0,0,0,0.25)",
    };
    return (
      <div onClick={this.onClick} style={style}>
        +
      </div>
    );
  }
}
