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
      counter: 0,
    };
  }

  handleChange = (e) => {
    this.setState({ todoFormVal: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({
      todoList: [
        ...this.state.todoList,
        {
          id: this.state.counter,
          todo: this.state.todoFormVal,
          finished: false,
        },
      ],
      todoFormVal: "",
      counter: this.state.counter + 1,
    });
  };

  handleCheck = (e) => {
    const itemId = Number(e.target.parentNode.attributes.metaId.value);
    console.log(itemId);

    this.setState({
      todoList: [
        ...this.state.todoList.map((item) => {
          if (item.id === itemId) {
            return {
              ...item,
              finished: !item.finished,
            };
          }
          return item;
        }),
      ],
    });
  };

  clearCompleted = (e) => {
    e.preventDefault();

    this.setState({
      todoList: [
        ...this.state.todoList.filter((item) => item.finished !== true),
      ],
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
        <button onClick={this.clearCompleted}>Clear Completed</button>
        <TodoList
          handleCheck={this.handleCheck}
          todoList={this.state.todoList}
        />
      </>
    );
  }
}

export default App;
