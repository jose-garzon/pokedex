import { Pokemon } from './pokemonTypes';

export interface State {
	currentPokemon: Pokemon;
	error: string;
	loading: boolean;
	favorites: Array<Pokemon>;
	favoriteAdded: boolean;
}

export interface Action {
	type: string;
	payload?: any;
}
