import React from "react";
import FlipMove from "react-flip-move";

import ToDo from "./ToDo";

const style = {
  display: "flex",
  height: "100%",
  width: "100%",
  flexDirection: "column",
};

export default class ToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.handleToDoStatus = this.handleToDoStatus.bind(this);
  }

  handleToDoStatus(i) {
    this.props.handleToDoStatus(i);
  }

  render() {
    const datas = this.props.datas;
    return (
      <FlipMove style={style}>
        {datas.map((elem, key) => {
          return (
            <ToDo
              key={elem.index}
              index={elem.index}
              colorIndex={key}
              content={elem.content}
              completed={elem.completed}
              onClick={this.handleToDoStatus}
            />
          );
        })}
      </FlipMove>
    );
  }
}
