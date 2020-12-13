import React, {useState, Fragment } from 'react'
import AddUserForm from './forms/AddUserForm'
import EditUserForm from './forms/EditUserForm'
import UserTable from './Tables/UserTable'
import SongsTable from './Tables/SongsTable'
import AddSongForm from './forms/AddSongForm'
import EditSongForm from './forms/EditSongForm'


const App = () => {
	// Data
	const usersData = [
		{ id: 1, name: 'Tania', username: 'floppydiskette' },
		{ id: 2, name: 'Craig', username: 'siliconeidolon' },
		{ id: 3, name: 'Ben', username: 'benisphere' },
	]
	const songData=[
		{id:1, name:'HighwaytoHell'}
	]
	
	const initialFormState = { id: null, name: '', username: '' }
	const initialSFormState={id:null,name:''}
	// Setting state
	const [songs, setSong]=useState(songData)
	const [ currentSong, setCurrentSong ] = useState(initialSFormState)
	const [ Songediting, setSEditing ] = useState(false)

	const [ users, setUsers ] = useState(usersData)
	const [ currentUser, setCurrentUser ] = useState(initialFormState)
	const [ editing, setEditing ] = useState(false)

	// CRUD operations USERS
	const addUser = user => {
		user.id = users.length + 1
		setUsers([ ...users, user ])
	}

	const deleteUser = id => {
		setEditing(false)

		setUsers(users.filter(user => user.id !== id))
	}

	const updateUser = (id, updatedUser) => {
		setEditing(false)

		setUsers(users.map(user => (user.id === id ? updatedUser : user)))
	}

	const editRow = user => {
		setEditing(true)

		setCurrentUser({ id: user.id, name: user.name, username: user.username })
	}
	// CRUD Operations Songs
	const updateSong = (id, updatedSong) => {
		setSEditing(false)

		setSong(songs.map(song => (song.id === id ? updatedSong : song)))
	}

	const editSong = song => {
		setSEditing(true)

		setCurrentSong({ id: song.id, name: song.name })
	}
	const addSong = song => {
		song.id = songs.length + 1
		setSong([ ...songs, song ])
	}
	return (
		<div className="container">
			
			<h1>CRUD App with Hooks</h1>
			<div className="flex-row">
				<div className="flex-large">
					
					{editing ? (
						<Fragment>
							<h2>Edit user</h2>
							<EditUserForm
								editing={editing}
								setEditing={setEditing}
								currentUser={currentUser}
								updateUser={updateUser}
							/>
						</Fragment>
					) : (
						<Fragment>
							<h2>Add user</h2>
							<AddUserForm addUser={addUser} />
						</Fragment>
					)}
						{Songediting ? (
						<Fragment>
							<h2>Edit songs</h2>
							<EditSongForm
								Songediting={Songediting}
								setSEditing={setSEditing}
								currentSong={currentSong}
								updateSong={updateSong}
							/>
						</Fragment>
					) : (
						<Fragment>
							<h2>Add songs</h2>
							<AddSongForm addSong={addSong} />
						</Fragment>
					)}
				</div>
				<div className="flex-large">
					<h2>View users</h2>
					<UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
				</div>

				<div className="flex-large">
					<h2>View songs</h2>
					<SongsTable songs={songs} editSong={editSong} />
				</div>
			</div>
		</div>
	)
}

export default App