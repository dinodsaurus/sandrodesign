require('styles/header.styl');

import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <h1>Studio Sandro Dujmenovic</h1>
        <h2>Art Direction - Design</h2>
        <a className="contact">contact</a>
      </div>
    );
  }
}

export default Header;
