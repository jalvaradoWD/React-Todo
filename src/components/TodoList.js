// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import Todo from "./Todo";
import React, { Component } from "react";

class TodoList extends Component {
  render() {
    return (
      <ol>
        {this.props.todoList.map((item) => {
          return (
            <Todo
              key={item.id}
              handleCheck={this.props.handleCheck}
              item={item}
            />
          );
        })}
      </ol>
    );
  }
}

export default TodoList;
