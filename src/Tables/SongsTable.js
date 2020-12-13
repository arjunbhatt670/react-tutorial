import React from 'react'

const SongsTable = props => (
  <table>
    <thead>
      <tr>
        <th>Name</th>
         <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.songs.length > 0 ? (
        props.songs.map(song => (
          <tr key={song.id}>
            <td>{song.name}</td>
            
            <td>
              <button
                onClick={() => {
                  props.editSong(song)
                }}
                className="button muted-button"
              >
                Edit
              </button>
              
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No Songs</td>
        </tr>
      )}
    </tbody>
  </table>
)

export default SongsTable