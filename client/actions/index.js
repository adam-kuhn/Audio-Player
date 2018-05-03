export const SELECT_SONG = 'SELECT_SONG'
export const SORT_SONGS = 'SORT_SONGS'

export const selectSong = (title, description, file) => {
  return {
    type: SELECT_SONG,
    title,
    description,
    file
  }
}

export const sortSongs = (aToZ) => {
  return {
    type: SORT_SONGS,
    aToZ
  }
}
