import React, { Component } from 'react';

class Color extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favoriteColor: 'red',
      count: 0,
      show: true,
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  componentDidMount() {
    alert('Mounted: red');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('After update');
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('In getSnapshotBeforeUpdate');
    return null;
  }

  changeColor = () => {
    this.setState({ favoriteColor: 'yellow', count: this.state.count + 1 });
  };

  toggleChild = () => {
    this.setState((prevState) => ({ show: !prevState.show }));
  };

  render() {
    const { favoriteColor, show } = this.state;

    return (
      <>
        <h1 style={{ border: '1px solid grey', padding: '10px' }}>
          My favorite color is {favoriteColor}
        </h1>
        <button onClick={this.changeColor}>Change color</button>
        <button onClick={this.toggleChild}>Delete Header</button>
        {show && <Child />}
      </>
    );
  }
}

class Child extends Component {
  componentWillUnmount() {
    alert('Child component will unmount');
  }

  render() {
    return <h2>Hello World!</h2>;
  }
}

export default Color;