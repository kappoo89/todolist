import React from "react";
import _ from "lodash";

import ToDoList from "./Components/ToDoList";
import NewToDo from "./Components/NewToDo";

let datas = JSON.parse(localStorage.getItem("myData"));

const style = {
  width: "100%",
  height: "100%",
  backgroundColor: "#333333",
};

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      datas: datas || [],
      inputMode: false,
    };
  }

  handleToDoStatus = (i) => {
    if (this.state.inputMode) {
      this.setState({
        inputMode: false,
      });
      return;
    }
    let datasToUpdate = _.map([...this.state.datas], (item, key) => {
      if (item.id === i) {
        item.completed = !item.completed;
      }
      return item;
    });
    this.setState({
      datas: reorderTask([...datasToUpdate], i),
    });
  };

  addNewToDo = (data) => {
    const num = this.state.datas.length;
    const newDatas = this.setState({
      datas: [{ id: num, text: data, completed: false }, ...this.state.datas],
    });
  };

  newToDo = () => {
    if (this.state.inputMode) {
      this.setState({
        inputMode: false,
      });
      return;
    }
    this.setState({
      inputMode: true,
    });
  };

  componentDidUpdate() {
    localStorage.setItem("myData", JSON.stringify(this.state.datas));
  }

  render() {
    return (
      <div style={style}>
        <ToDoList
          datas={this.state.datas}
          handleToDoStatus={this.handleToDoStatus}
          inputMode={this.state.inputMode}
          addNewToDo={this.addNewToDo}
          exitInputMode={this.newToDo}
        />
        <NewToDo newToDo={this.newToDo} inputMode={this.state.inputMode} />
      </div>
    );
  }
}

function reorderTask(datas, id) {
  let changedTask = _.remove(datas, function (n) {
    return n.id === id;
  });
  if (changedTask[0].completed) {
    datas = [...datas, ...changedTask];
  } else {
    let notCompletedTasks = _.remove(datas, function (n) {
      return !n.completed;
    });
    datas = [...notCompletedTasks, ...changedTask, ...datas];
  }
  return datas;
}
