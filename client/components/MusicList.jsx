import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {withRouter} from 'react-router'

import music from '../../data.json'
import {selectSong} from '../actions'

class MusicList extends React.Component {
  constructor () {
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (evt) {
    const title = evt.target.getAttribute('data-title')
    const description = evt.target.getAttribute('data-description')
    const file = evt.target.getAttribute('data-file')

    this.props.dispatch(selectSong(title, description, file))
  }

  render () {
    return (
      <ul>
        {music.map((song, idx) => {
          return (
            <li key={idx}>
              <Link to='#' onClick={this.handleClick}
                data-title={song.title} data-file={song.file}
                data-description={song.description}>{song.title}</Link>
            </li>
          )
        })}
      </ul>
    )
  }
}

export default connect()(withRouter(MusicList))
