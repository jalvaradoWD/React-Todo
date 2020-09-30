import React, { Component } from "react";

class TodoForm extends Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <input
          type="text"
          onChange={this.props.handleChange}
          value={this.props.todoFormVal}
        />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default TodoForm;
