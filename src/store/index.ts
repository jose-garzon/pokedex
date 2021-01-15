import { Action, State as StateType } from '../types/storeTypes';

import { pokeReducer } from './reducer';

const createStore = (
	reducer: (action: Action, state: StateType) => StateType,
	initialState: StateType
) => {
	let state: StateType = initialState;
	let listeners: any[] = [];

	const getState = () => state;

	const subscribe = (callback: (state: StateType) => any) =>
		listeners.push(callback);

	const notify = (newState: StateType): void => {
		listeners.forEach((lis) => lis(newState));
	};

	const dispatch = (action: Action): void => {
		state = reducer(action, state);
		notify(state);
	};

	return { subscribe, dispatch };
};
//================================
const initialState = {
	currentPokemon: {
		id: 1,
		name: '',
		img: '',
		icon: '',
		types: [],
		stats: [],
		moves: [],
	},
	error: '',
	loading: false,
	favorites: [],
};

export const generateStore = () => {
	return createStore(pokeReducer, initialState);
};
