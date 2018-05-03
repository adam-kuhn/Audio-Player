import {combineReducers} from 'redux'
import {reducer as jPlayers} from 'react-jplayer'

import music from './music'

export default combineReducers({
  jPlayers,
  music
})
