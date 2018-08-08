import React, { Component } from 'react';
import logo from '../../assets/images/logo.svg';
import './Header.css';

export default function Header() {
  return (
    <header>
      <img src={logo} alt="Bitly" width="120" />
      <nav>
        <a hreh="#" title="Tour">Tour</a>
        <a hreh="#" title="Enterprise">Enterprise</a>
        <a hreh="#" title="Resources">Resources</a>
        <a hreh="#" title="About">About</a>
      </nav>
    </header>
  );
}
