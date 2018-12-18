import React from 'react';
import './Theme.css';

const Theme = ({ children, theme }) => (
  <div className="theme" style={{ backgroundColor: theme, color: theme }}>
    {children}
  </div>
);

export default Theme;
