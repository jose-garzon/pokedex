import { Action } from '../types/storeTypes';
import { getPokemonData } from '../utils/getPokemonData';

class PokemonSearcher {
	dispatch: (action: Action) => void;
	input: HTMLElement;
	constructor(dispatch: (action: Action) => void) {
		this.dispatch = dispatch;
		this.input = document.getElementById('search')!;
		this.setInitialPokemon();
		this.searchPokemon();
	}

	// set the pokemon displayed first
	setInitialPokemon = async (): Promise<void> => {
		this.dispatch({ type: 'LOADING' });
		const response = await getPokemonData(1);
		this.dispatch({ type: 'SET_CURRENT_POKEMON', payload: response });
	};

	// search bar
	searchPokemon = async () => {
		this.input.onchange = async ({ target: { value } }: any): Promise<void> => {
			const searchValue: string = value.toLowerCase();
			this.dispatch({ type: 'LOADING' });
			const response = await getPokemonData(searchValue);
			if (typeof response === 'string') {
				this.dispatch({ type: 'SET_ERROR', payload: response });
			} else {
				this.dispatch({
					type: 'SET_CURRENT_POKEMON',
					payload: response,
				});
			}
		};
	};
}

export default PokemonSearcher;
