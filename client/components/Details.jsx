import React from 'react'
import {connect} from 'react-redux'

class Details extends React.Component {
  render () {
    return (
      <div className='details body'>
        <h2 className='header'>Details:</h2>
        <h3>{this.props.title}</h3>
        <p>{this.props.description}</p>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    title: state.music.title,
    description: state.music.description
  }
}

export default connect(mapStateToProps)(Details)
