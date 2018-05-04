import React from 'react'
import {HashRouter as Router} from 'react-router-dom'

import MusicList from './MusicList'
import Details from './Details'
import Player from './Player'

const App = () => {
  return (
    <Router>
      <div>
        <h2 className='main-header'>Hemisphere Audio Player</h2>
        <Player />
        <div className='body-container'>
          <MusicList />
          <Details />
        </div>
      </div>
    </Router>

  )
}

export default App
