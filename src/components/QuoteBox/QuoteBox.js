import React, { Fragment } from 'react';
import './QuoteBox.css';

const QuoteBox = ({ quote, onNewQuote }) => (
  <Fragment>
    <div className="quote-content">
      <p id="text">
        <span className="quote-content-icon">
          <i className="fas fa-quote-left" />
        </span>
        {quote.text}
      </p>
      <p id="author">
        &mdash;<em>{quote.author}</em>
      </p>
    </div>
    <div className="quote-controls">
      <a
        href={`https://twitter.com/intent/tweet?text=${quote.text}- ${
          quote.author
        }`}
        rel="noopener noreferrer"
        target="_blank"
        id="tweet-quote"
      >
        <i className="fab fa-twitter" /> Tweet
      </a>
      <button id="new-quote" onClick={onNewQuote}>
        <i class="fab fa-telegram-plane" /> New Quote
      </button>
    </div>
  </Fragment>
);

export default QuoteBox;
