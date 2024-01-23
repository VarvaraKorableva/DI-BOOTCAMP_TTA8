import React, { Component } from 'react';

class BuggyCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  handleClick = () => {
    const { counter } = this.state;
    if (counter === 5) {
      throw new Error('I crashed!');
    } else {
      this.setState({ counter: counter + 1 });
    }
  };

  render() {
    return (
      <div>
        <p>Counter: {this.state.counter}</p>
        <button onClick={this.handleClick}>Increment</button>
      </div>
    );
  }
}

export default BuggyCounter;