import { State, Action } from '../types/storeTypes';

export const pokeReducer = (action: Action, state: State): State => {
	const { type, payload } = action;

	switch (type) {
		case 'SET_CURRENT_POKEMON':
			return { ...state, currentPokemon: payload, loading: false, error: '' };
		case 'LOADING':
			return { ...state, loading: true };
		case 'SET_ERROR':
			return {
				...state,
				error: payload,
				loading: false,
			};
		case 'SET_FAVORITE':
			return {
				...state,
				favorites: [...state.favorites, payload],
			};

		default:
			return state;
	}
};
