// get html elements
const next = document.getElementById('next');
const back = document.getElementById('back');
const up = document.getElementById('up');
const down = document.getElementById('down');
const randomPoke = document.getElementById('randomPoke');

// import functions
import { generateStore } from './store/index.js';
import { printPoke } from './printPoke.js';
import { searchPokemon } from './searchPokemon.js';
import { printFavorites } from './printfavorites.js';

// this is the current pokemon state
const store = generateStore();
const { dispatch, subscribe, getState } = store;

subscribe(() => {
	printPoke(getState().id, store);
	printFavorites(store);
});
// render first pokemon
dispatch({ type: 'SET_POKEMON', payload: 1 });
// handle input to search pokemon
searchPokemon(store);

// controls to change the pokemon displayed
next.onclick = () => dispatch({ type: 'NEXT_POKEMON' });
back.onclick = () => dispatch({ type: 'BACK_POKEMON' });
up.onclick = () => dispatch({ type: 'NEXT10_POKEMON' });
down.onclick = () => dispatch({ type: 'BACK10_POKEMON' });

// Set a random pokemon
randomPoke.onclick = () => {
	dispatch({
		type: 'SET_POKEMON',
		payload: Math.floor(Math.random() * 893 + 1),
	});
};
