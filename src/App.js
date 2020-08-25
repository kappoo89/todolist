import React from "react";

import ToDoList from "./Components/ToDoList";
import NewToDo from "./Components/NewToDo";

const style = {
  width: "100%",
  height: "100%",
  backgroundColor: "#333333",
};

let datas = [
  { content: "Tokio", completed: false },
  { content: "New York", completed: false },
  { content: "London", completed: false },
  { content: "Paris", completed: false },
  { content: "Moscow", completed: false },
];

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      datas: datas,
    };
    this.handleToDoStatus = this.handleToDoStatus.bind(this);
  }

  handleToDoStatus(i) {
    datas[i].completed = !datas[i].completed;
    this.setState({
      datas: datas,
    });
  }

  render() {
    return (
      <div style={style}>
        <ToDoList
          datas={this.state.datas}
          handleToDoStatus={this.handleToDoStatus}
        />
        <NewToDo />
      </div>
    );
  }
}
