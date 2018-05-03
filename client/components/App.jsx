import React from 'react'
import {HashRouter as Router} from 'react-router-dom'

import MusicList from './MusicList'
import Details from './Details'
import Player from './Player'

const App = () => {
  return (
    <Router>
      <div>
        <h2>React and Redux development is ready to GOOOO!</h2>
        <Player />
        <MusicList />
        <Details />
      </div>
    </Router>
  )
}

export default App
