import React from "react";

export default class ToDo extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.onClick(this.props.index);
  }

  render() {
    const shadowIndex = this.props.colorIndex * 0.05;
    let style = {
      backgroundColor: "dodgerBlue",
      color: "white",
      padding: "25px 20px",
      boxShadow: "inset 0px 0px 0px 100px rgba(0,0,0," + shadowIndex + ")",
    };

    let styleCompleted = {
      textDecoration: "line-through",
      color: "rgba(255,255,255, 0.5)",
      backgroundColor: "#333333",
      boxShadow: "none",
    };

    if (this.props.completed) {
      style = { ...style, ...styleCompleted };
    }
    return (
      <div style={style} onClick={this.onClick}>
        {this.props.content}
      </div>
    );
  }
}
