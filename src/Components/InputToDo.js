import React from "react";

export default class ImputToDo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const style = {
      backgroundColor: "dodgerBlue",
      color: "white",
      padding: "25px 20px",
      border: 0,
      fontSize: 16,
      color: "white",
    };
    return <input style={style} />;
  }
}
