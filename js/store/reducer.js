export const reducer = (state, action) => {
	const { type, payload } = action;

	switch (type) {
		case 'SET_POKEMON':
			return { ...state, id: payload };
		case 'SET_CURRENT':
			return { ...state, currentPokeData: payload };
		case 'NEXT_POKEMON':
			return { ...state, id: state.id + 1 };
		case 'BACK_POKEMON':
			return { ...state, id: state.id - 1 };
		case 'NEXT10_POKEMON':
			return { ...state, id: state.id + 10 };
		case 'BACK10_POKEMON':
			return { ...state, id: state.id - 10 };

		case 'SET_FAVORITE':
			return { ...state, favorites: [...state.favorites, payload] };

		default:
			return state;
	}
};
