import 'styles/header.styl'

import React from 'react'

class Header extends React.Component {
  render () {
    const color = {
      color: this.props.project.color || 'white'
    }
    console.log(color);
    return (
    <div className='header'>
      <h1 style={color}>Studio Sandro Dujmenovic</h1>
      <h2 style={color}>Art Direction — Design</h2>
      <a style={color} className='cont' onClick={this.props.toggleContact}>contact</a>
    </div>
    )
  }
}

export default Header
