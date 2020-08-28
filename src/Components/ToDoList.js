import React from "react";
import FlipMove from "react-flip-move";

import ToDo from "./ToDo";
import InputToDo from "./InputToDo";

let style = {
  display: "flex",
  height: "100%",
  width: "100%",
  flexDirection: "column",
};

export default class ToDoList extends React.Component {
  constructor(props) {
    super(props);
  }

  handleToDoStatus = (i) => {
    this.props.handleToDoStatus(i);
  };

  addNewToDo = (data) => {
    this.props.addNewToDo(data);
  };

  exitInputMode = () => {
    this.props.exitInputMode();
  };

  render() {
    const datas = this.props.datas;
    return (
      <FlipMove style={style}>
        {this.props.inputMode && (
          <InputToDo
            addNewToDo={this.addNewToDo}
            exitInputMode={this.exitInputMode}
          />
        )}
        {datas.map((elem, key) => {
          return (
            <ToDo
              key={elem.id}
              id={elem.id}
              colorIndex={key}
              text={elem.text}
              completed={elem.completed}
              onClick={this.handleToDoStatus}
              inputMode={this.props.inputMode}
            />
          );
        })}
      </FlipMove>
    );
  }
}
