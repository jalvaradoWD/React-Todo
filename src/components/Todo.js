import React, { Component } from "react";
import "./Todo.css";

class Todo extends Component {
  render() {
    const { todo, finished, id } = this.props.item;
    return (
      <li metaId={id}>
        {todo}{" "}
        <input
          type="checkbox"
          checked={finished}
          onClick={this.props.handleCheck}
        />
      </li>
    );
  }
}

export default Todo;
