import React from 'react';
import './ThemeList.css';
import PropTypes from 'prop-types';

const ThemeList = ({ onChangeTheme, activeTheme }) => {
  const colorThemes = ['#3498db', '#9b59b6', '#e67e22', '#c0392b', '#2c3e50'];
  return (
    <ul className="theme-list">
      {colorThemes.map((color, i) => (
        <li
          key={color}
          className={`theme-item theme-item-${i + 1} ${
            activeTheme === color ? 'active-theme' : ''
          }`}
          onClick={() => onChangeTheme(color)}
        />
      ))}
    </ul>
  );
};

ThemeList.propTypes = {
  onChangeTheme: PropTypes.func.isRequired,
  activeTheme: PropTypes.string.isRequired
};

export default ThemeList;
