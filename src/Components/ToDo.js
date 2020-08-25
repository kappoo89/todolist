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
    let style = {
      backgroundColor: "dodgerBlue",
      color: "white",
      padding: "25px 20px",
      boxShadow: "inset 0px 0px 0px 100px rgba(0,0,0,0)",
    };

    style.boxShadow =
      "inset 0px 0px 0px 100px rgba(0,0,0," + this.props.index * 0.1 + ")";
    if (this.props.completed) {
      style.textDecoration = "line-through";
      style.color = "rgba(255,255,255, 0.5)";
    }
    return (
      <div style={style} onClick={this.onClick}>
        {this.props.content}
      </div>
    );
  }
}
