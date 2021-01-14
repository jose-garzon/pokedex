// import Types and styles
import { State } from './types/storeTypes';
import './sass/index';

// import Components
import { generateStore } from './store/index';
import Screen from './components/Screen';
import Controls from './components/Controls';
import PokemonSearcher from './components/PokemonSearcher';
import Favorites from './components/Favorites';

// // this is the store of the project
const store = generateStore();
const { dispatch, subscribe } = store;
debugger;
const pokedexScreen = new Screen();
const pokedexControls = new Controls(dispatch);
const pokedexFavorites = new Favorites();
const pokedexSearch = new PokemonSearcher(dispatch);

const showState = (state: State) => {
	console.log(state);
};

subscribe(showState);
subscribe(pokedexScreen.printPoke);
subscribe(pokedexControls.addFavoritePokemon);
subscribe(pokedexControls.arrowControls);
subscribe(pokedexFavorites.printFavorites);
