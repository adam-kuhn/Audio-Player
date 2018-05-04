import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {withRouter} from 'react-router'
import {actions} from 'react-jplayer'

import {selectSong} from '../actions'
import music from '../../data.json'

class MusicList extends React.Component {
  constructor () {
    super()
    this.state = {
      aToZ: true,
      musicList: music
    }
    this.handleClick = this.handleClick.bind(this)
    this.sortList = this.sortList.bind(this)
  }

  handleClick (evt) {
    const title = evt.target.getAttribute('data-title')
    const description = evt.target.getAttribute('data-description')
    const file = evt.target.getAttribute('data-file')
    const media = {
      title,
      sources: {
        mp3: `/music/${file}`
      }
    }
    this.props.dispatch(selectSong(title, description, file))
    this.props.dispatch(actions.setMedia('AudioPlayer', media))
    this.props.dispatch(actions.play('AudioPlayer'))
  }

  sortList () {
    if (this.state.aToZ === true) {
      this.setState({
        aToZ: false
      })
    } else {
      this.setState({
        aToZ: true
      })
    }
  }

  render () {
    if (this.state.aToZ === true) {
      this.state.musicList.sort((a, b) => {
        if (a.title < b.title) {
          return -1
        }
        if (a.title > b.title) {
          return 1
        }
        return 0
      })
    } else {
      this.state.musicList.sort((a, b) => {
        if (a.title > b.title) {
          return -1
        }
        if (a.title < b.title) {
          return 1
        }
        return 0
      })
    }
    return (
      <div className='music-list'>
        <button type='button' onClick={this.sortList}>Sort</button>
        <ul>
          {this.state.musicList.map((song, idx) => {
            return (
              <li key={idx}>
                <Link to='#' onClick={this.handleClick}
                  data-title={song.title} data-file={song.file}
                  data-description={song.description}>{song.title}</Link>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default connect()(withRouter(MusicList))
