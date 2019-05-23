import React from 'react';
import logo from './logo.svg';

const Header = props => {
  const { city } = props;

  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />

      <div>CITY : {city}</div>
    </header>
  );
};

export default Header;
