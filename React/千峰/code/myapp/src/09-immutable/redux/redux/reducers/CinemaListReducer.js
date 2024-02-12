const CinemaListReducer = (
	prevState = {
		list: [],
	},
	action
) => {
	let newState = { ...prevState };
	// eslint-disable-next-line default-case
	switch (action.type) {
		case 'change-list':
			newState.list = action.payload;
			return newState;
		default:
			return prevState;
	}
};

export default CinemaListReducer;
