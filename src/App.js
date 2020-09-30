import React from "react";

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
      <div>
        <h2>Welcome to your Todo App!</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.todoFormVal}
          />
          <input type="submit" value="Submit" />
        </form>

        <div>
          <ol>
            {this.state.todoList.map((item) => {
              return <li>{item}</li>;
            })}
          </ol>
        </div>
      </div>
    );
  }
}

export default App;
