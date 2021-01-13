// this function get the pokemon image from the id
export const getPokemonData = async (id) => {
	const url = 'https://pokeapi.co/api/v2/pokemon/';
	try {
		const response = await fetch(`${url}${id}`);
		const data = await response.json();

		return {
			id: data.id,
			name: data.name,
			img: data.sprites.other['official-artwork'].front_default,
			icon: data.sprites.front_default,
			types: data.types,
		};
	} catch (error) {
		console.log(error.message);
	}
};
