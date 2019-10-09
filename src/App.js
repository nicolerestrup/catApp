import React from 'react';
//import logo from './logo.svg';
import './App.css';
import getRandomInt from './getRandomInt';
import MyHeader from './MyHeader';

const facts = [
  "Cute",
  "Fun",
  "Unpredictable",
  "Nice",
  "Charming",
  "Dynamic",
  "Fearless",
]

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      selected: []
    }
  }

  plusHandler = () => {
    const selected = this.state.selected.slice()
    const factsNotYetSelected = facts.filter(function(fact) {
      if (selected.indexOf(fact) === -1)
        return true
      else 
        return false
    })
    const randomSelectedFact = factsNotYetSelected[getRandomInt(0, factsNotYetSelected.length)]
    selected.push(randomSelectedFact)
    this.setState({
      selected: selected,
    })
  }

  removeHandler = () => {
    const selected = [...this.state.selected]
    selected.pop()
    this.setState({
      selected: selected,
    })
  }

  isRemoveHandlerDisabled = () => {
    const selected = this.state.selected
    if (selected.length > 0) return false
    else return true
  }

  render() {
    return (
      <div className="App">
        <MyHeader/>
      <h2>
          Cats are...
      </h2>
        <div className="buttonContainer">
          <button className="buttonStyle" onClick={this.plusHandler}>+</button>
          <button className="buttonStyle" disabled={this.isRemoveHandlerDisabled()} onClick={this.removeHandler}>-</button>
        </div>
        <ul>
          {this.state.selected.map(fact => (<li>{fact}</li>))}
        </ul>
      </div>
    );
  }
}
export default App;
