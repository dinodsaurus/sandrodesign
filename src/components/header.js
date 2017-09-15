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
      color: this.props.project.color || 'white'
    }
    if(this.props.contact){
      color.color = 'white'
    }
    return (
    <div className="header">
      <h1 style={color}>Beton</h1>
      <a style={color} className='cont' onClick={this.props.toggleContact}>Contact</a>
    </div>
    )
  }
}

export default Header
