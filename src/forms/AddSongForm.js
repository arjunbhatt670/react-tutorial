import React, { useState } from 'react'

const AddSongForm = props => {
	const initialFormState = { id: null, name: '' }
	const [ song, setSong ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target

		setSong({ ...song, [name]: value })
	}

	return (
		<form
			onSubmit={event => {
				event.preventDefault()
				if (!song.name) return
				props.addSong(song)
				setSong(initialFormState)
			}}
		>
			<label>Song Name</label>
			<input type="text" name="name" value={song.name} onChange={handleInputChange} />
			
			<button>Add new Song</button>
		</form>
	)
}

export default AddSongForm