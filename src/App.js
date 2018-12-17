import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import QuoteBox from './components/QuoteBox';

class App extends Component {
  state = {
    isFetching: false,
    quote: {
      text: '',
      author: ''
    }
  };

  componentDidMount() {
    this.getNewQuote();
  }

  getNewQuote = () => {
    this.setState({
      isFetching: !this.state.isFetching
    });

    fetch(
      'https://cors-anywhere.herokuapp.com/https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en'
    )
      .then(res => res.json())
      .then(data => {
        const { quoteAuthor, quoteText } = data;
        const quote = {
          text: quoteText,
          author: quoteAuthor
        };
        this.setState({
          isFetching: !this.state.isFetching,
          quote
        });
      })
      .catch(error => console.log(error));
  };

  render() {
    const { isFetching, quote } = this.state;
    if (isFetching) {
      return <div>Loading....</div>;
    }

    return (
      <div>
        <Header title="Random Quote Machine" />
        <QuoteBox quote={quote} onNewQuote={this.getNewQuote} />
      </div>
    );
  }
}

export default App;
