import React from 'react';
import './Theme.css';
import PropTypes from 'prop-types';

const Theme = ({ children, theme }) => (
  <div className="theme" style={{ backgroundColor: theme, color: theme }}>
    {children}
  </div>
);

Theme.propTypes = {
  children: PropTypes.node,
  theme: PropTypes.string.isRequired
};

export default Theme;
