import { State } from '../types/storeTypes';

import { Action } from '../types/storeTypes';
import { getPokemonData } from '../utils/getPokemonData';

class Controls {
	dispatch: (action: Action) => void;
	right: HTMLElement;
	left: HTMLElement;
	up: HTMLElement;
	down: HTMLElement;
	randomPoke: HTMLElement;
	addFavorite: HTMLElement;
	constructor(dispatch: (action: Action) => void) {
		this.dispatch = dispatch;
		this.right = document.getElementById('next')!;
		this.left = document.getElementById('back')!;
		this.up = document.getElementById('up')!;
		this.down = document.getElementById('down')!;
		this.randomPoke = document.getElementById('randomPoke')!;
		this.addFavorite = document.getElementById('addFavorite')!;
		this.setRandomPokemon();
	}

	setPokemon = async (id: number) => {
		this.dispatch({ type: 'LOADING' });
		const response = await getPokemonData(id);
		this.dispatch({
			type: 'SET_CURRENT_POKEMON',
			payload: response,
		});
	};

	arrowControls = ({ currentPokemon: { id } }: State) => {
		this.right.onclick = () => this.setPokemon(id + 1);
		this.up.onclick = () => this.setPokemon(id + 10);
		if (id > 10) {
			this.down.onclick = () => this.setPokemon(id - 10);
		}
		if (id > 1) {
			this.left.onclick = () => this.setPokemon(id - 1);
		}
		if (id < 10) {
			this.down.onclick = () => this.setPokemon(898);
			this.left.onclick = () => this.setPokemon(898);
		}
		document.onkeyup = ({ key }) => {
			switch (key) {
				case 'ArrowRight':
					this.setPokemon(id + 1);
					break;
				case 'ArrowUp':
					this.setPokemon(id + 10);
					break;
				case 'ArrowDown':
					this.setPokemon(id - 10);
					break;
				case 'ArrowLeft':
					this.setPokemon(id - 1);
					break;
			}
		};
	};

	setRandomPokemon = () => {
		this.randomPoke.addEventListener('click', async () => {
			let randomNumber = Math.floor(Math.random() * 893 + 1);
			this.setPokemon(randomNumber);
		});
	};

	addFavoritePokemon = ({ currentPokemon, favorites }: State) => {
		this.addFavorite.onclick = () => {
			this.dispatch({ type: 'SET_FAVORITE', payload: currentPokemon });
		};
		if (favorites.length === 10) {
			this.addFavorite.classList.add('favorite-unactive');
		}
	};
}

export default Controls;
