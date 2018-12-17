import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import QuoteBox from './components/QuoteBox';

class App extends Component {
  state = {
    quote: {
      text: 'sample quote text',
      author: 'sample author'
    }
  };

  render() {
    return (
      <div>
        <Header title="Random Quote Machine" />
        <QuoteBox quote={this.state.quote} />
      </div>
    );
  }
}

export default App;
