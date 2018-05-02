export const SELECT_SONG = 'SELECT_SONG'

export const selectSong = (title, description, file) => {
  console.log(title, description, file)
  return {
    type: SELECT_SONG,
    title,
    description,
    file
  }
}
