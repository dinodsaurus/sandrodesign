import 'normalize.css';
import 'styles/App.styl';

import React from 'react';
import Header from './header';
import Slider from './slider';

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <Header/>
        <Slider/>
      </div>
    );
  }
}

export default AppComponent;
