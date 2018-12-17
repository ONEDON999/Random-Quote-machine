import React from 'react';

const QuoteBox = ({ quote, onNewQuote }) => (
  <div id="quote-box">
    <p id="text">{quote.text}</p>
    <p id="author">{quote.author}</p>
    <a
      href={`https://twitter.com/intent/tweet?text=${quote.text}- ${quote.author}`}
      rel="noopener noreferrer"
      target="_blank"
      id="tweet-quote"
    >
      Tweet
    </a>
    <button id="new-quote" onClick={onNewQuote}>
      New Quote
    </button>
  </div>
);

export default QuoteBox;