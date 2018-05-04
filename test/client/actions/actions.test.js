import {SELECT_SONG, selectSong} from '../../../client/actions'

test('selectSong returns an object holding the song info', () => {
  const title = 'song title'
  const description = 'song description'
  const file = 'song file'
  const expected = {
    type: SELECT_SONG,
    title,
    description,
    file
  }
  const actual = selectSong(title, description, file)
  expect(actual).toEqual(expected)
})
