import 'styles/header.styl'

import React from 'react'

class Header extends React.Component {
  constructor () {
    super()
    this.state = {
      active: false
    }
    setTimeout(() => {
      this.setState({active: 'active'})
    }, 2000)
  }
  render () {
    const color = {
      color: this.props.project.color || '#808080'
    }
    return (
    <div className={`header ${this.state.active}`}>
      <h1 style={color}>Sandro</h1>
      <h1 className="second" style={color}>Dujmenovic</h1>
      <h2 style={color}>Design</h2>
      <h2 className="second" style={color}>Studio</h2>
      <a style={color} className='cont' onClick={this.props.toggleContact}>Contact</a>
    </div>
    )
  }
}

export default Header
