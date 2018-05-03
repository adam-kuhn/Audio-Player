import {SELECT_SONG} from '../actions'

const initialState = {
  title: '',
  description: '',
  file: ''
}

function music (state = initialState, action) {
  switch (action.type) {
    case (SELECT_SONG): {
      return {
        title: action.title,
        description: action.description,
        file: action.file
      }
    }
    default: {
      return state
    }
  }
}

export default music
