import React from 'react'
import {HashRouter as Router} from 'react-router-dom'

import MusicList from './MusicList'
import Details from './Details'
import ReactAudioPlayer from 'react-audio-player'

const App = () => {
  return (
    <Router>
      <div>
        <h2>React and Redux development is ready to GOOOO!</h2>
        <MusicList />
        <Details />
        <ReactAudioPlayer src='/sounds/Delta1.mp3'
          autoPlay
          controls
        />
      </div>
    </Router>
  )
}

export default App
