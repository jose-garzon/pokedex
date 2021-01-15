// this function get the pokemon image from the id
import { Pokemon } from '../types/pokemonTypes';

export const getPokemonData = async (
	id: number | string
): Promise<Pokemon | undefined> => {
	const url: string = 'https://pokeapi.co/api/v2/pokemon/';
	try {
		const response: Response = await fetch(`${url}${id}`);
		const data = await response.json();

		return {
			id: data.id,
			name: data.name,
			img: data.sprites.other['official-artwork'].front_default,
			icon: data.sprites.front_default,
			types: data.types,
			stats: data.stats,
			moves: data.moves,
		};
	} catch (error) {
		console.log(error.message);
	}
};
