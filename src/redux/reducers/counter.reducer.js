const counterReducer = (state = 0, action) => {
	switch (action.type) {
		case 'INC_NUMBER':
			return state + action.payload;
		case 'DEC_NUMBER':
			return state - action.payload;
		default:
			return state;
	}
};

export default counterReducer;
