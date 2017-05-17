const notes = (state = [], action) => {
	switch(action.type){

		case 'FETCH_NOTES':
		return action.notes;

		default:
		return state;
	}	
}

export default notes;
