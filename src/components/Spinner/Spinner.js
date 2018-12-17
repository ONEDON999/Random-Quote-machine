import React from 'react';
import './Spinner.css';

const Spinner = ({ isFetching }) => (
  <span className="spinner">
    <i className="fas fa-spin fa-pulse fa-spinner" />
  </span>
);

export default Spinner;
