import React from 'react'
import {Link} from 'react-router-dom'
import {withRouter} from 'react-router'
import music from '../../data.json'

class MusicList extends React.Component {
  render () {
    console.log(music)
    return (
      <ul>
        {music.map((song, idx) => {
          return (
            <li key={idx}>
              <Link to='#'>{song.title}</Link>
            </li>
          )
        })}
      </ul>
    )
  }
}

export default withRouter(MusicList)
