import React from "react";
import _ from "lodash";

import ToDoList from "./Components/ToDoList";
import NewToDo from "./Components/NewToDo";

import datas from "./fakeDatas";

const style = {
  width: "100%",
  height: "100%",
  backgroundColor: "#333333",
};

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

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      datas: datas,
      inputMode: false,
    };
    this.handleToDoStatus = this.handleToDoStatus.bind(this);
    this.newToDo = this.newToDo.bind(this);
  }

  handleToDoStatus(i) {
    let datasToUpdate = _.map([...this.state.datas], (item, key) => {
      if (item.id === i) {
        item.completed = !item.completed;
      }
      return item;
    });

    this.setState({
      datas: reorderTask([...datasToUpdate], i),
    });
  }

  newToDo() {
    // const num = this.state.datas.length;
    // this.setState({
    //   datas: [
    //     { id: num, text: "newToDo", completed: false },
    //     ...this.state.datas,
    //   ],
    // });
    this.setState({
      inputMode: true,
    });
  }

  render() {
    return (
      <div style={style}>
        <ToDoList
          datas={this.state.datas}
          handleToDoStatus={this.handleToDoStatus}
          inputMode={this.state.inputMode}
        />
        <NewToDo newToDo={this.newToDo} />
      </div>
    );
  }
}
