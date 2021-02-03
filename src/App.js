import { Component } from "react";
import "./App.css";
import CharacterList from "./components/CharacterList";

export default class App extends Component {
  state = {
    characterList: [],
  };

  getCharacter = () => {
    const { characterList } = this.state;
    fetch("http://hp-api.herokuapp.com/api/characters/students")
      .then((response) => response.json())
      .then((response) => {
        this.setState({ characterList: response });
      })
      .catch((error) => console.log(error));
  };

  componentDidMount = () => {
    this.getCharacter();
  };
  componentDidUpdate = (_, prevState) => {};

  render() {
    // console.log(this.state.characterList);
    return (
      <div className="App">
        <header className="App-header">
          <CharacterList>{this.state.characterList}</CharacterList>
        </header>
      </div>
    );
  }
}
