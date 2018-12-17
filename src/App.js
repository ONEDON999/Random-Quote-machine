import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import QuoteBox from './components/QuoteBox/QuoteBox';

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
          author: quoteAuthor || 'Unknown'
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
      <div className="container">
        <Header title="Random Quote Machine" />
        <div id="quote-box">
          <QuoteBox quote={quote} onNewQuote={this.getNewQuote} />
        </div>
      </div>
    );
  }
}

export default App;
