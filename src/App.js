import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  this.state = {
    count: 0,
  }
}

  buttonIncrease = () => {
    this.setState({
      count: this.state.count + 1
    });
  }

    buttonDecrease = () => {
      this.setState({
        count: this.state.count - 1
      });
  }

  render() {
    return (
      <div className= "App">
        <h1 className= "number">{this.state.count}</h1>
        <button className= "button plus" onClick={this.buttonIncrease}>+</button>
        <button className= "button minus" onClick={this.buttonDecrease}>-</button>        
      </div>

    );
  }
}

export default App;
