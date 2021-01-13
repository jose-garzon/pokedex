import { getNamesDB } from './namesDB.js';

const input = document.getElementById('search');

export const searchPokemon = async (store) => {
	const { dispatch } = store;

	const db = await getNamesDB();
	const regex = /[a-z]+/;
	input.onchange = (e) => {
		const value = e.target.value.toLowerCase();

		// if the search is text find the id in the data base
		if (value.match(regex)) {
			try {
				const found = db.find((el) => el.name === value);
				dispatch({ type: 'SET_POKEMON', payload: found.id });
			} catch (error) {
				dispatch({ type: 'SET_POKEMON', payload: 0 });
			}
		} else {
			if (Number(e.target.value) <= 893) {
				dispatch({ type: 'SET_POKEMON', payload: Number(e.target.value) });
			} else {
				dispatch({ type: 'SET_POKEMON', payload: 0 });
			}
		}
	};

	// function to the input event
	// show the filtered pokemons
	input.oninput = (e) => {
		let value = e.target.value.toLowerCase();
		if (value.match(regex)) {
			let filtered = db.filter((element) => element.name.includes(value));
		}
	};
};
