import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    sec: 0
  };

  componentDidMount() {
    window.setInterval(() => {
      this.setState(state => ({
        sec: state.sec + 1
      }));

      // this.setState({sec: 1});
    }, 1000);
  }

  render() {
    return (
      <div className="App" style={{ fontSize: '34px' }}>
        {this.state.sec} <hr />
        {this.state.sec} <hr />
        {this.state.sec} <hr />
        {this.state.sec} <hr />
        {this.state.sec} <hr />
        {this.state.sec} <hr />
        {this.state.sec} <hr />
      </div>
    );
  }
}

export default App;
