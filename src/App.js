import React from "react";

import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todoList: [],
      todoFormVal: "",
    };
  }

  handleChange = (e) => {
    this.setState({ todoFormVal: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({
      todoList: [...this.state.todoList, this.state.todoFormVal],
      todoFormVal: "",
    });
  };

  render() {
    return (
      <>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm
          todoFormVal={this.state.todoFormVal}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
        <TodoList todoList={this.state.todoList} />
      </>
    );
  }
}

export default App;
