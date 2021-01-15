import { SingleProp } from '../types/pokemonTypes';

export const getNamesDB = async () => {
	const url = 'https://pokeapi.co/api/v2/';
	const response = await fetch(`${url}pokemon?limit=893&offset=0`);
	const data = await response.json();
	const db = data.results?.map((poke: SingleProp, index: number) => ({
		name: poke.name,
		id: index + 1,
	}));
	return db;
};
