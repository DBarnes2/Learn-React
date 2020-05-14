import React, { Component } from 'react';
import './App.css';
import UserOutput from "./User/UserOutput";
import UserInput from "./User/UserInput";

class App extends Component {
  state = {
    username: "Daniel",
  }

  changeUsernameHandler = (event) => {
    console.log(event);
    this.setState({
      username: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <ol>
          <UserInput onChange={this.changeUsernameHandler} name={this.state.username} />
          <UserOutput username={this.state.username} />
          <UserOutput username={"dbarnacles"}/>
        </ol>
      </div>
    );
  }
}

export default App;
