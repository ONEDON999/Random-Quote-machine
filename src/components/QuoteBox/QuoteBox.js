import React, { Fragment } from 'react';
import './QuoteBox.css';
import Spinner from '../Spinner/Spinner';
import Quote from '../Quote';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import ThemeList from '../ThemeList/ThemeList';
import PropTypes from 'prop-types';

const QuoteBox = ({
  quote,
  onNewQuote,
  isFetching,
  isError,
  onChangeTheme,
  activeTheme
}) => (
  <Fragment>
    <div className="quote-content">
      {isFetching && <Spinner />}
      {isError && <ErrorMessage />}
      <div className={isFetching || isError ? 'hide-quote' : ''}>
        <Quote quote={quote} />
      </div>
    </div>
    <ThemeList onChangeTheme={onChangeTheme} activeTheme={activeTheme} />
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
      <button
        type="button"
        id="new-quote"
        onClick={onNewQuote}
        disabled={isFetching}
      >
        <i className="fab fa-telegram-plane" /> New Quote
      </button>
    </div>
  </Fragment>
);

QuoteBox.propTypes = {
  quote: PropTypes.object,
  onNewQuote: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  isError: PropTypes.bool.isRequired,
  onChangeTheme: PropTypes.func,
  activeTheme: PropTypes.string
};

export default QuoteBox;
