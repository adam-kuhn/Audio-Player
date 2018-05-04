const actions = require('../client/actions')

test('selectSong returns an object holding the song info', () => {
  const title = 'song title'
  const description = 'song description'
  const file = 'song file'
  const expected = {
    type: actions.SELECT_SONG,
    title,
    description,
    file
  }

  const actual = actions.selectSong(title, description, file)
  expect(actual).toEqual(expected)
})
