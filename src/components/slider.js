require('styles/slider.styl');

import React from 'react';

const img = require('../images/concert.jpg')
const img2 = require('../images/yeoman.png')


class Slider extends React.Component {
  constructor() {
    super()
    this.state = {
      current: 0,
      projects: [
        {
          name: 'Projekt 1',
          desc: 'Ovo je desc',
          img: img
        },
        {
          name: 'Projekt 2',
          desc: 'Ovo je desc',
          img: img2
        }
      ]
    }
  }
  nextProject() {
    const projects = this.state.projects.length
    const current = this.state.current
    if (projects <= current + 1) {
      this.setState({current: 0})
    } else {
      this.setState({current: current + 1})
    }
  }
  prevProject() {
    const projects = this.state.projects.length
    const current = this.state.current
    if (current <=  0) {
      this.setState({current: projects - 1})
    } else {
      this.setState({current: current - 1})
    }
  }
  render() {
    const project = this.state.projects[this.state.current]
    const background = {
      backgroundImage: `url('${project.img}')`
    }
    return (
      <div className='slider'>
        <div className='dir left' onClick={this.prevProject.bind(this)}></div>
        <div className='dir right' onClick={this.nextProject.bind(this)}></div>
        <div className='item' style={background}>
          <h3>{project.desc}</h3>
        </div>
      </div>
    );
  }
}

export default Slider;
