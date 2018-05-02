import React from 'react'
import {HashRouter as Router} from 'react-router-dom'

import MusicList from './MusicList'

const App = () => {
  return (
    <Router>
      <div>
        <h2>React and Redux development is ready to GOOOO!</h2>
        <MusicList />
      </div>
    </Router>
  )
}

export default App
