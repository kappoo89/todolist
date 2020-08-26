import React from "react";
import _ from "lodash";

import ToDoList from "./Components/ToDoList";
import NewToDo from "./Components/NewToDo";

const style = {
  width: "100%",
  height: "100%",
  backgroundColor: "#333333",
};

let datas = [
  { index: 4, content: "Tokio", completed: false },
  { index: 3, content: "New York", completed: false },
  { index: 2, content: "London", completed: false },
  { index: 1, content: "Paris", completed: false },
  { index: 0, content: "Moscow", completed: false },
];

function reorderTask(datas, index) {
  let changedTask = _.remove(datas, function (n) {
    return n.index === index;
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
    };
    this.handleToDoStatus = this.handleToDoStatus.bind(this);
    this.newToDo = this.newToDo.bind(this);
  }

  handleToDoStatus(i) {
    let datasToUpdate = _.map([...this.state.datas], (item, key) => {
      if (item.index === i) {
        item.completed = !item.completed;
      }
      return item;
    });

    this.setState({
      datas: reorderTask([...datasToUpdate], i),
    });
  }

  newToDo() {
    const num = this.state.datas.length;
    this.setState({
      datas: [
        { index: num, content: "newToDo", completed: false },
        ...this.state.datas,
      ],
    });
  }

  render() {
    return (
      <div style={style}>
        <ToDoList
          datas={this.state.datas}
          handleToDoStatus={this.handleToDoStatus}
        />
        <NewToDo newToDo={this.newToDo} />
      </div>
    );
  }
}
