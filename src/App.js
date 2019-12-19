import React from 'react';
//import logo from './logo.svg';
import './App.css';
import MyHeader from './MyHeader';
import { getFactsNotYetSelected, getRandomSelectedFact, initialisedFacts } from './adjectives';
import axios from 'axios';


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      selected: []
    }
  }
  componentDidMount() {
    this.refresh()
  }

  refresh = () => {
    axios.get('http://localhost:3001/adjectives').then((response) => {
      initialisedFacts(response.data)
      this.setState({allFacts:response.data})
    })
  }

  plusHandler = () => {
    const selected = this.state.selected.slice()
    const factsNotYetSelected = getFactsNotYetSelected(selected)
    const randomSelectedFact = getRandomSelectedFact(factsNotYetSelected)
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

  isRemoveButtonDisabled = () => {
    const selected = this.state.selected
    if (selected.length > 0) return false
    else return true
  }

  isAddButtonDisabled = () => {
    const selected = this.state.selected
    const factsNotYetSelected = getFactsNotYetSelected(selected)
    if (factsNotYetSelected.length === 0) return true
    else return false
  }

  render() {
    return (
      <div className="App">
        <MyHeader text = "Fancy cat adjectivisor!" />
        <h2>
          Cats are...
      </h2>
        <div className="buttonContainer">
          <button className="buttonStyle" disabled={this.isAddButtonDisabled()} onClick={this.plusHandler}>+</button>
          <button className="buttonStyle" disabled={this.isRemoveButtonDisabled()} onClick={this.removeHandler}>-</button>
          <button className="buttonStyle" onClick={this.refresh}>Refresh</button>
        </div>
        <ul>
          {this.state.selected.map(fact => (<li key = {fact} >{fact}</li>))}
        </ul>
      </div>
    );
  }
}
export default App;
