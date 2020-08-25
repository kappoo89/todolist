import React from "react";

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
      <div style={style}>
        {datas.map((elem, key) => {
          return (
            <ToDo
              key={key}
              index={key}
              content={elem.content}
              completed={elem.completed}
              onClick={this.handleToDoStatus}
            />
          );
        })}
      </div>
    );
  }
}
