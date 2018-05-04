export const SELECT_SONG = 'SELECT_SONG'

export const selectSong = (title, description, file) => {
  return {
    type: SELECT_SONG,
    title,
    description,
    file
  }
}
