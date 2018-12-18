import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Quote = ({ quote }) => (
  <Fragment>
    <p id="text">
      <span className="quote-content-icon">
        <i className="fas fa-quote-left" />
      </span>
      {quote.text}
    </p>
    <p id="author">
      &mdash;<em>{quote.author}</em>
    </p>
  </Fragment>
);

Quote.propTypes = {
  quote: PropTypes.shape({
    text: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
  })
};

export default Quote;
