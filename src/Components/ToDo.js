import React from "react";
import { SwipeableListItem } from "@sandstreamdev/react-swipeable-list";
import "@sandstreamdev/react-swipeable-list/dist/styles.css";

export default class ToDo extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.onSwipe = this.onSwipe.bind(this);
    this.onSwipeEnd = this.onSwipeEnd.bind(this);
    this.state = {
      progress: 0,
    };
  }

  onClick() {
    this.props.onClick(this.props.id);
  }

  onSwipe(progress) {
    this.setState({ progress: progress });
  }

  onSwipeEnd() {
    this.props.onClick(this.props.id);
    this.setState({ progress: 0 });
  }

  render() {
    const shadowIndex = this.props.colorIndex * 0.05;
    let style = {
      backgroundColor: "dodgerBlue",
      color: "white",
      padding: "25px 20px",
      width: "100%",
      cursor: "pointer",
      boxShadow: "inset 0px 0px 0px 100px rgba(0,0,0," + shadowIndex + ")",
    };

    let styleCompleted = {
      textDecoration: "line-through",
      color: "rgba(255,255,255, 0.5)",
      backgroundColor: "#333333",
      boxShadow: "none",
    };

    if (this.props.completed) {
      style = { ...style, ...styleCompleted };
    }

    if (this.state.progress > 0) {
      if (this.state.progress < 25) {
        const alpha = this.state.progress / 25;
        style.boxShadow =
          "inset 0px 0px 0px 100px rgba(50,205,50," + alpha + ")";
      } else {
        style.boxShadow = "inset 0px 0px 0px 100px rgba(50,205,50,1)";
      }
    }

    return (
      <SwipeableListItem
        swipeStartThreshold={15}
        threshold={0.25}
        onSwipeProgress={this.onSwipe}
        onSwipeEnd={this.onSwipeEnd}
        swipeRight={{
          content: <div></div>,
          action: () => {},
        }}
      >
        <div style={style} onClick={this.onClick}>
          {this.props.text}
        </div>
      </SwipeableListItem>
    );
  }
}
