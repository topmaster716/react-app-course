import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "A1", age: 45 },
      { name: "A2", age: 24 },
      { name: "A3", age: 32 }
    ]
  };

  changeNameHander = newName => {
    this.setState({
      persons: [
        { name: newName, age: 565 },
        { name: "A2", age: 24 },
        { name: "A3", age: 32 }
      ]
    });
  };

  modifyNameHandler = event => {
    this.setState({
      persons: [
        { name: "A1", age: 45 },
        { name: event.target.value, age: 24 },
        { name: "A3", age: 32 }
      ]
    });
  };

  render() {
    const style = {
      cursor: "pointer",
      fontSize: "20px"
    };
    return (
      <div className="App">
        <h1>Hi, I am React app.</h1>
        <button style={style} onClick={() => this.changeNameHander("A00")}>
          Change name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          click={() => this.changeNameHander("B00")}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          changed={this.modifyNameHandler}
        >
          Test summary
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
  }
}

export default App;
