import React, { Component } from 'react';
import ValidationComponent from "./ValidationComponent";
import CharComponent from "./CharComponent";
import './App.css';

class App extends Component {
  // Used a char array here. Could have used an input string - the tricky case was deleting a letter.
  // The way I can do this is by splitting the string in the delete method, splicing out the
  // desired letter, and then joining the char array back together to make the updated string.
  state = {
    chars: []
  }

  changeStringHandler = (event) => {
    const newChars = event.target.value.split("");
    this.setState({chars: newChars });
  }

  deleteCharacterHandler = (index) => {
    const newChars = [...this.state.chars];
    newChars.splice(index, 1);

    this.setState({ chars: newChars });
  }

  render() {
    let acc = "";
    const charComponents = this.state.chars.map((character, index) => {
      acc += character;
      return (<CharComponent
        id={character + Math.random()}
        character={character}
        onClick={() => this.deleteCharacterHandler(index)}
      />
    )});

    return (
      <div className="App">
        <input type="text" onChange={(event) => this.changeStringHandler(event)} value={acc} />
        <ValidationComponent inputLength={this.state.chars.length} />
        {charComponents}
      </div>
    );
  }
}

export default App;
