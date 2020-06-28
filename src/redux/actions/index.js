export const increment = () => ({
	type: 'INC_NUMBER',
	payload: 2
});

export const decrement = () => ({
	type: 'DEC_NUMBER',
	payload: 1
});

export const setUser = (email, pass) => ({
	type: 'SET_USER',
	payload: {
		email: email,
		password: pass
	}
});

/*

	FIGURE 
	- OUT PAYLOAD OBJECT
	- REDUX STATE OBJECT
*/
