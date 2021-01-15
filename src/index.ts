// import Types and styles
import { State } from './types/storeTypes';
import './sass/index';

// import Components
import { generateStore } from './store/index';
import Screen from './components/Screen';
import Controls from './components/Controls';
import PokemonSearcher from './components/PokemonSearcher';
import Favorites from './components/Favorites';
import Lights from './components/Lights';
import StatsScreen from './components/StatsScreen';

// // this is the store of the project
const { dispatch, subscribe } = generateStore();
const pokedexScreen = new Screen();
const pokedexSearch = new PokemonSearcher(dispatch);
const pokedexControls = new Controls(dispatch);
const pokedexFavorites = new Favorites();
const PokedexLights = new Lights();
const PokedexStats = new Lights();
const pokedexStats = new StatsScreen();

// const showState = (state: State) => {
// 	console.log(state);
// };

// this are the functions listening the store changes
// subscribe(showState);
subscribe(pokedexScreen.printPokemon);
subscribe(pokedexControls.arrowControls);
subscribe(pokedexControls.addFavoritePokemon);
subscribe(pokedexFavorites.printFavorites);
subscribe(PokedexLights.successMark);
subscribe(pokedexStats.printStats);
