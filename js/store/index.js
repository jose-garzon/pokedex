import { reducer } from './reducer.js';

const createStore = (reducer, state) => {
	let updater = () => {};

	const getState = () => state;
	const dispatch = (action) => {
		state = reducer(state, action);
		updater();
	};
	const subscribe = (listener) => {
		updater = listener;
	};

	return {
		getState,
		dispatch,
		subscribe,
	};
};

//===================================================

const initialState = {
	id: 1,
	favorites: [],
};

export const generateStore = () => {
	const store = createStore(reducer, initialState);
	return store;
};
