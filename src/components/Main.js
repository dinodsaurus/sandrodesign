import 'normalize.css';
import 'styles/App.styl';

import React from 'react';
import Header from './header';
import Slider from './slider';
import Contact from './contact';

class AppComponent extends React.Component {
  constructor() {
    super()
    this.state = {
      project: {},
      contact: false
    }
  }
  projectUpdate(project) {
    this.setState({project: project})
  }
  toggleContact() {
    this.setState({contact: !this.state.contact})
  }
  render() {
    return (
      <div className={`index ${this.state.contact}`}>
        <Header contact={this.state.contact} project={this.state.project} toggleContact={this.toggleContact.bind(this)}/>
        <Slider projectUpdate={this.projectUpdate.bind(this)}/>
        <Contact/>
      </div>
    );
  }
}

export default AppComponent;
