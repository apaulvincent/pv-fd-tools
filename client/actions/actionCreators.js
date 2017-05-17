export const addNote = ( id, title, note, tags, date ) => {
	return {
		type: 'ADD_NOTE',
		id, 
		date
	}
}