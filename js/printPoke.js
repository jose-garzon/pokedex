import { getPokemonData } from './getPokemonData.js';
import { getTypeColor } from './getTypeColor.js';

// get html elements
const screen = document.getElementById('screen');
const name = document.getElementById('name');
const typesSection = document.getElementById('types');
const addFavorite = document.getElementById('addFavorite');

export const printPoke = async (id, store) => {
	const { dispatch, getState } = store;
	// loader
	screen.innerHTML = `<div class="lds-ripple"><div></div><div></div></div>`;
	if (getState().favorites.length === 10) {
		addFavorite.classList.add('favorite-unactive');
	}

	// pokemon fetch
	try {
		let poke = await getPokemonData(id);
		// print picture
		screen.innerHTML = `<img class='screen__image' id='img' src=${poke.img} alt="">`;
		// print pokemon types
		typesSection.innerHTML = '';
		poke.types.map((type) => {
			const { background, color } = getTypeColor(type.type.name);
			const typeButton = document.createElement('div');
			typeButton.setAttribute('class', 'controls__type');
			typeButton.setAttribute(
				'style',
				`background: ${background}; color:${color}`
			);
			typeButton.innerHTML = type.type.name;
			typesSection.appendChild(typeButton);

			addFavorite.onclick = () => {
				dispatch({ type: 'SET_FAVORITE', payload: poke });
			};
		});

		// print pokemon name
		name.innerHTML = poke.name;
	} catch (error) {
		screen.innerHTML = `<p class='screen__error'>It looks like it is not a pokemon. <br/><br/>Try again.`;
		name.innerHTML = 'Oops!';
	}
};
