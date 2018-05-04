import music from '../../../client/reducers/music'
import {SELECT_SONG} from '../../../client/actions'

const initialState = {
  title: '',
  description: '',
  file: ''
}

test('music reducer return correct state', () => {
  const action = {
    type: SELECT_SONG,
    title: 'song title',
    description: 'song description',
    file: 'song file'
  }
  const newState = music(initialState, action)
  expect(newState.title).toBe(action.title)
})
