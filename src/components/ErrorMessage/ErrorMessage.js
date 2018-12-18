import React from 'react';
import './ErrorMessage.css';

const ErrorMessage = () => (
  <div className="error-box">
    <span>
      <i className="fas fa-exclamation-circle" />
    </span>
    <span>Something went wrong! Please try again.</span>
  </div>
);

export default ErrorMessage;
