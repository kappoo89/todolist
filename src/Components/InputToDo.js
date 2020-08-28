import React from "react";

export default class ImputToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.value === "") {
      this.props.exitInputMode();
    } else {
      this.props.addNewToDo(this.state.value);
      this.setState({ value: "" });
    }
  };

  componentDidMount() {
    this.nameInput.focus();
  }

  render() {
    const style = {
      backgroundColor: "dodgerBlue",
      color: "white",
      padding: "25px 20px",
      border: 0,
      fontSize: 16,
      width: "-webkit-fill-available",
    };
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          ref={(input) => {
            this.nameInput = input;
          }}
          style={style}
          placeholder="write here your task"
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}
