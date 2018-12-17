import React, { Fragment } from 'react';

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

export default Quote;
