import { Component } from "react";
import "./App.css";
import CardList from "./components/CardList";

const randomNumber = (max) => {
  return Math.floor(Math.random() * max);
};

export default class App extends Component {
  state = {
    characterList: [],
    charArray: [],
    label: true,
  };

  getCharacter = () => {
    const { characterList } = this.state;
    fetch("https://hp-api.herokuapp.com/api/characters/students")
      .then((response) => response.json())
      .then((response) => this.setState({ characterList: response }))
      .catch((error) => console.log(error));
  };

  getChar = () => {
    const { characterList } = this.state;
    const recWhile = () => {
      let arrayChar = [];
      let count = 0;
      while (count < 3) {
        arrayChar.push(randomNumber(characterList.length));
        count++;
      }

      if (
        arrayChar[0] === arrayChar[1] ||
        arrayChar[0] === arrayChar[2] ||
        arrayChar[1] === arrayChar[2]
      ) {
        return recWhile();
      }
      return arrayChar;
    };

    let [idx1, idx2, idx3] = recWhile();

    this.setState({
      charArray: [
        characterList[idx1],
        characterList[idx2],
        characterList[idx3],
      ],
    });
  };

  playGame = () => {
    this.getChar();
    const { label } = this.state;
    this.setState({ label: false });
  };

  componentDidMount = () => {
    this.getCharacter();
  };
  componentDidUpdate = (_, prevState) => {
    this.getCharacter();
  };

  componentWillUnmount = () => {
    this.getCharacter();
  };

  getCharacterRandon = () => {
    this.getChar();
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.state.label ? (
            <div className="App-start">
              <h1>Torneio tribruxo</h1>
              <p>Clique no botão para encontrar os feiticeiros!</p>
              <button className="btn" onClick={this.playGame}>
                Começar
              </button>
            </div>
          ) : (
            <div>
              <div>
                <CardList list={this.state.charArray} />
              </div>
              <button className="btn" onClick={this.getCharacterRandon}>
                Tentar novamente
              </button>
            </div>
          )}
        </header>
      </div>
    );
  }
}
