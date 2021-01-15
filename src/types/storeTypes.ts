import { Pokemon } from './pokemonTypes';

export interface State {
	currentPokemon: Pokemon;
	error: string;
	loading: boolean;
	favorites: Array<Pokemon>;
}

export interface Action {
	type: string;
	payload?: any;
}
