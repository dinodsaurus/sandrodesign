import 'styles/slider.styl'

import React from 'react'
import axios from 'axios'

class Slider extends React.Component {
  constructor () {
    super()
    this.state = {
      current: 0,
      projects: []
    }
  }
  componentDidMount () {
    this.loadProjects()
    window.addEventListener('keydown', this.keyPress.bind(this))
  }
  componentWillUnmount () {
    window.removeEventListener('keydown', this.keyPress.bind(this))
  }
  loadProjects () {
    const self = this
    axios.get('/projects.json')
      .then(response => {
        self.setState({projects: response.data.projects})
        this.props.projectUpdate(this.state.projects[0])
        this.loadImages()
      })
  }
  loadImages () {
    let i = 0
    let p = this.state.projects
    let downloadingImage = new Image()
    downloadingImage.src = p[i].img
    downloadingImage.onload = function(){
        i++
        downloadingImage.src = p[i].img
    };
  }
  keyPress (key) {
    if (key.which === 37) {
      this.prevProject()
    } else if (key.which === 39) {
      this.nextProject()
    }
  }
  nextProject () {
    const projects = this.state.projects.length
    const current = this.state.current
    let curr = 0
    if (projects > current + 1) {
      curr = current + 1
    }
    this.setState({current: curr})
    this.props.projectUpdate(this.state.projects[curr])
  }
  prevProject () {
    const projects = this.state.projects.length
    let curr = projects - 1
    if (this.state.current > 0) {
      curr--
    }
    this.setState({current: curr})
    this.props.projectUpdate(this.state.projects[curr])
  }
  render () {
    if (!this.state.projects.length) {
      return <div></div>
    }
    const project = this.state.projects[this.state.current]
    const background = {
      backgroundImage: `url('${project.img}')`
    }
    const color = {
      color: project.color || 'white'
    }
    return (
    <div className='slider'>
      <div className='dir left' onClick={this.prevProject.bind(this)}></div>
      <div className='dir right' onClick={this.nextProject.bind(this)}></div>
      <div className='item' style={background}>
        <h3 style={color}>{project.name}</h3>
      </div>
    </div>
    )
  }
}

export default Slider
