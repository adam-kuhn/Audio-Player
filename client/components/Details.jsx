import React from 'react'
import {connect} from 'react-redux'

class Details extends React.Component {
  render () {
    return (
      <div className='details'>
        <h3>Details:</h3>
        <h4>{this.props.title}</h4>
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
