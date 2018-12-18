import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <span>
      API:{' '}
      <a
        className="footer-link"
        href="https://forismatic.com/en/"
        target="_blank"
        rel="noopener noreferrer"
      >
        forismatic
      </a>
    </span>
    <span>|</span>
    <span>
      <a
        className="footer-link"
        href="https://github.com/rmasianjr/random-quote-machine"
        target="_blank"
        rel="noopener noreferrer"
      >
        Repo Link
      </a>
    </span>
    <p>
      Created by:{' '}
      <a
        className="footer-link"
        href="https://twitter.com/rmasianjr"
        target="_blank"
        rel="noopener noreferrer"
      >
        Ricardo Masian Jr.
      </a>
    </p>
  </footer>
);

export default Footer;
