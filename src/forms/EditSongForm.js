import React, { useState, useEffect } from 'react'

const EditSongForm = props => {
  const [ song, setSong ] = useState(props.currentSong)

  useEffect(
    () => {
      setSong(props.currentSong)
    },
    [ props ]
  )
  // You can tell React to skip applying an effect if certain values haven’t changed between re-renders. [ props ]

  const handleInputChange = event => {
    const { name, value } = event.target

    setSong({ ...song, [name]: value })
  }

  return (
    <form
      onSubmit={event => {
        event.preventDefault()

        props.updateSong(song.id, song)
      }}
    >
      <label>Song Name</label>
      <input type="text" name="name" value={song.name} onChange={handleInputChange} />
     
      <button>Update song</button>
      <button onClick={() => props.setSEditing(false)} className="button muted-button">
        Cancel
      </button>
    </form>
  )
}

export default EditSongForm