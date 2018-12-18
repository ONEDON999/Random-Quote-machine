import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import QuoteBox from './components/QuoteBox/QuoteBox';
import Theme from './components/Theme/Theme';

class App extends Component {
  state = {
    isFetching: false,
    quote: {
      text: '',
      author: ''
    },
    error: false,
    theme: '#3498db'
  };

  componentDidMount() {
    this.getNewQuote();
  }

  getNewQuote = () => {
    this.setState({
      isFetching: !this.state.isFetching,
      error: false
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
      .catch(error => {
        console.log(error);
        this.setState({
          error: true,
          isFetching: !this.state.isFetching
        });
      });
  };

  handleThemeColor = color => {
    this.setState({
      theme: color
    });
  };

  render() {
    const { isFetching, quote, error, theme } = this.state;

    return (
      <Theme theme={theme}>
        <div className="container">
          <Header title="Random Quote Machine" />
          <div id="quote-box">
            <QuoteBox
              quote={quote}
              onNewQuote={this.getNewQuote}
              isFetching={isFetching}
              isError={error}
              onChangeTheme={this.handleThemeColor}
              activeTheme={theme}
            />
          </div>
        </div>
      </Theme>
    );
  }
}

export default App;
