import React, { Fragment } from 'react';
import './QuoteBox.css';
import Spinner from '../Spinner/Spinner';
import Quote from '../Quote';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

const QuoteBox = ({ quote, onNewQuote, isFetching, isError }) => (
  <Fragment>
    <div className="quote-content">
      {isFetching && <Spinner />}
      {isError && <ErrorMessage />}
      <div className={isFetching || isError ? 'hide-quote' : ''}>
        <Quote quote={quote} />
      </div>
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
        <i className="fab fa-telegram-plane" /> New Quote
      </button>
    </div>
  </Fragment>
);

export default QuoteBox;
